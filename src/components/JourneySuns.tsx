
import React from 'react';

const JourneySuns = () => {
  return (
    <div className="mb-16">
      <h3 className="text-center text-2xl mb-10">
        Community of student travelers ☀️ Warm sunny glow ✨ Anywhere you go
      </h3>
      
      {/* Journey Suns Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 relative">
        {/* Abstract Sun Rays - These go behind the suns */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          {/* Main flowing ray from left to right */}
          <svg className="absolute w-full h-full top-0" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M20 90 C 120 30, 220 130, 320 80 C 420 30, 520 110, 620 60" 
              stroke="url(#sunrayGradient)" 
              strokeWidth="8" 
              strokeLinecap="round" 
              fill="none"
              opacity="0.6" 
              className="sun-ray"
            />
            
            {/* Secondary rays with different curves and opacities */}
            <path 
              d="M40 100 C 140 160, 240 40, 340 120 C 440 180, 540 80, 600 120" 
              stroke="#FFDD6C" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeDasharray="1, 15"
              fill="none"
              opacity="0.4" 
              className="sun-ray sun-ray-delay-1"
            />
            
            <path 
              d="M10 80 C 120 60, 220 150, 320 60 C 420 10, 520 90, 640 50" 
              stroke="#FFD700" 
              strokeWidth="6" 
              strokeDasharray="1, 20"
              strokeLinecap="round" 
              fill="none"
              opacity="0.5" 
              className="sun-ray sun-ray-delay-2"
            />
            
            {/* Define gradient for the main ray */}
            <defs>
              <linearGradient id="sunrayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFDD6C" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* First Sun - Smaller */}
        <div className="journey-sun" style={{ width: "180px", height: "180px" }}>
          <div className="journey-sun-icon">
            <p className="font-handwritten text-white text-center px-3 text-2xl">
              you already have<br />what it takes
            </p>
          </div>
        </div>
        
        {/* Second Sun - Medium */}
        <div className="journey-sun" style={{ width: "200px", height: "200px" }}>
          <div className="journey-sun-icon">
            <p className="font-handwritten text-white text-center px-3 text-2xl">
              soul full of<br />sunshine
            </p>
          </div>
        </div>
        
        {/* Third Sun - Largest */}
        <div className="journey-sun" style={{ width: "220px", height: "220px" }}>
          <div className="journey-sun-icon shine-bigger">
            <p className="font-handwritten text-white text-center px-3 text-3xl sun-blink">
              SHINE ON!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySuns;
