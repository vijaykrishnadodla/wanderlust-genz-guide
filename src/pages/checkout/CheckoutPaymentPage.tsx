
import React, { useState, useEffect } from 'react';
import CheckoutLayout from '@/components/checkout/CheckoutLayout';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { CreditCard } from 'lucide-react';
import { BasicDetails } from '@/types/checkout'; // Import from new types file
import PaymentDetailsContent from '@/components/checkout/payment/PaymentDetailsContent';
import PaymentPageError from '@/components/checkout/payment/PaymentPageError';
import PaymentPageLoading from '@/components/checkout/payment/PaymentPageLoading';

// Ensure these are set in your .env file or environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or Anon Key is not defined. Please check your .env file or environment variables.");
  // It's better to throw an error or handle this more gracefully in a real app
  // For now, console.error is fine for development.
}
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

const CheckoutPaymentPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [basicDetails, setBasicDetails] = useState<BasicDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageError, setPageError] = useState<string | null>(null); // For page-level errors
  const [paymentError, setPaymentError] = useState<string | null>(null); // For errors during payment attempt

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedDetails = sessionStorage.getItem('stbCheckoutDetails');
    if (storedDetails) {
      try {
        setBasicDetails(JSON.parse(storedDetails));
      } catch (e) {
        console.error("Failed to parse details from session storage", e);
        setPageError("Could not retrieve your details. Please go back and try again.");
        toast({
          title: "Error",
          description: "Could not retrieve your details. Please go back to the previous step.",
          variant: "destructive",
        });
        navigate('/checkout/details');
      }
    } else {
      setPageError("No details found. Please start from the first step.");
      toast({
        title: "Missing Details",
        description: "Please complete the first step of the checkout.",
        variant: "destructive",
      });
      navigate('/checkout/details');
    }
  }, [navigate, toast]);

  const handleProceedToPayment = async () => {
    if (!supabase) {
      toast({ title: "Initialization Error", description: "Supabase client not available.", variant: "destructive" });
      setPaymentError("System error: Payment service not available.");
      return;
    }
    if (!basicDetails) {
      toast({ title: "Error", description: "User details are missing.", variant: "destructive" });
      setPaymentError("User details are missing. Please go back and check your information.");
      return;
    }

    setIsLoading(true);
    setPaymentError(null); // Clear previous payment errors
    console.log("Invoking create-checkout-session with details:", basicDetails);

    try {
      const { data, error: functionError } = await supabase.functions.invoke('create-checkout-session', {
        body: { basicDetails },
      });

      if (functionError) {
        console.error('Supabase function error:', functionError);
        throw new Error(functionError.message || "Failed to create checkout session.");
      }
      
      if (data.error) {
        console.error('Error from Edge Function data:', data.error);
        throw new Error(data.error || "An unknown error occurred in the Edge Function.");
      }

      if (data.url) {
        console.log('Redirecting to Stripe Checkout:', data.url);
        window.location.href = data.url;
      } else {
        console.error('No URL returned from Stripe function:', data);
        throw new Error("Could not retrieve payment URL. Please try again.");
      }
    } catch (e: any) {
      console.error("Payment initiation failed:", e);
      setPaymentError(e.message || "Payment initiation failed. Please try again.");
      toast({
        title: "Payment Error",
        description: e.message || "Could not initiate payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (pageError && !basicDetails) {
    return (
      <CheckoutLayout currentStep={2} totalSteps={3}>
        <PaymentPageError error={pageError} />
      </CheckoutLayout>
    );
  }
  
  if (!basicDetails) {
    return (
      <CheckoutLayout currentStep={2} totalSteps={3}>
        <PaymentPageLoading />
      </CheckoutLayout>
    );
  }

  return (
    <CheckoutLayout currentStep={2} totalSteps={3}>
      <Link to="/checkout/details" className="text-sunny-orange hover:underline mb-6 inline-block">
        &larr; Back to Your Details
      </Link>
      <h1 className="text-3xl font-display text-sunny-orange-dark mb-6">
        Step 2: Secure Payment
      </h1>
      <Card className="shadow-lg border border-gray-200">
        <CardHeader className="bg-gray-50 p-6">
          <CardTitle className="text-2xl text-sunny-orange-dark flex items-center">
            <CreditCard className="h-7 w-7 mr-3 text-sunny-orange" />
            Payment Details
          </CardTitle>
          <CardDescription>
            Confirm your order and proceed to secure payment with Stripe.
          </CardDescription>
        </CardHeader>
        <PaymentDetailsContent
          basicDetails={basicDetails}
          error={paymentError} // Pass the payment-specific error here
          isLoading={isLoading}
          onProceedToPayment={handleProceedToPayment}
        />
      </Card>
    </CheckoutLayout>
  );
};

export default CheckoutPaymentPage;
