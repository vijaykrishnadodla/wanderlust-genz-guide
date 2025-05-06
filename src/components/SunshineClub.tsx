
import React from 'react';
import { Sun, UserRound, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SunshineClub = () => {
  return (
    <section id="sunshine-club" className="py-16 bg-gradient-to-t from-[#FDE1D3] to-white relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#FEC6A1] px-6 py-2 rounded-lg transform -rotate-1 mb-4 flex items-center justify-center">
            <Sun className="h-6 w-6 text-[#F97316] mr-2" />
            <h2 className="text-3xl md:text-4xl font-display mb-0">THE SUNSHINE CLUB</h2>
          </div>
          <p className="text-xl italic text-[#F97316] max-w-2xl mx-auto">
            Join a community of student travelers with your unproblematic, worldly bestie ☀️
          </p>
        </div>

        <div className="mb-10">
          <img 
            src="/lovable-uploads/9aa14dc9-3d1b-4cd1-9028-93d4a960f2b2.png" 
            alt="Join The Sunshine Club" 
            className="mx-auto max-w-sm md:max-w-md rounded-lg shadow-lg transform -rotate-2"
          />
          <p className="text-center font-handwritten text-xl text-[#F97316] mt-4">
            Warm sunny glow ✨ anywhere you go
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md transform -rotate-1 border border-[#FEC6A1]/30 hover:-translate-y-2 transition-transform">
            <h3 className="font-display text-xl mb-3 text-[#F97316]">SAVE MONEY</h3>
            <p className="text-lg mb-2">
              Members save an average of <span className="font-bold">$200/week</span> on travel costs with:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Exclusive ISIC student discounts</li>
              <li>Insider pricing on accommodations</li>
              <li>Secret deal alerts from locals</li>
            </ul>
            <div className="polaroid transform rotate-2 w-full h-40 flex items-center justify-center">
              <span className="text-5xl">💰</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform rotate-1 border border-[#FEC6A1]/30 hover:-translate-y-2 transition-transform">
            <h3 className="font-display text-xl mb-3 text-[#F97316]">AUTHENTIC EXPERIENCES</h3>
            <p className="text-lg mb-2">
              Skip the tourist traps with:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Hidden gem maps by local students</li>
              <li>Real cultural connections</li>
              <li>Instagram-worthy secret spots</li>
            </ul>
            <div className="polaroid transform -rotate-2 w-full h-40 flex items-center justify-center">
              <span className="text-5xl">🌎</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform -rotate-1 border border-[#FEC6A1]/30 hover:-translate-y-2 transition-transform">
            <h3 className="font-display text-xl mb-3 text-[#F97316]">EMOTIONAL SUPPORT</h3>
            <p className="text-lg mb-2">
              We've got your back with:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Live chat support during your trip</li>
              <li>Weekly community Zoom meetups</li>
              <li>City-specific WhatsApp groups</li>
            </ul>
            <div className="polaroid transform rotate-2 w-full h-40 flex items-center justify-center">
              <span className="text-5xl">🌞</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="stb-button text-lg flex items-center gap-2">
            <UserRound className="h-5 w-5" />
            Join The Sunshine Club
          </Button>
          <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
            <span className="font-handwritten text-base">With Sunny by your side:</span> you'll never just go somewhere — you'll own it, love it, and come back changed
          </p>
        </div>
      </div>
    </section>
  );
};

export default SunshineClub;
