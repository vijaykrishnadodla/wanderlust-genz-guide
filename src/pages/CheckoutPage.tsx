
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, ShieldCheck, Sparkles, Ticket, UserCheck } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { useToast } from '@/components/ui/use-toast'; // Assuming shadcn toast
import { Link } from 'react-router-dom';

// Initialize Supabase client - replace with your actual URL and Anon key
// It's better to have a central Supabase client instance if you use it in multiple places
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or Anon Key is not defined. Please check your .env file or environment variables.");
}
// @ts-ignore
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;


const CheckoutPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCheckout = async () => {
    setIsLoading(true);
    if (!supabase) {
      toast({
        title: "Error",
        description: "Supabase client is not initialized. Cannot proceed with checkout.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      // const { data: { session } } = await supabase.auth.getSession();
      // const token = session?.access_token;
      // if (!token) {
      //   toast({ title: "Authentication Error", description: "You need to be logged in to proceed.", variant: "destructive" });
      //   setIsLoading(false);
      //   // Potentially redirect to login page here
      //   return;
      // }
      // For one-time payments, login might not be strictly required by the edge function if it supports guest checkout.
      // If login is required, uncomment the above and handle appropriately.

      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        // body: {}, // Pass any necessary body if your function expects it
        // headers: { Authorization: `Bearer ${token}` } // Pass token if function requires auth
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        throw new Error("Failed to get checkout URL.");
      }

    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        title: "Checkout Error",
        description: (error as Error).message || "Could not initiate checkout. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="text-sunny-orange hover:underline mb-6 inline-block">
            &larr; Back to Home
          </Link>
          <Card className="shadow-xl border-2 border-sunny-orange-pale">
            <CardHeader className="bg-sunny-yellow-pale p-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-3xl font-display text-sunny-orange-dark">Secure Checkout</CardTitle>
                <ShieldCheck className="h-10 w-10 text-sunny-orange" />
              </div>
              <CardDescription className="text-gray-600 mt-1">
                You're one step away from joining the Sunshine Club!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-sunny-orange-dark mb-3 flex items-center">
                  <Ticket className="h-6 w-6 mr-2 text-sunny-orange" />
                  Your Order: FullTimer Membership
                </h3>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Student Travel Buddy - FullTimer Plan</span>
                    <span className="font-bold text-2xl text-sunny-orange">$20.00</span>
                  </div>
                  <p className="text-sm text-gray-600">One-time payment for 1-year access.</p>
                  <ul className="mt-3 text-sm space-y-1 text-gray-700 list-disc list-inside">
                    <li>ISIC Card & Student Discounts</li>
                    <li>Custom Travel Itineraries</li>
                    <li>Global Student Community Access</li>
                    <li>And much more!</li>
                  </ul>
                </div>
              </div>

              <div className="bg-sunny-yellow-extralight p-6 rounded-lg border border-sunny-yellow">
                 <h3 className="text-xl font-semibold text-sunny-orange-dark mb-3 flex items-center">
                  <UserCheck className="h-6 w-6 mr-2 text-sunny-orange" />
                  Student Verification
                </h3>
                <p className="text-gray-700 text-sm">
                  After payment, you'll receive an email with instructions on how to verify your student status to activate full benefits, including your ISIC card.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  This ensures our community remains exclusive to students.
                </p>
              </div>
              
              <Button 
                onClick={handleCheckout} 
                disabled={isLoading}
                className="w-full stb-button text-lg py-3 mt-6"
              >
                {isLoading ? 'Processing...' : (
                  <>
                    Proceed to Payment <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
              <p className="text-xs text-gray-500 text-center mt-4">
                You will be redirected to Stripe for secure payment processing.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
