
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; // Added for textarea
import { toast } from '@/components/ui/use-toast'; // For onSubmit placeholder

interface Question {
  id: string;
  label: string;
  options?: string[];
  textareaPlaceholder?: string;
}

interface QuizWizardProps {
  questions: Question[];
  onSubmit: (formData: Record<string, string>) => void; // Changed to pass formData
}

const QuizWizard: React.FC<QuizWizardProps> = ({ questions, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const currentQuestion = questions[currentStep];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [currentQuestion.id]: e.target.value });
  };

  const handleRadioChange = (value: string) => {
    setFormData({ ...formData, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // This is a placeholder for actual submission logic
      console.log('Quiz submitted with data:', formData);
      toast({
        title: "Quiz Submitted!",
        description: "Your personalized guide is (mock) generated below.",
      });
      onSubmit(formData); // Trigger onSubmit passed from parent (Index.tsx)
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isNextDisabled = !formData[currentQuestion.id];

  return (
    <div className="w-full max-w-xl mx-auto mt-8 p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-sunny-yellow-light">
      <h3 className="text-xl font-semibold mb-2 text-sunny-orange-dark">{currentQuestion.label}</h3>
      <p className="text-sm text-gray-600 mb-6">Question {currentStep + 1} of {questions.length}</p>

      {currentQuestion.options ? (
        <RadioGroup value={formData[currentQuestion.id] || ''} onValueChange={handleRadioChange} className="space-y-3">
          {currentQuestion.options.map((option) => (
            <div key={option} className="flex items-center space-x-3 p-3 border border-sunny-yellow-pale rounded-lg hover:bg-sunny-yellow-pale/50 transition-colors">
              <RadioGroupItem value={option} id={`${currentQuestion.id}-${option}`} />
              <Label htmlFor={`${currentQuestion.id}-${option}`} className="font-medium cursor-pointer flex-1">{option}</Label>
            </div>
          ))}
        </RadioGroup>
      ) : currentQuestion.id === 'email' ? (
         <Input
          type="email"
          value={formData[currentQuestion.id] || ''}
          onChange={handleInputChange}
          placeholder="your.email@example.com"
          className="w-full sunny-input"
        />
      ) : (
        <Input
          type="text"
          value={formData[currentQuestion.id] || ''}
          onChange={handleInputChange}
          placeholder={currentQuestion.id === 'destination' ? 'e.g., Paris or Surprise me' : 'Your answer'}
          className="w-full sunny-input"
        />
      )}

      {currentQuestion.textareaPlaceholder && (
        <Textarea
          value={formData[`${currentQuestion.id}_details`] || ''}
          onChange={(e) => setFormData({ ...formData, [`${currentQuestion.id}_details`]: e.target.value })}
          placeholder={currentQuestion.textareaPlaceholder}
          className="w-full mt-3 sunny-input"
        />
      )}

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0} className="btn-outline">
          Previous
        </Button>
        <Button onClick={handleNext} disabled={isNextDisabled} className="btn-yellow">
          {currentStep === questions.length - 1 ? 'Get My Guide' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default QuizWizard;
