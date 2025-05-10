
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sun } from 'lucide-react';
import SunnyMascot from './SunnyMascot';
import SunnyAvatar from './SunnyAvatar';

const JourneySuns = () => {
  // State to track the active step
  const [activeStep, setActiveStep] = useState(0);

  // Auto-advance steps every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => prev === 3 ? 0 : prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Journey steps with orange/yellow colors
  const steps = [
    {
      title: "JOIN",
      desc: "Sign up and verify your student status",
      emoji: "🎓",
      color: "bg-gradient-to-br from-[#FFD600] to-[#FF7A00]",
      avatar: "default"
    }, 
    {
      title: "PLAN",
      desc: "Get personalized itineraries & discounts",
      emoji: "🗺️",
      color: "bg-gradient-to-br from-[#FF9900] to-[#FF7A00]",
      avatar: "educational"
    }, 
    {
      title: "TRAVEL",
      desc: "Explore with confidence and savings",
      emoji: "✈️",
      color: "bg-gradient-to-br from-[#FFCC00] to-[#FF5500]",
      avatar: "adventure"
    }, 
    {
      title: "SHARE",
      desc: "Connect with other students worldwide",
      emoji: "👋",
      color: "bg-gradient-to-br from-[#FFB347] to-[#FF7A00]",
      avatar: "cultural"
    }
  ];

  return (
    <div className="mb-16 max-w-4xl mx-auto py-8 relative">
      {/* Background wave patterns */}
      <div className="absolute top-0 left-0 right-0 w-full h-32 bg-sunny-yellow-pale/30 -z-10 rounded-full blur-3xl"></div>
      
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">YOUR TRAVEL JOURNEY</h3>
        <p className="text-[#1e1e1e]/70 mb-8 py-0 my-0 mx-0">How Sunshine Club works in 4 simple steps</p>
      </div>
      
      <div className="relative">
        {/* Sun path - the connecting line with improved gradient */}
        <div className="absolute top-14 left-0 right-0 h-2 bg-gradient-to-r from-sunny-yellow via-sunny-orange-light to-sunny-orange rounded-full shadow-sm"></div>
        
        {/* Journey steps */}
        <div className="flex justify-between relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative z-10 w-1/4 py-[40px]">
              <div 
                className={`journey-sun h-16 w-16 mb-3 cursor-pointer transition-all duration-300 ${activeStep === index ? 'scale-110' : ''}`} 
                onClick={() => setActiveStep(index)}
              >
                <div className={`journey-sun-icon h-full w-full ${step.color} ${activeStep === index ? 'shine-bigger' : ''} text-lg font-bold text-white flex items-center justify-center rounded-full`}>
                  <SunnyAvatar size="sm" travelStyle={step.avatar as any} withGlow={activeStep === index} />
                </div>
              </div>
              
              <div className={`text-center transition-opacity duration-300 ${activeStep === index ? 'opacity-100' : 'opacity-50'}`}>
                <h4 className="font-bold text-lg md:text-xl">{step.title}</h4>
                <p className="text-xs md:text-sm max-w-[120px] mx-auto">{step.desc}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-14 transform -translate-y-1/2 z-0">
                  <ArrowRight className="h-6 w-6 text-[#FF7A00]" />
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
            travelStyle={steps[activeStep].avatar as any}
          />
        </div>
      </div>
      
      {/* Wavy background decorations */}
      <div className="absolute -bottom-16 left-0 right-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#FFF0A0" fillOpacity="0.2" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,85.3C672,64,768,64,864,96C960,128,1056,192,1152,202.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default JourneySuns;
