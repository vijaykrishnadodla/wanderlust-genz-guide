
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Plane, Map, Camera } from 'lucide-react';

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
    <section id="quiz" className="py-16 bg-gradient-to-b from-[#FDE1D3]/20 to-white relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 max-w-4xl relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block transform -rotate-1 relative">
            <h2 className="text-3xl md:text-4xl font-display bg-[#FEC6A1]/60 px-6 py-2 rounded-lg">WHERE SHOULD YOU GO NEXT?</h2>
            <div className="absolute -top-3 -right-3 bg-[#FEF7CD] p-2 rounded-lg shadow-sm">
              <Plane className="h-4 w-4 text-[#F97316]" />
            </div>
          </div>
          <p className="text-[#F97316] mt-3 font-handwritten text-xl">Take the quiz to unlock your travel vibe + perks!</p>
        </div>

        <Card className="border shadow-xl bg-gradient-to-br from-white to-[#FEF7CD]/20 transform rotate-1">
          {!showResult ? (
            <>
              <CardHeader>
                <CardTitle className="text-xl">{questions[step].question}</CardTitle>
                <CardDescription className="font-handwritten text-[#F97316]">Question {step + 1} of {questions.length}</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup className="space-y-3">
                  {questions[step].options.map((option, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-2 border border-[#FEC6A1]/30 rounded-lg p-4 hover:bg-[#FEF7CD]/20 transition-colors cursor-pointer"
                    >
                      <RadioGroupItem value={`option-${index}`} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="w-full cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious} 
                  disabled={step === 0}
                  className="border-[#FEC6A1] text-[#F97316] hover:bg-[#FEC6A1]/20"
                >
                  Previous
                </Button>
                <Button className="bg-[#F97316] hover:bg-[#fe4c02] text-white" onClick={handleNext}>
                  {step === questions.length - 1 ? "Get Results" : "Next"}
                </Button>
              </CardFooter>
            </>
          ) : (
            <>
              <CardHeader>
                <CardTitle className="text-2xl text-[#F97316]">Your Perfect Travel Destination</CardTitle>
                <CardDescription className="font-handwritten text-lg">Based on your answers, we've found your ideal match!</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="polaroid transform rotate-3 mb-6">
                  <div className="bg-[#FEF7CD]/80 p-6 rounded-full flex items-center justify-center">
                    <span className="text-5xl">✈️</span>
                  </div>
                  <p className="text-center font-handwritten mt-1">Next stop: Barcelona!</p>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#F97316]">Barcelona, Spain</h3>
                <p className="text-center text-gray-600 mb-6 font-handwritten text-lg">
                  Creative, vibrant, and full of hidden gems - Barcelona matches your spontaneous yet culture-focused travel style!
                </p>
                <div className="bg-[#FDE1D3]/40 p-4 rounded-lg w-full mb-6 transform -rotate-1 border border-[#FEC6A1]/30">
                  <p className="font-medium text-center">Unlock your personalized Barcelona guide with:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2 justify-center">
                      <span>🎟️</span> Student discount museum passes
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span>🍽️</span> Local budget-friendly tapas routes
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <Camera className="h-4 w-4 text-[#F97316]" /> Instagram-worthy hidden viewpoints
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  className="bg-[#FEC6A1] hover:bg-[#F97316] text-black font-bold transform rotate-1" 
                  onClick={handleReset}
                >
                  <Map className="mr-2 h-4 w-4" /> Take Quiz Again
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
