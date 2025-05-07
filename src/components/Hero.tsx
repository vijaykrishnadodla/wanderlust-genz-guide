
import React from 'react';
import { Button } from '@/components/ui/button';
import { Earth, ArrowRight, Users, MapPin } from 'lucide-react';
import MiniSignUpForm from './MiniSignUpForm';
import SunnyMascot from './SunnyMascot';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#fff7ed] to-white relative overflow-hidden">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display">
              TRAVEL SMARTER. SPEND LESS. <span className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] bg-clip-text text-transparent">VIBE MORE.</span>
            </h1>
            
            <p className="text-lg text-[#fe4c02] font-handwritten md:text-2xl">
              The ultimate travel companion for students - with perks, plans, and Sunny by your side.
            </p>
            
            <p className="text-[#1e1e1e] text-lg">
              Join thousands of students saving <span className="font-bold text-[#fdad32]">$200+ per week</span> on travel with our exclusive membership perks and ISIC card benefits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <Button 
                className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] text-white font-bold rounded-full px-8 py-3 hover:shadow-lg hover:-translate-y-1 transition-all group"
                onClick={() => {
                  const quizElement = document.getElementById('quiz');
                  if (quizElement) {
                    quizElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Find Your Travel Style
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full border-[#fdad32] text-[#fe4c02] hover:bg-[#fdad32]/20"
                onClick={() => {
                  const offeringSection = document.getElementById('offering');
                  if (offeringSection) offeringSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Users className="mr-2 h-4 w-4" /> Join Student Travel Buddy
              </Button>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-2 mt-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#fdad32] flex items-center justify-center text-xs">👋</div>
                <div className="w-8 h-8 rounded-full bg-[#ffeea6] flex items-center justify-center text-xs">✈️</div>
                <div className="w-8 h-8 rounded-full bg-[#fdad32] flex items-center justify-center text-xs">🌞</div>
              </div>
              <p className="text-sm text-[#1e1e1e]">Joined by <span className="font-bold text-[#fdad32]">5,000+</span> student travelers</p>
            </div>
            
            {/* Popular Destinations */}
            <div className="mt-4 bg-[#ffeea6]/30 p-3 rounded-lg hidden md:block">
              <p className="font-medium text-sm mb-2">Popular Student Destinations:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1 border border-[#fdad32]/20">
                  <MapPin className="h-3 w-3 text-[#fe4c02]" /> London
                </span>
                <span className="bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1 border border-[#fdad32]/20">
                  <MapPin className="h-3 w-3 text-[#fe4c02]" /> Paris
                </span>
                <span className="bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1 border border-[#fdad32]/20">
                  <MapPin className="h-3 w-3 text-[#fe4c02]" /> Barcelona
                </span>
                <span className="bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1 border border-[#fdad32]/20">
                  <MapPin className="h-3 w-3 text-[#fe4c02]" /> Rome
                </span>
                <span className="bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1 border border-[#fdad32]/20">
                  <MapPin className="h-3 w-3 text-[#fe4c02]" /> Berlin
                </span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[450px]">
            {/* Sunny mascot as the centerpiece */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#fdad32]/20">
                <div className="relative">
                  <SunnyMascot size="lg" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <h3 className="text-2xl font-bold mt-20 text-[#fe4c02]">Meet Sunny</h3>
                    <p className="font-handwritten text-[#fdad32]">Your travel bestie!</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-10 right-10">
              <div className="bg-gradient-to-br from-[#fdad32] to-[#fe4c02] p-3 rounded-full animate-bounce-light">
                <Earth className="h-5 w-5 text-white" />
              </div>
            </div>
            
            <div className="absolute bottom-10 left-10">
              <div className="bg-gradient-to-br from-[#fdad32] to-[#fe4c02] p-3 rounded-full animate-bounce-light">
                <span className="text-white font-bold">✈️</span>
              </div>
            </div>
            
            <div className="absolute bottom-20 right-20">
              <div className="bg-gradient-to-br from-[#ffeea6] to-[#fdad32] p-3 rounded-full animate-bounce-light">
                <span className="text-[#1e1e1e] font-bold">💯</span>
              </div>
            </div>
            
            {/* Speech bubble from Sunny */}
            <div className="absolute top-28 left-24">
              <div className="bg-white p-3 rounded-lg shadow-sm max-w-[200px] relative">
                <div className="absolute top-5 -left-2 w-4 h-4 bg-white transform rotate-45"></div>
                <p className="font-handwritten text-[#fe4c02]">"Ready for adventure? I'll help you save money and discover hidden gems!" ☀️</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
