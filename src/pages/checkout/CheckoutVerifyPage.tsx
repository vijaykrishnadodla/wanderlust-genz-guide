
import React, { useEffect } from 'react';
import CheckoutLayout from '@/components/checkout/CheckoutLayout';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CheckoutVerifyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Here you would typically initiate the NSC verification process.
    // For now, it's a placeholder.
  }, []);

  const handleCompleteCheckout = () => {
    // Clear session storage or mark checkout as complete
    sessionStorage.removeItem('stbCheckoutDetails');
    // Navigate to a final thank you page or dashboard
    // For now, navigate to home.
    navigate('/'); 
    // You might want to show a success toast here from a more global context or upon navigating.
  };

  return (
    <CheckoutLayout currentStep={3} totalSteps={3}>
      <div className="text-center">
        <ShieldCheck className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-display text-sunny-orange-dark mb-4">
          Step 3: Student Verification
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
          We will now attempt to verify your student status through the National Student Clearinghouse (NSC). This process is usually quick.
        </p>
        {/* Placeholder for NSC status - In a real app, this would be dynamic */}
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-8" role="alert">
          <p className="font-bold">Verification In Progress</p>
          <p>Please wait a moment. If verification is successful, you will be able to complete your checkout.</p>
        </div>
        <Button 
          onClick={handleCompleteCheckout} 
          className="stb-button bg-sunny-orange hover:bg-sunny-orange-dark text-white"
          size="lg"
        >
          Complete My Order
        </Button>
        <p className="text-sm text-gray-500 mt-4">
          If you encounter any issues, please contact support.
        </p>
      </div>
    </CheckoutLayout>
  );
};

export default CheckoutVerifyPage;
