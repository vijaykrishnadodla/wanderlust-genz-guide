
import React from 'react';
import { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FormData } from '../TravelQuiz';

interface QuizStepEmailProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const QuizStepEmail: React.FC<QuizStepEmailProps> = ({ formData, handleInputChange }) => {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl">What's your email?</CardTitle>
        <CardDescription className="font-handwritten text-[#fe4c02]">Question 3 of 4 (Used to send your ISIC card and personalized travel guide offer)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <Input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
            className="border-[#fdad32] rounded-lg"
            aria-label="Your email"
          />
        </div>
      </CardContent>
    </>
  );
};
