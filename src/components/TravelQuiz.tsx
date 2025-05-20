import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plane, Map, Ticket, Calendar, Compass, Check, ArrowRight, Camera } from 'lucide-react';
import { destinations, defaultItinerary, DestinationItinerary, HolidayTypeDetails, Attraction } from '@/data/travelDestinations';

type QuizStep = 'name' | 'destination' | 'email' | 'holidayType' | 'result';

interface FormData {
  name: string;
  destination: string;
  email: string;
  holidayType: string;
  idealTripDescription?: string;
}

interface DisplayItinerary {
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
    else if (step === 'result') {
      setDisplayItinerary(null);
      setStep('holidayType');
    }
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
    if (step === 'email' && !formData.email.trim()) return true;
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
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 max-w-4xl relative z-10">
        {/* Updated SunnyMascot with new image */}
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
              <CardHeader>
                <CardTitle className="text-xl">What's your name?</CardTitle>
                <CardDescription className="font-handwritten text-[#fe4c02]">Question 1 of 4</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input 
                    type="text" 
                    name="name" 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-[#fdad32] rounded-lg"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious} 
                  disabled={true}
                  className="border-[#fdad32] text-[#fe4c02] hover:bg-[#fdad32]/10 rounded-full"
                >
                  Previous
                </Button>
                <Button 
                  className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] hover:brightness-105 text-white rounded-full" 
                  onClick={handleNext}
                  disabled={isNextDisabled()}
                >
                  Next
                </Button>
              </CardFooter>
            </>
          )}

          {step === 'destination' && (
            <>
              <CardHeader>
                <CardTitle className="text-xl">What city are you traveling to?</CardTitle>
                <CardDescription className="font-handwritten text-[#fe4c02]">Question 2 of 4 (Or type "SURPRISE ME")</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input 
                    type="text" 
                    name="destination" 
                    placeholder="Destination city or type 'SURPRISE ME'" 
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="border-[#fdad32] rounded-lg"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious} 
                  className="border-[#fdad32] text-[#fe4c02] hover:bg-[#fdad32]/10 rounded-full"
                >
                  Previous
                </Button>
                <Button 
                  className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] hover:brightness-105 text-white rounded-full" 
                  onClick={handleNext}
                  disabled={isNextDisabled()}
                >
                  Next
                </Button>
              </CardFooter>
            </>
          )}

          {step === 'email' && (
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
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious} 
                  className="border-[#fdad32] text-[#fe4c02] hover:bg-[#fdad32]/10 rounded-full"
                >
                  Previous
                </Button>
                <Button 
                  className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] hover:brightness-105 text-white rounded-full" 
                  onClick={handleNext}
                  disabled={isNextDisabled()}
                >
                  Next
                </Button>
              </CardFooter>
            </>
          )}

          {step === 'holidayType' && (
            <>
              <CardHeader>
                <CardTitle className="text-xl">What's your travel style?</CardTitle>
                <CardDescription className="font-handwritten text-[#fe4c02]">Question 4 of 4</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup className="space-y-3" value={formData.holidayType} onValueChange={handleRadioChange}>
                  <div className="flex items-center space-x-2 border border-[#fdad32]/30 rounded-lg p-4 hover:bg-[#ffeea6]/20 transition-colors cursor-pointer">
                    <RadioGroupItem value="sun-beach" id="sun-beach" />
                    <Label htmlFor="sun-beach" className="w-full cursor-pointer flex items-center gap-2">
                      <span className="text-xl">🏖️</span> Beach & Relaxation
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border border-[#fdad32]/30 rounded-lg p-4 hover:bg-[#ffeea6]/20 transition-colors cursor-pointer">
                    <RadioGroupItem value="cultural" id="cultural" />
                    <Label htmlFor="cultural" className="w-full cursor-pointer flex items-center gap-2">
                      <span className="text-xl">🏛️</span> Cultural Exploration
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border border-[#fdad32]/30 rounded-lg p-4 hover:bg-[#ffeea6]/20 transition-colors cursor-pointer">
                    <RadioGroupItem value="educational" id="educational" />
                    <Label htmlFor="educational" className="w-full cursor-pointer flex items-center gap-2">
                      <span className="text-xl">📚</span> Educational
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border border-[#fdad32]/30 rounded-lg p-4 hover:bg-[#ffeea6]/20 transition-colors cursor-pointer">
                    <RadioGroupItem value="adventure" id="adventure" />
                    <Label htmlFor="adventure" className="w-full cursor-pointer flex items-center gap-2">
                      <span className="text-xl">🧗‍♀️</span> Adventure & Sports
                    </Label>
                  </div>
                </RadioGroup>
                <div className="mt-6 space-y-2">
                  <Label htmlFor="idealTripDescription" className="font-handwritten text-[#fe4c02] text-md">
                    Or describe your ideal trip for a vibe match (optional):
                  </Label>
                  <Textarea
                    id="idealTripDescription"
                    name="idealTripDescription"
                    placeholder="E.g., 'Looking for hidden cafes, art galleries, and local music scenes...'"
                    value={formData.idealTripDescription}
                    onChange={handleInputChange}
                    className="border-[#fdad32] rounded-lg min-h-[100px]"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious} 
                  className="border-[#fdad32] text-[#fe4c02] hover:bg-[#fdad32]/10 rounded-full"
                >
                  Previous
                </Button>
                <Button 
                  className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] hover:brightness-105 text-white rounded-full" 
                  onClick={handleNext}
                  disabled={isNextDisabled()}
                >
                  Get Results
                </Button>
              </CardFooter>
            </>
          )}

          {step === 'result' && displayItinerary && (
            <>
              <CardHeader>
                <CardTitle className="text-2xl text-[#fe4c02]">{displayItinerary.title}</CardTitle>
                <CardDescription className="font-handwritten text-lg">Based on your answers, we've found your ideal match!</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="bg-white p-6 rounded-full shadow-md mb-6 border border-[#fdad32]/30">
                  <div className="bg-gradient-to-br from-[#fdad32]/50 to-[#fe4c02]/50 p-6 rounded-full flex items-center justify-center">
                    <span className="text-5xl">{displayItinerary.imageEmoji || "🌍"}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#fdad32]">{displayItinerary.city}, {displayItinerary.country}</h3>
                <p className="text-center text-gray-600 mb-6 font-handwritten text-lg">
                  {displayItinerary.vibeDescription}
                </p>
                {displayItinerary.userDescriptionConsidered && (
                  <p className="text-sm text-gray-500 mb-4 italic text-center">
                    {displayItinerary.userDescriptionConsidered}
                  </p>
                )}
                <div className="bg-[#ffeea6]/40 p-4 rounded-lg w-full mb-6 border border-[#fdad32]/30">
                  <p className="font-medium text-center">Unlock your personalized guide with:</p>
                  <ul className="mt-2 space-y-2">
                    {displayItinerary.attractions.map((attraction, index) => (
                      <li key={index} className="flex items-center gap-2 justify-center">
                        {typeof attraction.icon === 'string' ? <span>{attraction.icon}</span> : attraction.icon}
                        {attraction.name}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {displayItinerary.estimatedSavings && (
                  <div className="flex items-center">
                    <div className="bg-[#ffeea6] p-3 rounded-lg">
                      <p className="font-handwritten text-[#fe4c02]">
                        Estimated savings with ISIC card: <span className="font-bold">{displayItinerary.estimatedSavings}</span>!
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  className="border-[#fdad32] text-[#fe4c02] hover:bg-[#fdad32]/10 rounded-full" 
                  variant="outline"
                  onClick={handleReset}
                >
                  <Map className="mr-2 h-4 w-4" /> Try Another Destination
                </Button>
                <Button 
                  className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] hover:brightness-105 text-white rounded-full"
                >
                  Get Full Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </section>
  );
};

export default TravelQuiz;
