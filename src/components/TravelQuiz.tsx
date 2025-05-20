import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plane } from 'lucide-react';
import { destinations, defaultItinerary, DestinationItinerary, HolidayTypeDetails, Attraction } from '@/data/travelDestinations';

// Import new components
import { QuizStepName } from './quiz/QuizStepName';
import { QuizStepDestination } from './quiz/QuizStepDestination';
import { QuizStepEmail } from './quiz/QuizStepEmail';
import { QuizStepHolidayType } from './quiz/QuizStepHolidayType';
import { QuizResult } from './quiz/QuizResult';
import { QuizNavigation } from './quiz/QuizNavigation';

type QuizStep = 'name' | 'destination' | 'email' | 'holidayType' | 'result';

export interface FormData {
  name: string;
  destination: string;
  email: string;
  holidayType: string;
  idealTripDescription?: string;
}

export interface DisplayItinerary {
  title: string;
  city: string;
  country: string;
  vibeDescription: string;
  attractions: Attraction[];
  estimatedSavings?: string;
  imageEmoji?: string;
  userDescriptionConsidered?: string;
}

const TravelQuiz = () => {
  const [step, setStep] = useState<QuizStep>('name');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    destination: '',
    email: '',
    holidayType: '',
    idealTripDescription: '',
  });
  const [displayItinerary, setDisplayItinerary] = useState<DisplayItinerary | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, holidayType: value }));
  };

  const handleNext = () => {
    if (step === 'name') setStep('destination');
    else if (step === 'destination') setStep('email');
    else if (step === 'email') setStep('holidayType');
    else if (step === 'holidayType') {
      generateItinerary();
      setStep('result');
    }
  };

  const handlePrevious = () => {
    if (step === 'destination') setStep('name');
    else if (step === 'email') setStep('destination');
    else if (step === 'holidayType') setStep('email');
    // No previous from result step in this refactored version, reset handles it
  };

  const handleReset = () => {
    setFormData({
      name: '',
      destination: '',
      email: '',
      holidayType: '',
      idealTripDescription: '',
    });
    setStep('name');
    setDisplayItinerary(null);
  };

  const isNextDisabled = () => {
    if (step === 'name' && !formData.name.trim()) return true;
    if (step === 'destination' && !formData.destination.trim()) return true;
    if (step === 'email' && !formData.email.trim()) return true; // Add email validation later if needed
    if (step === 'holidayType' && !formData.holidayType) return true;
    return false;
  };

  const generateItinerary = () => {
    let chosenDestination: DestinationItinerary | undefined;
    let finalCity = formData.destination;
    let finalCountry = "Unknown";

    if (formData.destination.trim().toUpperCase() === 'SURPRISE ME') {
      if (destinations.length > 0) {
        const randomIndex = Math.floor(Math.random() * destinations.length);
        chosenDestination = destinations[randomIndex];
        finalCity = chosenDestination.city;
        finalCountry = chosenDestination.country;
      } else {
        chosenDestination = undefined;
        finalCity = "A Mysterious Place";
      }
    } else {
      chosenDestination = destinations.find(
        d => d.city.toLowerCase() === formData.destination.trim().toLowerCase()
      );
      if (chosenDestination) {
        finalCity = chosenDestination.city;
        finalCountry = chosenDestination.country;
      } else {
        finalCity = formData.destination.trim();
      }
    }

    let holidayDetails: HolidayTypeDetails | undefined = chosenDestination?.holidayTypes[formData.holidayType];

    if (!holidayDetails) {
      if (chosenDestination && Object.keys(chosenDestination.holidayTypes).length > 0) {
        const firstAvailableHolidayTypeKey = Object.keys(chosenDestination.holidayTypes)[0];
        holidayDetails = chosenDestination.holidayTypes[firstAvailableHolidayTypeKey];
      } else {
        holidayDetails = defaultItinerary;
        if (!chosenDestination) finalCountry = "Your Chosen Land";
      }
    }

    const selectedHolidayTypeName = formData.holidayType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const itineraryResult: DisplayItinerary = {
      title: `Your ${selectedHolidayTypeName} Trip in ${finalCity}`,
      city: finalCity,
      country: finalCountry,
      vibeDescription: holidayDetails.vibeDescription,
      attractions: holidayDetails.attractions,
      imageEmoji: chosenDestination?.imageEmoji || "🌍",
      estimatedSavings: holidayDetails.isicSavings 
        ? `${holidayDetails.isicSavings.total} ${holidayDetails.isicSavings.period}`
        : "Significant savings with ISIC!",
      userDescriptionConsidered: formData.idealTripDescription 
        ? `We've noted your interest: "${formData.idealTripDescription.substring(0, 50)}${formData.idealTripDescription.length > 50 ? '...' : ''}"`
        : undefined,
    };
    
    setDisplayItinerary(itineraryResult);
  };

  return (
    <section id="quiz" className="py-16 bg-gradient-to-b from-[#ffeea6]/30 to-white relative">
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 max-w-4xl relative z-10">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img 
              src="/lovable-uploads/32c6b682-f72e-4893-b586-0026cc34060d.png" 
              alt="Sunny mascot traveler" 
              className="h-24 md:h-32 w-auto sunny-float"
            />
            <div 
              className="absolute font-handwritten text-sunny-orange text-sm md:text-base leading-tight"
              style={{
                zIndex: 30,
                textAlign: 'center',
                top: '10px',
                right: '-110px',
                maxWidth: '120px',
                textShadow: '0 1px 2px rgba(255,255,255,0.5)'
              }}
            >
              {step === 'result' ? "Wow, perfect match! ✨" : "Let's find your ideal destination! 🌍"}
            </div>
          </div>
        </div>
        
        <div className="text-center mb-10">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-display bg-gradient-to-r from-[#fdad32] to-[#fe4c02] text-white px-6 py-2 rounded-lg">STUDENT TRAVEL STYLE QUIZ</h2>
            <div className="absolute -top-3 -right-3 bg-[#ffeea6] p-2 rounded-lg shadow-sm">
              <Plane className="h-4 w-4 text-[#fdad32]" />
            </div>
          </div>
          <p className="text-[#fe4c02] mt-3 font-handwritten text-xl">Discover your travel vibe + unlock exclusive perks!</p>
        </div>

        <Card className="border shadow-xl bg-gradient-to-br from-white to-[#ffeea6]/20">
          {step === 'name' && (
            <>
              <QuizStepName formData={formData} handleInputChange={handleInputChange} />
              <QuizNavigation
                onPrevious={handlePrevious}
                onNext={handleNext}
                isPreviousDisabled={true}
                isNextDisabled={isNextDisabled()}
                showPreviousButton={false}
              />
            </>
          )}

          {step === 'destination' && (
            <>
              <QuizStepDestination formData={formData} handleInputChange={handleInputChange} />
              <QuizNavigation
                onPrevious={handlePrevious}
                onNext={handleNext}
                isNextDisabled={isNextDisabled()}
              />
            </>
          )}

          {step === 'email' && (
            <>
              <QuizStepEmail formData={formData} handleInputChange={handleInputChange} />
              <QuizNavigation
                onPrevious={handlePrevious}
                onNext={handleNext}
                isNextDisabled={isNextDisabled()}
              />
            </>
          )}
          
          {step === 'holidayType' && (
            <>
              <QuizStepHolidayType 
                formData={formData} 
                handleInputChange={handleInputChange} 
                handleRadioChange={handleRadioChange} 
              />
              <QuizNavigation
                onPrevious={handlePrevious}
                onNext={handleNext}
                isNextDisabled={isNextDisabled()}
                nextButtonText="Get Results"
              />
            </>
          )}

          {step === 'result' && displayItinerary && (
            <QuizResult displayItinerary={displayItinerary} onReset={handleReset} />
          )}
        </Card>
      </div>
    </section>
  );
};

export default TravelQuiz;
