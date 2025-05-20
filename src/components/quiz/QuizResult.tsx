import React from 'react';
import { Link } from 'react-router-dom';
import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map, ArrowRight } from 'lucide-react';
import { DisplayItinerary } from '../TravelQuiz'; // Assuming DisplayItinerary is exported

interface QuizResultProps {
  displayItinerary: DisplayItinerary;
  onReset: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({ displayItinerary, onReset }) => {
  return (
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
      <CardFooter className="flex flex-col sm:flex-row justify-between gap-3">
        <Button 
          className="border-[#fdad32] text-[#fe4c02] hover:bg-[#fdad32]/10 rounded-full w-full sm:w-auto py-3 px-6" 
          variant="outline"
          onClick={onReset}
        >
          <Map className="mr-2 h-4 w-4" /> Try Another Destination
        </Button>
        <Link to="/checkout" className="w-full sm:w-auto">
          <Button 
            className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] hover:brightness-105 text-white rounded-full w-full py-3 px-6"
          >
            Get Full Guide <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </>
  );
};
