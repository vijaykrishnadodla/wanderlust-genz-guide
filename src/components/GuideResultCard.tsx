
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Ticket, MapPin, Sun } from 'lucide-react';

interface GuideResultCardProps {
  // Props will be added if actual data is fetched. For now, it's static.
  // cityImage?: string;
  // attractions?: string[];
  // savings?: string;
  // personalizedParagraph?: string;
  onReset?: () => void; // Optional reset handler
  isVisible: boolean;
}

const GuideResultCard: React.FC<GuideResultCardProps> = ({ onReset, isVisible }) => {
  if (!isVisible) {
    return null;
  }

  // Mock data as per prompt's expectation for GPT-4o-mini output
  const mockData = {
    city_image: '/lovable-uploads/c38cdfa9-d9f7-4717-89e4-6cce94569408.jpg', // Placeholder image
    attractions: [
      'Visit the Eiffel Tower (Student Discount!)',
      'Explore the Louvre Museum (Youth Pass Available)',
      'Stroll along the Seine River (Free!)',
    ],
    savings: 'Potential ISIC Savings in Paris: €50-€100 on activities & food!',
    personalizedParagraph: 'Bonjour! Get ready to fall in love with Paris. Your adventurous spirit will thrive exploring iconic landmarks and charming streets. Don’t forget to use your ISIC card for great deals!',
    cityName: 'Paris, France'
  };


  return (
    <Card className="w-full max-w-xl mx-auto mt-10 shadow-xl border border-sunny-orange-light bg-white/90 backdrop-blur-md">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
            <Sparkles className="h-12 w-12 text-sunny-yellow-dark animate-pulse-gentle" />
        </div>
        <CardTitle className="text-2xl font-bold text-sunny-orange">Your Personalized Travel Guide!</CardTitle>
        <CardDescription className="text-md text-gray-600">Here’s your vibe for {mockData.cityName}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {mockData.city_image && (
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src={mockData.city_image} alt={`A trip to ${mockData.cityName}`} className="w-full h-48 object-cover" />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-lg text-sunny-orange-dark mb-2 flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Top Attractions & Tips:
          </h4>
          <ul className="list-none space-y-1 text-sm text-gray-700 pl-0">
            {mockData.attractions.map((attraction, index) => (
              <li key={index} className="flex items-start">
                <Sun className="h-4 w-4 mr-2 mt-1 text-sunny-yellow flex-shrink-0" />
                <span>{attraction}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg text-sunny-orange-dark mb-2 flex items-center">
            <Ticket className="h-5 w-5 mr-2" />
            ISIC Student Savings:
          </h4>
          <p className="text-sm text-gray-700 bg-sunny-yellow-pale p-3 rounded-md">{mockData.savings}</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg text-sunny-orange-dark mb-2">Your Personal Vibe:</h4>
          <p className="text-sm text-gray-700 italic">"{mockData.personalizedParagraph}"</p>
        </div>
      </CardContent>
      {onReset && (
        <CardFooter className="flex justify-center pt-6">
          <Button onClick={onReset} className="btn-outline">
            Start New Quiz
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default GuideResultCard;
