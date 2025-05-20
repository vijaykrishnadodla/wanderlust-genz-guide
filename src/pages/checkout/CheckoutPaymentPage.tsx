
import React, { useState, useEffect } from 'react';
import CheckoutLayout from '@/components/checkout/CheckoutLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { AlertTriangle, ArrowRight, CreditCard, UserCircle } from 'lucide-react';

// Ensure these are set in your .env file or environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or Anon Key is not defined. Please check your .env file or environment variables.");
}
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

interface BasicDetails {
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  mobile?: string;
  isStudent: boolean;
  agreedToTerms: boolean;
}

const CheckoutPaymentPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [basicDetails, setBasicDetails] = useState<BasicDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedDetails = sessionStorage.getItem('stbCheckoutDetails');
    if (storedDetails) {
      try {
        setBasicDetails(JSON.parse(storedDetails));
      } catch (e) {
        console.error("Failed to parse details from session storage", e);
        setError("Could not retrieve your details. Please go back and try again.");
        toast({
          title: "Error",
          description: "Could not retrieve your details. Please go back to the previous step.",
          variant: "destructive",
        });
        navigate('/checkout/details');
      }
    } else {
      setError("No details found. Please start from the first step.");
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
      return;
    }
    if (!basicDetails) {
      toast({ title: "Error", description: "User details are missing.", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    setError(null);
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
      setError(e.message || "Payment initiation failed. Please try again.");
      toast({
        title: "Payment Error",
        description: e.message || "Could not initiate payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (error && !basicDetails) { // If error occurred before details could be loaded (e.g. no session storage)
    return (
      <CheckoutLayout currentStep={2} totalSteps={3}>
        <div className="text-center py-10">
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="mt-2 text-xl font-semibold text-gray-900">Error Loading Page</h2>
          <p className="mt-1 text-sm text-gray-600">{error}</p>
          <Button onClick={() => navigate('/checkout/details')} className="mt-6 stb-button">
            Go Back to Details
          </Button>
        </div>
      </CheckoutLayout>
    );
  }
  
  if (!basicDetails) {
    return (
      <CheckoutLayout currentStep={2} totalSteps={3}>
        <div className="text-center py-10">
            <p>Loading details...</p>
        </div>
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
        <CardContent className="p-6 md:p-8 space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <UserCircle className="h-6 w-6 mr-2 text-gray-500" />
              Your Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700">
              <p><strong>First Name:</strong> {basicDetails.firstName}</p>
              <p><strong>Last Name:</strong> {basicDetails.lastName}</p>
              <p><strong>Date of Birth:</strong> {new Date(basicDetails.dateOfBirth).toLocaleDateString()}</p>
              <p><strong>Email:</strong> {basicDetails.email}</p>
            </div>
          </div>
          
          <div className="bg-sunny-yellow-extralight p-6 rounded-lg border border-sunny-yellow">
            <h3 className="text-lg font-semibold text-sunny-orange-dark mb-2">Order Summary</h3>
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">Student Travel Buddy - FullTimer Plan</span>
              <span className="font-bold text-xl text-sunny-orange">$20.00</span>
            </div>
            <p className="text-xs text-gray-600">One-time payment for 1-year access.</p>
          </div>

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          )}

          <p className="text-sm text-gray-600">
            You will be redirected to Stripe to complete your payment securely.
            Student Travel Buddy does not store your card details.
          </p>
          
          <Button 
            onClick={handleProceedToPayment} 
            disabled={isLoading}
            className="w-full stb-button text-lg py-3 mt-4"
          >
            {isLoading ? 'Processing...' : 'Pay $20 with Stripe'}
            {!isLoading && <ArrowRight className="ml-2 h-5 w-5" />}
          </Button>
        </CardContent>
      </Card>
    </CheckoutLayout>
  );
};

export default CheckoutPaymentPage;

