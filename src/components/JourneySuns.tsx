
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import SunnyMascot from './SunnyMascot';

const JourneySuns = () => {
  // State to track the active step
  const [activeStep, setActiveStep] = useState(0);
  
  // Auto-advance steps every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 3 ? 0 : prev + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Journey steps
  const steps = [
    {
      title: "JOIN",
      desc: "Sign up and verify your student status",
      emoji: "🎓",
      color: "bg-gradient-to-br from-[#70d5ff] to-[#1b729d]"
    },
    {
      title: "PLAN",
      desc: "Get personalized itineraries & discounts",
      emoji: "🗺️",
      color: "bg-gradient-to-br from-[#37fbb5] to-[#40b8b8]"
    },
    {
      title: "TRAVEL",
      desc: "Explore with confidence and savings",
      emoji: "✈️",
      color: "bg-gradient-to-br from-[#fdad32] to-[#fe4c02]"
    },
    {
      title: "SHARE",
      desc: "Connect with other students worldwide",
      emoji: "👋",
      color: "bg-gradient-to-br from-[#fe77a0] to-[#f20cfa]"
    }
  ];
  
  return (
    <div className="py-8 mb-16 max-w-4xl mx-auto">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">YOUR TRAVEL JOURNEY</h3>
        <p className="text-[#1e1e1e]/70 mb-8">How Sunshine Club works in 4 simple steps</p>
      </div>
      
      <div className="relative">
        {/* Sun path - the connecting line */}
        <div className="absolute top-14 left-0 right-0 h-1 bg-gradient-to-r from-[#70d5ff] via-[#fdad32] to-[#fe77a0] rounded-full"></div>
        
        {/* Journey steps */}
        <div className="flex justify-between relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative z-10 w-1/4">
              <div 
                className={`journey-sun h-16 w-16 mb-3 cursor-pointer transition-all duration-300 ${activeStep === index ? 'scale-110' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`journey-sun-icon h-full w-full ${step.color} ${activeStep === index ? 'shine-bigger' : ''} text-lg font-bold text-white flex items-center justify-center`}>
                  <span className="text-xl">{step.emoji}</span>
                </div>
              </div>
              
              <div className={`text-center transition-opacity duration-300 ${activeStep === index ? 'opacity-100' : 'opacity-50'}`}>
                <h4 className="font-bold text-lg md:text-xl">{step.title}</h4>
                <p className="text-xs md:text-sm max-w-[120px] mx-auto">{step.desc}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-14 transform -translate-y-1/2 z-0">
                  <ArrowRight className="h-6 w-6 text-[#fdad32]" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Sunny mascot positioned at the active step */}
        <div 
          className="absolute transition-all duration-500 ease-in-out"
          style={{ 
            left: `calc(${activeStep * 25}% + 8%)`, 
            top: '-40px',
            transform: 'translateX(-50%)'
          }}
        >
          <SunnyMascot 
            size="sm" 
            withText 
            message={activeStep === 3 ? "You made it! 🎉" : "Let's go! ☀️"}
          />
        </div>
      </div>
      
      {/* Mobile responsive SVG rays (abstract design elements) */}
      <div className="hidden md:block">
        <svg className="absolute left-0 right-0 top-8 w-full" xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 800 100" style={{zIndex:-1}}>
          <path className="sun-ray sun-ray-delay-1" d="M50,50 C150,20 250,80 350,50" stroke="#fee715" strokeWidth="2" fill="none" />
          <path className="sun-ray" d="M150,50 C250,10 350,90 450,50" stroke="#fdad32" strokeWidth="2" fill="none" />
          <path className="sun-ray sun-ray-delay-2" d="M250,50 C350,20 450,80 550,50" stroke="#70d5ff" strokeWidth="2" fill="none" />
          <path className="sun-ray" d="M350,50 C450,10 550,90 650,50" stroke="#fe77a0" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default JourneySuns;
