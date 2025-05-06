
import React from 'react';

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
        
        {/* First Arrow - Handwritten Style */}
        <div className="transform rotate-6 hidden md:block">
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 15C12 8 22 25 35 15C48 5 58 15 58 15" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" className="path-arrow" />
            <path d="M48 6C48 6 54 10 58 15" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M48 24C48 24 54 20 58 15" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
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
        
        {/* Second Arrow - More Abstract */}
        <div className="transform -rotate-6 hidden md:block">
          <svg width="60" height="35" viewBox="0 0 60 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 18C8 8 18 28 30 18C42 8 58 18 58 18" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 4" className="path-arrow" />
            <path d="M46 8C46 8 52 12 58 18" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M46 28C46 28 52 24 58 18" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
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
