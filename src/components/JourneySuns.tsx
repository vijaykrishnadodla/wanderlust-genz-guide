
import React from 'react';

const JourneySuns = () => {
  return (
    <div className="mb-16">
      <h3 className="text-center text-2xl mb-10">
        Community of student travelers ☀️ Warm sunny glow ✨ Anywhere you go
      </h3>
      
      {/* Journey Suns Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 relative">
        {/* Connecting Sun Rays - These go behind the suns */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          {/* First connecting ray */}
          <svg className="absolute w-full h-10 top-1/3" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 20 Q 150 -20 280 20" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" opacity="0.6" className="sun-ray" />
          </svg>
          
          {/* Second connecting ray */}
          <svg className="absolute w-full h-10 top-1/2" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 20 Q 220 50 350 20" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" opacity="0.5" className="sun-ray" />
          </svg>
        </div>
        
        {/* First Sun - Smaller but still big */}
        <div className="journey-sun" style={{ width: '200px', height: '200px' }}>
          <div className="journey-sun-icon">
            <p className="font-handwritten text-white text-center px-3 text-xl">
              you already have<br />what it takes
            </p>
          </div>
        </div>
        
        {/* Second Sun - Medium */}
        <div className="journey-sun" style={{ width: '220px', height: '220px' }}>
          <div className="journey-sun-icon">
            <p className="font-handwritten text-white text-center px-3 text-xl">
              soul full of<br />sunshine
            </p>
          </div>
        </div>
        
        {/* Third Sun - Largest */}
        <div className="journey-sun" style={{ width: '240px', height: '240px' }}>
          <div className="journey-sun-icon shine-bigger">
            <p className="font-handwritten text-white text-center px-3 text-2xl sun-blink">
              SHINE ON!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySuns;
