
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, PartyPopper } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      // Here you could optionally verify the session status with another backend call
      // For now, we just acknowledge the success page was reached.
      console.log("Stripe Checkout Session ID:", sessionId);
      toast({
        title: "Payment Successful!",
        description: "Welcome to the Sunshine Club!",
        variant: "default",
        className: "bg-green-500 text-white"
      });
    }
  }, [searchParams, toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
        <PartyPopper className="h-24 w-24 text-sunny-orange mb-6 animate-bounce" />
        <h1 className="text-4xl font-display text-sunny-orange-dark mb-4">Payment Successful!</h1>
        <p className="text-xl text-gray-700 mb-8 max-w-md">
          Welcome to the Student Travel Buddy Sunshine Club! Get ready for amazing adventures and savings.
        </p>
        <CheckCircle className="h-16 w-16 text-green-500 mb-8" />
        <p className="text-gray-600 mb-4">
          You'll receive an email shortly with details on how to verify your student status and access all your benefits.
        </p>
        <Link to="/">
          <Button className="stb-button">
            Back to Homepage
          </Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccessPage;
