import React, { useState, useEffect } from 'react';
import CheckoutLayout from '@/components/checkout/CheckoutLayout';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import { BasicDetails } from '@/types/checkout';
import PaymentDetailsContent from '@/components/checkout/payment/PaymentDetailsContent';
import PaymentPageError from '@/components/checkout/payment/PaymentPageError';
import PaymentPageLoading from '@/components/checkout/payment/PaymentPageLoading';
import PaymentSuccessAnimation from '@/components/checkout/payment/PaymentSuccessAnimation';

// Supabase client initialization is removed as we are bypassing payment
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// if (!supabaseUrl || !supabaseAnonKey) {
//   console.error("Supabase URL or Anon Key is not defined. Please check your .env file or environment variables.");
// }
// const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

const CheckoutPaymentPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [basicDetails, setBasicDetails] = useState<BasicDetails | null>(null);
  const [pageError, setPageError] = useState<string | null>(null);
  const [showPaymentAnimation, setShowPaymentAnimation] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedDetails = sessionStorage.getItem('stbCheckoutDetails');
    if (storedDetails) {
      try {
        const parsedDetails = JSON.parse(storedDetails);
        setBasicDetails(parsedDetails);
        if (!parsedDetails.dateOfBirth) {
          console.error("Date of birth is missing from stored details.");
          setPageError("Your date of birth is missing. Please go back and complete your details.");
          toast({
            title: "Missing Information",
            description: "Date of birth is required to proceed. Please go back to the details step.",
            variant: "destructive",
          });
          navigate('/checkout/details');
        }
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

  const handlePayAndProceed = () => {
    if (!basicDetails || !basicDetails.dateOfBirth) {
      toast({ title: "Error", description: "User details or date of birth are missing.", variant: "destructive" });
      setPageError("User details or date of birth are missing. Please go back and check your information.");
      navigate('/checkout/details');
      return;
    }

    setIsProcessingPayment(true);

    setTimeout(() => {
      setIsProcessingPayment(false);
      setShowPaymentAnimation(true);

      setTimeout(() => {
        setShowPaymentAnimation(false);
        try {
          const dob = new Date(basicDetails.dateOfBirth);
          if (isNaN(dob.getTime())) {
            throw new Error("Invalid date of birth format.");
          }
          const today = new Date();
          let age = today.getFullYear() - dob.getFullYear();
          const monthDiff = today.getMonth() - dob.getMonth();
          if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
          }

          console.log(`Calculated age: ${age}`);

          if (age >= 17) {
            navigate('/checkout/verify');
          } else {
            navigate('/checkout/upload-docs');
          }
        } catch (e: any) {
          console.error("Error calculating age or navigating:", e);
          setPageError(e.message || "Could not proceed due to an issue with your details. Please check them and try again.");
          toast({
            title: "Error Processing Details",
            description: e.message || "Could not proceed. Please ensure your date of birth is correct.",
            variant: "destructive",
          });
        }
      }, 2500);
    }, 1500);
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
      {showPaymentAnimation && <PaymentSuccessAnimation />}
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
            Order Confirmation
          </CardTitle>
          <CardDescription>
            Please review your details and complete the payment of $20.
          </CardDescription>
        </CardHeader>
        <PaymentDetailsContent
          basicDetails={basicDetails}
          error={pageError}
          isLoading={isProcessingPayment}
          onProceedToPayment={handlePayAndProceed}
          showAnimation={showPaymentAnimation}
        />
      </Card>
    </CheckoutLayout>
  );
};

export default CheckoutPaymentPage;
