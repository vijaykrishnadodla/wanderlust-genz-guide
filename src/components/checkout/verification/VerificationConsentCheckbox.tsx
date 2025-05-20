
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface VerificationConsentCheckboxProps {
  isChecked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id?: string;
  label?: string;
}

const VerificationConsentCheckbox: React.FC<VerificationConsentCheckboxProps> = ({
  isChecked,
  onCheckedChange,
  id = "verification-consent",
  label = "I have read and agree to the Student Status Verification Consent."
}) => {
  return (
    <div className="flex items-center space-x-2 mt-4">
      <Checkbox id={id} checked={isChecked} onCheckedChange={onCheckedChange} />
      <Label htmlFor={id} className="text-sm font-normal text-gray-700">
        {label} <span className="text-red-500">*</span>
      </Label>
    </div>
  );
};

export default VerificationConsentCheckbox;
