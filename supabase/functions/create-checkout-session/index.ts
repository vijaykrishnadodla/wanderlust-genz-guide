
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0"; // Ensure you use a recent version
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  console.log("Create checkout session function invoked.");

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");

    if (!supabaseUrl || !supabaseAnonKey || !stripeSecretKey) {
      console.error("Missing environment variables: SUPABASE_URL, SUPABASE_ANON_KEY, or STRIPE_SECRET_KEY");
      return new Response(JSON.stringify({ error: "Internal server configuration error." }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      });
    }
    
    console.log("Environment variables loaded.");

    // Create Supabase client using the anon key for user authentication.
    const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

    // Retrieve authenticated user
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      console.error("No Authorization header provided.");
      // Allow guest checkout for one-time payments if desired, or enforce login
      // For now, let's proceed assuming guest or user provides email at Stripe checkout.
      // If user MUST be logged in, throw an error here.
      // return new Response(JSON.stringify({ error: "User not authenticated." }), {
      //   headers: { ...corsHeaders, "Content-Type": "application/json" },
      //   status: 401,
      // });
    }
    
    let userEmail: string | undefined = undefined;
    let userId: string | undefined = undefined;

    if (authHeader) {
        const token = authHeader.replace("Bearer ", "");
        const { data, error: authError } = await supabaseClient.auth.getUser(token);
        if (authError || !data.user) {
            console.warn("User authentication failed or user not found, proceeding as guest if possible.", authError?.message);
            // Decide if checkout should be blocked or proceed as guest
        } else {
            userEmail = data.user.email;
            userId = data.user.id;
            console.log(`User authenticated: ${userEmail}`);
        }
    } else {
        console.log("No auth header, proceeding as guest checkout.");
    }


    // Initialize Stripe
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2023-10-16", // Use a fixed API version
      // Enable telemetry to help Stripe improve its services.
      telemetry: true,
    });
    console.log("Stripe client initialized.");

    const origin = req.headers.get("origin") || "http://localhost:5173"; // Adjust fallback if needed

    // Create a one-time payment session
    const session = await stripe.checkout.sessions.create({
      // If user is logged in and you have a Stripe customer ID, you can pass it.
      // customer: customerId, 
      // customer_email: customerId ? undefined : userEmail, // Pass email if creating a new customer
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { 
              name: "FullTimer Membership",
              description: "One-year access to the Student Travel Buddy Sunshine Club.",
              images: [`${origin}/lovable-uploads/9238c9a8-0093-446f-a9f2-d0a191f3c306.png`] // Optional: STB logo
            },
            unit_amount: 2000, // $20.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment", // For one-time payments
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/payment-cancel`,
      // client_reference_id: userId, // Optional: if you want to associate the checkout session with your internal user ID
      // automatic_tax: { enabled: true }, // Optional: If you want Stripe to handle taxes
    });
    console.log(`Stripe session created: ${session.id}`);

    return new Response(JSON.stringify({ sessionId: session.id, url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return new Response(JSON.stringify({ error: error.message || "Failed to create checkout session." }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
