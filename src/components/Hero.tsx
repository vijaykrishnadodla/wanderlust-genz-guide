import React from 'react';
import { Button } from '@/components/ui/button';
import { Earth } from 'lucide-react';
const Hero = () => {
  return <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="inline-block bg-stb-yellow/20 text-sm px-4 py-1 rounded-full">
              <span className="font-bold">Your Official Student Travel Buddy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display">
              TRAVEL SMARTER. SPEND LESS. <span className="gradient-text">VIBE MORE.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              The ultimate travel companion for students - with perks, plans, and Sunny by your side.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <Button className="stb-button">Take the Quiz</Button>
              <Button variant="outline" className="rounded-full">Learn More</Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <img alt="Sunny - Your Travel Buddy" className="w-48 h-48 animate-float object-contain" src="/lovable-uploads/6babe884-a973-49d2-9125-fad3e4a98f6e.jpg" />
            </div>
            <div className="absolute top-10 right-10">
              <div className="bg-stb-pink p-3 rounded-full rotate-12 animate-bounce-light">
                <Earth className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="absolute bottom-10 left-10">
              <div className="bg-stb-blue p-3 rounded-full -rotate-12 animate-bounce-light">
                <span className="text-white font-bold">✈️</span>
              </div>
            </div>
            <div className="absolute bottom-20 right-20">
              <div className="bg-stb-yellow p-3 rounded-full rotate-6 animate-bounce-light">
                <span className="text-black font-bold">💯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;