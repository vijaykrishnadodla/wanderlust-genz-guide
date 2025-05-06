
import React from 'react';
import { Sun } from 'lucide-react';
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md transform -rotate-1 border border-[#FEC6A1]/30">
            <h3 className="font-display text-xl mb-3 text-[#F97316]">SAVE MONEY</h3>
            <p className="text-lg mb-4">
              Members save an average of $200/week on travel costs with our exclusive student discounts and secret hacks
            </p>
            <div className="polaroid transform rotate-2 w-full h-40 flex items-center justify-center">
              <span className="text-5xl">💰</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform rotate-1 border border-[#FEC6A1]/30">
            <h3 className="font-display text-xl mb-3 text-[#F97316]">AUTHENTIC EXPERIENCES</h3>
            <p className="text-lg mb-4">
              Skip the tourist traps and discover hidden gems. Not just for photos or passport stamps, but for real connections.
            </p>
            <div className="polaroid transform -rotate-2 w-full h-40 flex items-center justify-center">
              <span className="text-5xl">🌎</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform -rotate-1 border border-[#FEC6A1]/30">
            <h3 className="font-display text-xl mb-3 text-[#F97316]">EMOTIONAL SUPPORT</h3>
            <p className="text-lg mb-4">
              The buddy who says "Let's take a break" or "You're good — we're in this together." Down to party or just talk life.
            </p>
            <div className="polaroid transform rotate-2 w-full h-40 flex items-center justify-center">
              <span className="text-5xl">🌞</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button className="stb-button text-lg">Join The Sunshine Club</Button>
          <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
            <span className="font-handwritten text-base">With Sunny by your side:</span> you'll never just go somewhere — you'll own it, love it, and come back changed
          </p>
        </div>
      </div>
    </section>
  );
};

export default SunshineClub;
