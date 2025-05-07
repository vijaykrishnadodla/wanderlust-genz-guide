
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, MapPin } from 'lucide-react';
import SunnyMascot from './SunnyMascot';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-stb-yellow-light/40 to-white relative overflow-hidden">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Abstract circle shapes */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-stb-orange-light/30 rounded-full blur-xl"></div>
      <div className="absolute top-1/4 -right-12 w-48 h-48 bg-stb-orange-DEFAULT/30 rounded-full blur-lg"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-stb-yellow-light/40 rounded-full blur-xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="inline-block mb-2">
              <div className="social-tag">
                @STUDENTTRAVELBUDDYOFFICIAL
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display">
              TRAVEL SMARTER. SPEND LESS. <span className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] bg-clip-text text-transparent">VIBE MORE.</span>
            </h1>
            
            <p className="text-lg text-stb-orange-dark font-handwritten md:text-2xl">
              The ultimate travel companion for students - with perks, plans, and Sunny by your side.
            </p>
            
            <p className="text-[#1e1e1e] text-lg">
              Join thousands of students saving <span className="font-bold text-stb-yellow-dark">$200+ per week</span> on travel with our exclusive membership perks and ISIC card benefits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <Button 
                className="bg-gradient-to-r from-stb-yellow-dark to-stb-orange-dark text-white font-bold rounded-full px-8 py-6 h-auto hover:shadow-lg hover:-translate-y-1 transition-all group"
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
                className="rounded-full border-stb-yellow-dark text-stb-orange-dark hover:bg-stb-yellow-dark/20 h-auto py-3"
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
                <div className="w-8 h-8 rounded-full bg-stb-yellow-dark flex items-center justify-center text-xs">👋</div>
                <div className="w-8 h-8 rounded-full bg-stb-yellow-light flex items-center justify-center text-xs">✈️</div>
                <div className="w-8 h-8 rounded-full bg-stb-yellow-dark flex items-center justify-center text-xs">🌞</div>
              </div>
              <p className="text-sm text-[#1e1e1e]">Joined by <span className="font-bold text-stb-yellow-dark">5,000+</span> student travelers</p>
            </div>
            
            {/* Popular Destinations */}
            <div className="mt-4 bg-stb-yellow-light/30 p-3 rounded-lg hidden md:block">
              <p className="font-medium text-sm mb-2">Popular Student Destinations:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1 border border-stb-yellow-dark/20">
                  <MapPin className="h-3 w-3 text-stb-orange-dark" /> London
                </span>
                <span className="bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1 border border-stb-yellow-dark/20">
                  <MapPin className="h-3 w-3 text-stb-orange-dark" /> Paris
                </span>
                <span className="bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1 border border-stb-yellow-dark/20">
                  <MapPin className="h-3 w-3 text-stb-orange-dark" /> Barcelona
                </span>
                <span className="bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1 border border-stb-yellow-dark/20">
                  <MapPin className="h-3 w-3 text-stb-orange-dark" /> Rome
                </span>
                <span className="bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1 border border-stb-yellow-dark/20">
                  <MapPin className="h-3 w-3 text-stb-orange-dark" /> Berlin
                </span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[450px]">
            {/* Sunny mascot as the centerpiece */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-stb-yellow-dark/20 relative z-10">
                <div className="relative">
                  <div className="flex justify-center" style={{ width: '200px', height: '200px' }}>
                    <SunnyMascot size="lg" />
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-12 flex flex-col items-center">
                    <h3 className="text-2xl font-bold text-stb-orange-dark">Meet Sunny</h3>
                    <p className="font-handwritten text-stb-yellow-dark">Your travel bestie!</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-10 right-10 z-20">
              <div className="bg-gradient-to-br from-stb-yellow-dark to-stb-orange-dark p-3 rounded-full animate-bounce-light">
                <span className="text-white font-bold">✈️</span>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-10 z-20">
              <div className="bg-gradient-to-br from-stb-yellow-dark to-stb-orange-dark p-3 rounded-full animate-bounce-light">
                <span className="text-white font-bold">🌎</span>
              </div>
            </div>
            
            <div className="absolute bottom-20 right-20 z-20">
              <div className="bg-gradient-to-br from-stb-yellow-light to-stb-yellow-dark p-3 rounded-full animate-bounce-light">
                <span className="text-[#1e1e1e] font-bold">💯</span>
              </div>
            </div>
            
            {/* Speech bubble from Sunny */}
            <div className="absolute top-28 left-24 z-20">
              <div className="bg-white p-3 rounded-lg shadow-sm max-w-[200px] relative">
                <div className="absolute top-5 -left-2 w-4 h-4 bg-white transform rotate-45"></div>
                <p className="font-handwritten text-stb-orange-dark">"Ready for adventure? I'll help you save money and discover hidden gems!" ☀️</p>
              </div>
            </div>
            
            {/* Swipe indicator */}
            <div className="absolute right-0 bottom-0 z-20">
              <div className="swipe-indicator">
                swipe <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
