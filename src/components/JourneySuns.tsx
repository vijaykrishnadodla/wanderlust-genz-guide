
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
        {/* First Sun - Smaller */}
        <div className="journey-sun" style={{ width: '110px', height: '110px' }}>
          <div className="journey-sun-icon">
            <p className="font-handwritten text-white text-center px-3">
              you already have<br />what it takes
            </p>
          </div>
        </div>
        
        {/* First Arrow - Curvy */}
        <div className="transform rotate-12 hidden md:block">
          <svg width="60" height="28" viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 14C0 14 30 0 45 14C60 28 60 14 60 14" stroke="#F97316" strokeWidth="2" className="path-arrow" />
            <path d="M50 5L60 14L50 23" stroke="#F97316" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Second Sun - Medium */}
        <div className="journey-sun" style={{ width: '125px', height: '125px' }}>
          <div className="journey-sun-icon">
            <p className="font-handwritten text-white text-center px-3">
              soul full of<br />sunshine
            </p>
          </div>
        </div>
        
        {/* Second Arrow - More Curvy */}
        <div className="transform -rotate-12 hidden md:block">
          <svg width="60" height="32" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16C0 8 20 24 35 16C50 8 60 16 60 16" stroke="#F97316" strokeWidth="2" className="path-arrow" />
            <path d="M50 7L60 16L50 25" stroke="#F97316" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Third Sun - Largest */}
        <div className="journey-sun" style={{ width: '150px', height: '150px' }}>
          <div className="journey-sun-icon shine-bigger">
            <p className="font-handwritten text-white text-center px-3 text-xl sun-blink">
              SHINE ON!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySuns;
