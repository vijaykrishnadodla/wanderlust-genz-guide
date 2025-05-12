
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sun } from 'lucide-react';
import SunnyMascot from './SunnyMascot';
import { useIsMobile } from '@/hooks/use-mobile';

const JourneySuns = () => {
  // State to track the active step
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useIsMobile();

  // Auto-advance steps every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => prev === 3 ? 0 : prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Journey steps with orange/yellow colors and standardized text lengths
  const steps = [{
    title: "JOIN",
    desc: "Get verified student status & ISIC card",
    emoji: "🎓",
    color: "bg-gradient-to-br from-[#FFD600] to-[#FF7A00]",
    icon: "sun"
  }, {
    title: "PLAN",
    desc: "Access discounts & custom itineraries",
    emoji: "🗺️",
    color: "bg-gradient-to-br from-[#FF9900] to-[#FF7A00]",
    icon: "sun"
  }, {
    title: "TRAVEL",
    desc: "Explore new places with confidence",
    emoji: "✈️",
    color: "bg-gradient-to-br from-[#FFCC00] to-[#FF5500]",
    icon: "sun"
  }, {
    title: "SHARE",
    desc: "Connect with students worldwide",
    emoji: "👋",
    color: "bg-gradient-to-br from-[#FFB347] to-[#FF7A00]",
    icon: "sun"
  }];

  // Get appropriate message based on the active step
  const getMascotMessage = () => {
    switch(activeStep) {
      case 0:
        return "Start your journey! 🎓";
      case 1:
        return "Let's plan! 🗺️";
      case 2:
        return "Adventure awaits! ✈️";
      case 3:
        return "Share experiences! 👋";
      default:
        return "Let's go! ☀️";
    }
  };

  return (
    <div className="mb-16 max-w-4xl mx-auto py-0 px-4">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">YOUR TRAVEL JOURNEY</h3>
        <p className="text-[#1e1e1e]/70 mb-8 py-0 my-0 mx-0">How Sunshine Club works in 4 simple steps</p>
      </div>
      
      {/* Added padding-top on mobile to accommodate the mascot */}
      <div className="relative pt-16 md:pt-0">
        {/* Sun path - the connecting line */}
        <div className="absolute top-14 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD600] via-[#FF9900] to-[#FF7A00] rounded-full"></div>
        
        {/* Journey steps */}
        <div className="flex justify-between relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative z-10 w-1/4 py-[40px]">
              <div 
                className={`journey-sun h-12 w-12 md:h-16 md:w-16 mb-3 cursor-pointer transition-all duration-300 ${activeStep === index ? 'scale-110' : ''}`} 
                onClick={() => setActiveStep(index)}
              >
                <div className={`journey-sun-icon h-full w-full ${step.color} ${activeStep === index ? 'shine-bigger' : ''} text-lg font-bold text-white flex items-center justify-center rounded-full`}>
                  <Sun className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'} text-white`} />
                  
                  {/* ISIC logo for the first step only */}
                  {index === 0 && (
                    <div className={`absolute ${isMobile ? '-bottom-6 -right-6 w-14 h-14' : '-bottom-8 -right-8 w-20 h-20'} flex items-center justify-center`}>
                      <img 
                        src="/lovable-uploads/6006eeef-3bc0-4c25-ac79-febaff57500f.png" 
                        alt="ISIC Logo" 
                        className="w-full h-full object-contain"
                        style={{
                          filter: "drop-shadow(0 0 3px rgba(255,255,255,0.9))"
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <div className={`text-center transition-opacity duration-300 ${activeStep === index ? 'opacity-100' : 'opacity-50'}`}>
                <h4 className="font-bold text-base md:text-xl">{step.title}</h4>
                <p className="text-xs md:text-sm max-w-[90px] md:max-w-[120px] mx-auto">{step.desc}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-14 transform -translate-y-1/2 z-0">
                  <ArrowRight className="h-6 w-6 text-[#FF7A00]" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Sunny mascot positioned at the active step with proper styling and messaging */}
        <div 
          className={`absolute transition-all duration-500 ease-in-out z-20 ${isMobile ? 'w-full flex justify-center' : ''}`}
          style={{
            left: isMobile ? '0' : `calc(${activeStep * 25}% + 8%)`,
            top: isMobile ? '-40px' : '-40px',
            transform: isMobile ? 'none' : 'translateX(-50%)'
          }}
        >
          {/* Use the new surfing Sunny mascot image with conditional messaging */}
          <div className="relative">
            <img 
              src="/lovable-uploads/6f9cda72-0b19-42a8-b4b8-d9dc5ef40816.png"
              alt="Sunny mascot surfing"
              className={`w-auto ${isMobile ? 'h-20' : 'h-24'} object-contain`}
              style={{
                filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))"
              }}
            />
            
            {/* Cloud-shaped speech bubble with smaller, single-line text */}
            <div 
              className={`absolute ${isMobile ? '-top-2 right-[-65px]' : '-top-2 right-[-75px]'} bg-white px-2 py-1 text-xs whitespace-nowrap max-w-[100px] text-center`}
              style={{
                borderRadius: '15px 15px 15px 15px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                zIndex: 30,
                // Cloud shape with multiple border radius values
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)'
              }}
            >
              {getMascotMessage()}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile responsive SVG rays (abstract design elements) */}
      <div className="hidden md:block">
        <svg 
          className="absolute left-0 right-0 top-8 w-full" 
          xmlns="http://www.w3.org/2000/svg" 
          height="100" 
          viewBox="0 0 800 100" 
          style={{
            zIndex: -1
          }}
        >
          <path className="sun-ray sun-ray-delay-1" d="M50,50 C150,20 250,80 350,50" stroke="#FFD600" strokeWidth="2" fill="none" />
          <path className="sun-ray" d="M150,50 C250,10 350,90 450,50" stroke="#FF9900" strokeWidth="2" fill="none" />
          <path className="sun-ray sun-ray-delay-2" d="M250,50 C350,20 450,80 550,50" stroke="#FFB347" strokeWidth="2" fill="none" />
          <path className="sun-ray" d="M350,50 C450,10 550,90 650,50" stroke="#FF7A00" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default JourneySuns;
