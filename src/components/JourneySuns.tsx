
import React from 'react';
import { ArrowRight } from 'lucide-react';

const JourneySuns = () => {
  return (
    <div className="mb-16">
      <h3 className="text-center text-2xl mb-10">
        Community of student travelers ☀️ Warm sunny glow ✨ Anywhere you go
      </h3>
      
      {/* Journey Suns Section */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {/* First Sun */}
        <div className="journey-sun">
          <div className="journey-sun-icon">
            <p className="font-handwritten text-white text-center px-3">
              you already have<br />what it takes
            </p>
          </div>
        </div>
        
        {/* First Arrow */}
        <ArrowRight className="text-[#F97316] h-8 w-8 hidden md:block" />
        
        {/* Second Sun */}
        <div className="journey-sun">
          <div className="journey-sun-icon">
            <p className="font-handwritten text-white text-center px-3">
              soul full of<br />sunshine
            </p>
          </div>
        </div>
        
        {/* Second Arrow */}
        <ArrowRight className="text-[#F97316] h-8 w-8 hidden md:block" />
        
        {/* Third Sun */}
        <div className="journey-sun">
          <div className="journey-sun-icon">
            <p className="font-handwritten text-white text-center px-3 text-lg sun-blink">
              SHINE ON!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySuns;
