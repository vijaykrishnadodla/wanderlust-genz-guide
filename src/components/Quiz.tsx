
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What's your travel planning style?",
      options: [
        "Detailed itinerary, everything planned",
        "Key activities planned, room for spontaneity",
        "Minimal planning, go with the flow",
        "Let someone else handle the details"
      ]
    },
    {
      question: "What's your ideal accommodation?",
      options: [
        "Social hostels to meet other travelers",
        "Budget-friendly hotels with privacy",
        "Local homestays for cultural immersion",
        "Unique spots like treehouses or glamping"
      ]
    },
    {
      question: "How do you prefer to document your travels?",
      options: [
        "Aesthetic Instagram posts and stories",
        "TikTok videos with trending sounds",
        "Journal entries and polaroid photos",
        "Just living in the moment, minimal posting"
      ]
    }
  ];

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setShowResult(false);
  };

  return (
    <section id="quiz" className="py-16 bg-white">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display mb-3">WHERE SHOULD YOU GO NEXT?</h2>
          <p className="text-gray-600">Take the quiz to unlock your travel vibe + perks!</p>
        </div>

        <Card className="border shadow-xl bg-gradient-to-br from-white to-gray-50">
          {!showResult ? (
            <>
              <CardHeader>
                <CardTitle className="text-xl">{questions[step].question}</CardTitle>
                <CardDescription>Question {step + 1} of {questions.length}</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup className="space-y-3">
                  {questions[step].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                      <RadioGroupItem value={`option-${index}`} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="w-full cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrevious} disabled={step === 0}>
                  Previous
                </Button>
                <Button className="stb-button" onClick={handleNext}>
                  {step === questions.length - 1 ? "Get Results" : "Next"}
                </Button>
              </CardFooter>
            </>
          ) : (
            <>
              <CardHeader>
                <CardTitle className="text-2xl">Your Perfect Travel Destination</CardTitle>
                <CardDescription>Based on your answers, we've found your ideal match!</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="bg-stb-yellow/20 p-6 rounded-full mb-6">
                  <span className="text-5xl">✈️</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Barcelona, Spain</h3>
                <p className="text-center text-gray-600 mb-6">
                  Creative, vibrant, and full of hidden gems - Barcelona matches your spontaneous yet culture-focused travel style!
                </p>
                <div className="bg-stb-pink/10 p-4 rounded-lg w-full mb-6">
                  <p className="font-medium text-center">Unlock your personalized Barcelona guide with:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2 justify-center">
                      <span>🎟️</span> Student discount museum passes
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span>🍽️</span> Local budget-friendly tapas routes
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span>📱</span> Instagram-worthy hidden viewpoints
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="stb-button" onClick={handleReset}>
                  Take Quiz Again
                </Button>
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </section>
  );
};

export default Quiz;
