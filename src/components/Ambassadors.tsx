
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const Ambassadors = () => {
  return (
    <section id="ambassadors" className="py-16 bg-stb-yellow/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/38c8baea-c639-49d2-8de8-d70bfadeee89.png" 
              alt="When you can't find the sunshine, be the sunshine" 
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display mb-4">AMBASSADOR PROGRAM</h2>
            <p className="text-xl mb-6">
              Are you an experienced student traveler or do you want to encourage others to travel? <Globe className="inline-block h-6 w-6 text-stb-blue" />
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">Share Your Journey. Inspire Others.</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-stb-pink font-bold">•</span>
                  <span>Share your travel experiences with fellow students</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-stb-pink font-bold">•</span>
                  <span>Build a community of like-minded explorers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-stb-pink font-bold">•</span>
                  <span>Get exclusive ambassador perks and rewards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-stb-pink font-bold">•</span>
                  <span>Access to special events and networking opportunities</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <Button className="bg-stb-orange hover:bg-stb-orange-dark text-white font-bold text-lg px-8 py-6 rounded-full">
                Join The Program
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <img 
            src="/lovable-uploads/1d39cf1b-6f89-4e28-8f7d-accc791146e8.png" 
            alt="Join" 
            className="h-20 mx-auto mb-4"
          />
          <p className="text-lg italic">Become part of our global sunshine community!</p>
        </div>
      </div>
    </section>
  );
};

export default Ambassadors;
