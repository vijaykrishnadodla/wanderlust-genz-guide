
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProceedToPaymentButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

const ProceedToPaymentButton: React.FC<ProceedToPaymentButtonProps> = ({ isLoading, onClick }) => {
  return (
    <Button 
      onClick={onClick} 
      disabled={isLoading}
      className="w-full stb-button text-lg py-3 mt-4"
    >
      {isLoading ? 'Processing...' : 'Pay $20 with Stripe'}
      {!isLoading && <ArrowRight className="ml-2 h-5 w-5" />}
    </Button>
  );
};

export default ProceedToPaymentButton;
