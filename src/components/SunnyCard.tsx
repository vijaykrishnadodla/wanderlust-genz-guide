
import React from 'react';
import SunnyMascot from './SunnyMascot';
import { useIsMobile } from '@/hooks/use-mobile';

const SunnyCard = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="mb-4 transform -rotate-3 z-10">
        <p className="font-handwritten text-lg text-sunny-orange text-center bg-white/80 px-4 py-2 rounded-xl shadow-sm">
          "You pack the snacks, I’ll plan the vibe" ☀️ {/* Updated quote */}
        </p>
      </div>
      
      <div className="bg-white/80 p-3 md:p-4 rounded-2xl shadow-lg transform rotate-2 mb-4">
        <div className="relative">
          <div className="flex justify-center" style={{
            width: isMobile ? '280px' : '320px',
            height: isMobile ? '280px' : '320px'
          }}>
            <SunnyMascot size="xl" travelStyle="fashion" className="sunny-bounce" />
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="font-handwritten text-xl text-gray-800">
          meet SUNNY your new travel BESTIE!
        </p>
      </div>
    </div>
  );
};

export default SunnyCard;
