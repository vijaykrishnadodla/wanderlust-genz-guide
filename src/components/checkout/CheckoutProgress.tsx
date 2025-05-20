
import React from 'react';
import { Progress } from "@/components/ui/progress"; // Using shadcn Progress

interface CheckoutProgressProps {
  currentStep: number;
  totalSteps: number;
}

const stepNames = ["Your Details", "Payment", "Verification", "Confirmation"]; // Updated step names

const CheckoutProgress: React.FC<CheckoutProgressProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;
  // Ensure stepName is correctly indexed, currentStep is 1-based
  const currentStepName = stepNames[currentStep - 1] || `Step ${currentStep}`;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-sunny-orange-dark">
          Step {currentStep} of {totalSteps}: {currentStepName}
        </h2>
        <span className="text-sm text-gray-600">{Math.min(currentStep, totalSteps)}/{totalSteps}</span>
      </div>
      <Progress value={progressPercentage} className="w-full h-2 bg-sunny-yellow-pale [&>*]:bg-sunny-orange" />
    </div>
  );
};

export default CheckoutProgress;
