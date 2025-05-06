
import React from 'react';
import { Button } from '@/components/ui/button';
import { Earth, ArrowRight, Users } from 'lucide-react';
import MiniSignUpForm from './MiniSignUpForm';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#FEF7CD]/60 to-white relative overflow-hidden">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display transform -rotate-1">
              TRAVEL SMARTER. SPEND LESS. <span className="gradient-text">VIBE MORE.</span>
            </h1>
            
            <p className="text-lg text-[#ea384c] font-handwritten md:text-2xl">
              The ultimate travel companion for students - with perks, plans, and Sunny by your side.
            </p>
            
            <p className="text-gray-700 text-lg">
              Join thousands of students saving <span className="font-bold text-[#F97316]">$200+ per week</span> on travel with our exclusive membership perks and ISIC card benefits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <Button className="stb-button transform rotate-1 group">
                Find Your Travel Style
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full border-[#FEC6A1] text-[#F97316] hover:bg-[#FEC6A1]/20 transform -rotate-1"
                onClick={() => {
                  const offeringSection = document.getElementById('offering');
                  if (offeringSection) offeringSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Users className="mr-2 h-4 w-4" /> Join The Sunshine Club Now
              </Button>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-2 mt-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#FEC6A1] flex items-center justify-center text-xs">👋</div>
                <div className="w-8 h-8 rounded-full bg-[#FEF7CD] flex items-center justify-center text-xs">✈️</div>
                <div className="w-8 h-8 rounded-full bg-[#FDE1D3] flex items-center justify-center text-xs">🌞</div>
              </div>
              <p className="text-sm text-gray-600">Joined by <span className="font-bold text-[#F97316]">5,000+</span> student travelers</p>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[450px]">
            {/* Polaroid-style main image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="polaroid transform rotate-3 shadow-lg">
                <img alt="Sunny - Your Travel Buddy" className="w-48 h-48 object-contain retro-filter" src="/lovable-uploads/6babe884-a973-49d2-9125-fad3e4a98f6e.jpg" />
                <p className="text-center font-handwritten mt-1">meet SUNNY your travel BESTIE!</p>
              </div>
            </div>
            
            <div className="absolute top-10 right-10">
              <div className="bg-[#F97316] p-3 rounded-full rotate-12 animate-bounce-light">
                <Earth className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="absolute bottom-10 left-10">
              <div className="bg-[#FEC6A1] p-3 rounded-full -rotate-12 animate-bounce-light polaroid">
                <span className="text-[#F97316] font-bold">✈️</span>
              </div>
            </div>
            <div className="absolute bottom-20 right-20">
              <div className="bg-[#FEF7CD] p-3 rounded-full rotate-6 animate-bounce-light">
                <span className="text-[#F97316] font-bold">💯</span>
              </div>
            </div>
            
            {/* Additional decorative elements */}
            <div className="absolute top-28 left-24 transform -rotate-6">
              <div className="bg-white p-1 shadow-sm">
                <p className="font-handwritten text-[#F97316] text-sm">"You pack the snacks, I'll plan the vibe" ☀️</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
