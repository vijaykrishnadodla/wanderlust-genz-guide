
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Plane, Map, Ticket, Calendar, Compass } from 'lucide-react';

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
    <section id="quiz" className="py-16 bg-gradient-to-b from-[#FDE1D3]/20 to-white relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 max-w-4xl relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block transform -rotate-1 relative">
            <h2 className="text-3xl md:text-4xl font-display bg-[#FEC6A1]/60 px-6 py-2 rounded-lg">STUDENT TRAVEL STYLE QUIZ</h2>
            <div className="absolute -top-3 -right-3 bg-[#FEF7CD] p-2 rounded-lg shadow-sm">
              <Plane className="h-4 w-4 text-[#F97316]" />
            </div>
          </div>
          <p className="text-[#F97316] mt-3 font-handwritten text-xl">Discover your travel vibe + unlock exclusive perks!</p>
        </div>

        <Card className="border shadow-xl bg-gradient-to-br from-white to-[#FEF7CD]/20 transform rotate-1">
          {step === 'name' && (
            <>
              <CardHeader>
                <CardTitle className="text-xl">What's your name?</CardTitle>
                <CardDescription className="font-handwritten text-[#F97316]">Question 1 of 4</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input 
                    type="text" 
                    name="name" 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-[#FEC6A1]"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious} 
                  disabled={true}
                  className="border-[#FEC6A1] text-[#F97316] hover:bg-[#FEC6A1]/20"
                >
                  Previous
                </Button>
                <Button 
                  className="bg-[#F97316] hover:bg-[#fe4c02] text-white" 
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
                <CardDescription className="font-handwritten text-[#F97316]">Question 2 of 4</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input 
                    type="text" 
                    name="destination" 
                    placeholder="Destination city" 
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="border-[#FEC6A1]"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious} 
                  className="border-[#FEC6A1] text-[#F97316] hover:bg-[#FEC6A1]/20"
                >
                  Previous
                </Button>
                <Button 
                  className="bg-[#F97316] hover:bg-[#fe4c02] text-white" 
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
                <CardDescription className="font-handwritten text-[#F97316]">Question 3 of 4 (Used to send your ISIC card and travel guide)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="Your email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-[#FEC6A1]"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious} 
                  className="border-[#FEC6A1] text-[#F97316] hover:bg-[#FEC6A1]/20"
                >
                  Previous
                </Button>
                <Button 
                  className="bg-[#F97316] hover:bg-[#fe4c02] text-white" 
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
                <CardTitle className="text-xl">What kind of holiday are you planning?</CardTitle>
                <CardDescription className="font-handwritten text-[#F97316]">Question 4 of 4</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={formData.holidayType} className="space-y-3">
                  <div 
                    className="flex items-center space-x-2 border border-[#FEC6A1]/30 rounded-lg p-4 hover:bg-[#FEF7CD]/20 transition-colors cursor-pointer"
                    onClick={() => handleRadioChange('sun-beach')}
                  >
                    <RadioGroupItem value="sun-beach" id="sun-beach" />
                    <Label htmlFor="sun-beach" className="w-full cursor-pointer">Sun & Beach</Label>
                  </div>
                  <div 
                    className="flex items-center space-x-2 border border-[#FEC6A1]/30 rounded-lg p-4 hover:bg-[#FEF7CD]/20 transition-colors cursor-pointer"
                    onClick={() => handleRadioChange('cultural')}
                  >
                    <RadioGroupItem value="cultural" id="cultural" />
                    <Label htmlFor="cultural" className="w-full cursor-pointer">Cultural Exploration</Label>
                  </div>
                  <div 
                    className="flex items-center space-x-2 border border-[#FEC6A1]/30 rounded-lg p-4 hover:bg-[#FEF7CD]/20 transition-colors cursor-pointer"
                    onClick={() => handleRadioChange('educational')}
                  >
                    <RadioGroupItem value="educational" id="educational" />
                    <Label htmlFor="educational" className="w-full cursor-pointer">Educational / Study Abroad</Label>
                  </div>
                  <div 
                    className="flex items-center space-x-2 border border-[#FEC6A1]/30 rounded-lg p-4 hover:bg-[#FEF7CD]/20 transition-colors cursor-pointer"
                    onClick={() => handleRadioChange('adventure')}
                  >
                    <RadioGroupItem value="adventure" id="adventure" />
                    <Label htmlFor="adventure" className="w-full cursor-pointer">All-in-One Adventure</Label>
                  </div>
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious} 
                  className="border-[#FEC6A1] text-[#F97316] hover:bg-[#FEC6A1]/20"
                >
                  Previous
                </Button>
                <Button 
                  className="bg-[#F97316] hover:bg-[#fe4c02] text-white" 
                  onClick={handleNext}
                  disabled={isNextDisabled()}
                >
                  Get Results
                </Button>
              </CardFooter>
            </>
          )}

          {step === 'result' && itinerary && (
            <>
              <CardHeader>
                <CardTitle className="text-2xl text-[#F97316]">{itinerary.title}</CardTitle>
                <CardDescription className="font-handwritten text-lg">Here's a sneak peek at what awaits you!</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-6">
                <div className="w-full text-center">
                  <p className="text-lg mb-4">
                    {itinerary.description}
                  </p>
                </div>
                
                <div className="w-full bg-[#FDE1D3]/40 p-4 rounded-lg transform -rotate-1 border border-[#FEC6A1]/30">
                  <h3 className="font-bold text-xl mb-3 flex items-center gap-2 justify-center">
                    <Ticket className="h-5 w-5 text-[#F97316]" /> ISIC Exclusive Savings
                  </h3>
                  <div className="space-y-3">
                    {itinerary.discounts.map((discount, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-white/60 rounded-md">
                        <span className="font-medium">{discount.place}</span>
                        <div className="flex items-center gap-2">
                          <span className="line-through text-gray-500">{discount.regularPrice}</span>
                          <span className="font-bold text-[#F97316]">{discount.discountPrice}</span>
                          <span className="text-green-600 text-sm">Save {discount.savings}</span>
                        </div>
                      </div>
                    ))}
                    <div className="text-center mt-2 font-bold">
                      Total savings: €{itinerary.discounts.reduce((sum, item) => {
                        const savingsValue = parseFloat(item.savings.split(' ')[0].replace('€', ''));
                        return sum + savingsValue;
                      }, 0)}
                    </div>
                  </div>
                </div>
                
                <div className="w-full">
                  <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <Compass className="h-5 w-5 text-[#F97316]" /> Insider Recommendations
                  </h3>
                  <ul className="space-y-2">
                    {itinerary.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="bg-[#F97316] rounded-full p-1 text-white mt-1 min-w-[20px] min-h-[20px] flex items-center justify-center">
                          <Check className="h-3 w-3" />
                        </div>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="w-full bg-[#FEF7CD]/50 p-4 rounded-lg">
                  <h3 className="font-bold text-xl mb-2 text-center">
                    Want the complete guide?
                  </h3>
                  <p className="text-center mb-4">
                    Get your full customized itinerary with all the student discounts for {formData.destination}!
                  </p>
                  <Button className="stb-button w-full">
                    Buy Travel Kit ($29)
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious} 
                  className="border-[#FEC6A1] text-[#F97316] hover:bg-[#FEC6A1]/20"
                >
                  Back
                </Button>
                <Button 
                  className="bg-[#FEC6A1] hover:bg-[#F97316] text-black font-bold" 
                  onClick={handleReset}
                >
                  <Map className="mr-2 h-4 w-4" /> Try Another Destination
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
