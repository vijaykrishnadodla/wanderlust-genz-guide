
import React from 'react';
import { ArrowRight } from 'lucide-react';

const JourneySuns = () => {
  return (
    <div className="mb-16">
      <h3 className="text-center text-2xl mb-10">
        Community of student travelers ☀️ Warm sunny glow ✨ Anywhere you go
      </h3>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="journey-sun mb-4">
            <div className="journey-sun-icon flex items-center justify-center">
              <span className="text-white text-lg font-handwritten">you already have what it takes</span>
            </div>
          </div>
          <p className="text-gray-700">Student travelers who are also going</p>
        </div>
        
        <div className="hidden md:flex items-center justify-center">
          <ArrowRight className="h-8 w-8 text-[#F97316]" />
        </div>
        
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="journey-sun mb-4">
            <div className="journey-sun-icon flex items-center justify-center">
              <span className="text-white text-lg font-handwritten">soul full of sunshine</span>
            </div>
          </div>
          <p className="text-gray-700">Message them to share costs on rides or stays</p>
        </div>
        
        <div className="hidden md:flex items-center justify-center">
          <ArrowRight className="h-8 w-8 text-[#F97316]" />
        </div>
        
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="journey-sun mb-4">
            <div className="journey-sun-icon flex items-center justify-center">
              <span className="text-white text-lg font-handwritten sun-blink">SHINE ON!</span>
            </div>
          </div>
          <p className="text-gray-700">Save money, travel more, experience authentic places</p>
        </div>
      </div>
    </div>
  );
};

export default JourneySuns;
