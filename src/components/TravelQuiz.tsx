
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Plane, Map, Ticket, Calendar, Compass, Check, ArrowRight, Camera } from 'lucide-react';
import SunnyMascot from './SunnyMascot';

type QuizStep = 'name' | 'destination' | 'email' | 'holidayType' | 'result';

interface FormData {
  name: string;
  destination: string;
  email: string;
  holidayType: string;
}

interface Itinerary {
  title: string;
  description: string;
  discounts: {
    place: string;
    regularPrice: string;
    discountPrice: string;
    savings: string;
  }[];
  recommendations: string[];
}

const TravelQuiz = () => {
  const [step, setStep] = useState<QuizStep>('name');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    destination: '',
    email: '',
    holidayType: '',
  });
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (value: string) => {
    setFormData({ ...formData, holidayType: value });
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
    else if (step === 'result') setStep('holidayType');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      destination: '',
      email: '',
      holidayType: '',
    });
    setStep('name');
    setItinerary(null);
  };

  const isNextDisabled = () => {
    if (step === 'name' && !formData.name) return true;
    if (step === 'destination' && !formData.destination) return true;
    if (step === 'email' && !formData.email) return true;
    if (step === 'holidayType' && !formData.holidayType) return true;
    return false;
  };

  const generateItinerary = () => {
    // Generate a personalized itinerary based on the form data
    const holidayTypes: Record<string, Itinerary> = {
      'sun-beach': {
        title: `Your Beach Getaway in ${formData.destination}`,
        description: `${formData.name}, get ready for sun-soaked days and vibrant beach vibes in ${formData.destination}! With your ISIC card, you'll save on beach activities and shoreline adventures.`,
        discounts: [
          {
            place: 'Beach Club Access',
            regularPrice: '€25',
            discountPrice: '€15',
            savings: '€10 (40%)'
          },
          {
            place: 'Snorkeling Tour',
            regularPrice: '€45',
            discountPrice: '€32',
            savings: '€13 (29%)'
          },
          {
            place: 'Sunset Cruise',
            regularPrice: '€60',
            discountPrice: '€45',
            savings: '€15 (25%)'
          }
        ],
        recommendations: [
          'Visit the hidden coves at Playa Secreto',
          'Try the student-favorite seafood at Coastal Kitchen',
          'Join the weekly beach volleyball tournament (free with ISIC)'
        ]
      },
      'cultural': {
        title: `Your Cultural Journey in ${formData.destination}`,
        description: `${formData.name}, immerse yourself in the rich heritage and artistic wonders of ${formData.destination}! Your ISIC card unlocks special access and savings at cultural hotspots.`,
        discounts: [
          {
            place: 'City Museum',
            regularPrice: '€18',
            discountPrice: '€9',
            savings: '€9 (50%)'
          },
          {
            place: 'Historic Quarter Walking Tour',
            regularPrice: '€30',
            discountPrice: '€15',
            savings: '€15 (50%)'
          },
          {
            place: 'Local Theatre Performance',
            regularPrice: '€40',
            discountPrice: '€25',
            savings: '€15 (37%)'
          }
        ],
        recommendations: [
          'Don\'t miss the hidden art galleries in the Old Town',
          'Student night at Cultural Café every Thursday (25% off)',
          'Free language exchange meetups at International House'
        ]
      },
      'educational': {
        title: `Your Study Experience in ${formData.destination}`,
        description: `${formData.name}, enhance your academic journey in ${formData.destination} with exclusive student perks! Your ISIC card is the key to balancing study and exploration.`,
        discounts: [
          {
            place: 'University Library Access',
            regularPrice: '€12/day',
            discountPrice: 'Free',
            savings: '€12 (100%)'
          },
          {
            place: 'Language Course',
            regularPrice: '€200',
            discountPrice: '€140',
            savings: '€60 (30%)'
          },
          {
            place: 'Academic Conference',
            regularPrice: '€75',
            discountPrice: '€30',
            savings: '€45 (60%)'
          }
        ],
        recommendations: [
          'Join the international students community at Global House',
          'Study-friendly cafés with student discounts near campus',
          'Weekend educational excursions (20% off with ISIC)'
        ]
      },
      'adventure': {
        title: `Your Adventure Quest in ${formData.destination}`,
        description: `${formData.name}, get ready for adrenaline-pumping experiences in ${formData.destination}! Your ISIC card is your ticket to affordable thrills and unforgettable moments.`,
        discounts: [
          {
            place: 'Zip-lining Experience',
            regularPrice: '€50',
            discountPrice: '€35',
            savings: '€15 (30%)'
          },
          {
            place: 'Mountain Bike Rental (Full Day)',
            regularPrice: '€35',
            discountPrice: '€20',
            savings: '€15 (43%)'
          },
          {
            place: 'Guided Hiking Tour',
            regularPrice: '€40',
            discountPrice: '€28',
            savings: '€12 (30%)'
          }
        ],
        recommendations: [
          'Try the hidden trails at Adventure Park (15% off entry)',
          'Student-favorite hostel with adventure packages',
          'Group excursions every Saturday (extra 10% off with ISIC)'
        ]
      }
    };
    
    setItinerary(holidayTypes[formData.holidayType] || holidayTypes['adventure']);
  };

  return (
    <section id="quiz" className="py-16 bg-gradient-to-b from-[#ffeea6]/30 to-white relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 max-w-4xl relative z-10">
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
          <div className="absolute -top-8 -right-4 hidden md:block">
            <SunnyMascot withText message={step === 'result' ? "Wow, perfect match! ✨" : "Let's find your ideal destination! 🌍"} />
          </div>
          
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
                <CardDescription className="font-handwritten text-[#fe4c02]">Question 2 of 4</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input 
                    type="text" 
                    name="destination" 
                    placeholder="Destination city" 
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
                <CardDescription className="font-handwritten text-[#fe4c02]">Question 3 of 4 (Used to send your ISIC card and travel guide)</CardDescription>
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

          {step === 'result' && (
            <>
              <CardHeader>
                <CardTitle className="text-2xl text-[#fe4c02]">Your Perfect Travel Destination</CardTitle>
                <CardDescription className="font-handwritten text-lg">Based on your answers, we've found your ideal match!</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="bg-white p-6 rounded-full shadow-md mb-6 border border-[#fdad32]/30">
                  <div className="bg-gradient-to-br from-[#fdad32]/50 to-[#fe4c02]/50 p-6 rounded-full flex items-center justify-center">
                    <span className="text-5xl">✈️</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#fdad32]">Barcelona, Spain</h3>
                <p className="text-center text-gray-600 mb-6 font-handwritten text-lg">
                  Creative, vibrant, and full of hidden gems - Barcelona matches your spontaneous yet culture-focused travel style!
                </p>
                <div className="bg-[#ffeea6]/40 p-4 rounded-lg w-full mb-6 border border-[#fdad32]/30">
                  <p className="font-medium text-center">Unlock your personalized Barcelona guide with:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2 justify-center">
                      <span>🎟️</span> Student discount museum passes
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span>🍽️</span> Local budget-friendly tapas routes
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <Camera className="h-4 w-4 text-[#fdad32]" /> Instagram-worthy hidden viewpoints
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#ffeea6] p-3 rounded-lg">
                    <p className="font-handwritten text-[#fe4c02]">
                      Estimated savings with ISIC card: <span className="font-bold">€158</span> on a 7-day trip!
                    </p>
                  </div>
                </div>
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
