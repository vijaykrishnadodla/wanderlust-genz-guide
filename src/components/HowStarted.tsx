
import React from 'react';
import { Clock } from 'lucide-react';

const HowStarted = () => {
  return <section id="how-started" className="py-16 bg-white relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-[#FEC6A1] p-2 rounded-lg rotate-2">
              <Clock className="h-6 w-6 text-[#F97316]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display ml-3 transform -rotate-1">HOW STB STARTED</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FEF7CD]/30 p-6 rounded-lg transform -rotate-1 border border-[#FEC6A1]">
              <h3 className="font-display text-xl mb-3">THE PROBLEM</h3>
              <p className="font-handwritten text-lg">
                Students were wasting money on overpriced tourist traps and missing out on authentic experiences
              </p>
            </div>
            
            <div className="bg-[#FEF7CD]/30 p-6 rounded-lg transform rotate-1 border border-[#FEC6A1]">
              <h3 className="font-display text-xl mb-3">THE SOLUTION</h3>
              <p className="font-handwritten text-lg">
                Create a community of student travelers sharing insider tips and exclusive discounts
              </p>
            </div>
            
            <div className="bg-[#FEF7CD]/30 p-6 rounded-lg transform -rotate-1 border border-[#FEC6A1]">
              <h3 className="font-display text-xl mb-3">THE RESULT</h3>
              <p className="font-handwritten text-lg">Students saving an average of $200/week while having better experiences!</p>
            </div>
          </div>
          
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-lg">Student Travel Buddy was created in 2025 when Dominika realized students were missing out on the best parts of travel because they didn't have access to insider knowledge. Now we're a community of thousands helping each other explore the world on a student budget.</p>
            
            <div className="mt-8 flex justify-center">
              <div className="polaroid transform rotate-2 inline-block relative">
                {/* Adding flags only at the top and bottom of the polaroid frame */}
                <div className="absolute top-0 w-full flex justify-around" style={{ transform: 'translateY(-50%)' }}>
                  <span className="rotate-[-15deg] text-lg">🇳🇴</span>
                  <span className="rotate-[0deg] text-lg">🇩🇰</span>
                  <span className="rotate-[15deg] text-lg">🇫🇷</span>
                </div>
                
                <div className="absolute bottom-0 w-full flex justify-around" style={{ transform: 'translateY(50%)' }}>
                  <span className="rotate-[15deg] text-lg">🇦🇪</span>
                  <span className="rotate-[0deg] text-lg">🇮🇸</span>
                  <span className="rotate-[-15deg] text-lg">🇱🇰</span>
                </div>
                
                <img src="/lovable-uploads/6babe884-a973-49d2-9125-fad3e4a98f6e.jpg" alt="Sunny the Travel Buddy" className="w-40 h-40 object-contain retro-filter" />
                <p className="text-center font-handwritten mt-1">Sunny was born!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default HowStarted;
