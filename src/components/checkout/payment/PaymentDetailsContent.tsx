
import React from 'react';
import { CardContent } from '@/components/ui/card';
import UserInfoDisplay from './UserInfoDisplay';
import OrderSummaryDisplay from './OrderSummaryDisplay';
import ProceedToPaymentButton from './ProceedToPaymentButton';
import { BasicDetails } from '@/types/checkout';

interface PaymentDetailsContentProps {
  basicDetails: BasicDetails;
  error: string | null; // This now reflects page-level errors from CheckoutPaymentPage
  isLoading: boolean;
  onProceedToPayment: () => void;
}

const PaymentDetailsContent: React.FC<PaymentDetailsContentProps> = ({
  basicDetails,
  error,
  isLoading,
  onProceedToPayment,
}) => {
  return (
    <CardContent className="p-6 md:p-8 space-y-6">
      <UserInfoDisplay details={basicDetails} />
      <OrderSummaryDisplay />

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
          <p className="font-bold">Important</p>
          <p>{error}</p>
        </div>
      )}

      <p className="text-sm text-gray-600">
        Please confirm your details. Clicking "Proceed to Verification" will take you to the next step.
      </p>
      
      <ProceedToPaymentButton isLoading={isLoading} onClick={onProceedToPayment} />
    </CardContent>
  );
};

export default PaymentDetailsContent;
