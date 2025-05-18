
import React from 'react';

interface WaveDividerProps {
  flip?: boolean;
  // hidden prop is removed as per new simplified component
}

// Updated WaveDivider component as per instructions
const WaveDivider = ({ flip = false }: WaveDividerProps) => {
  return (
    <svg 
      className={`w-full h-[64px] sm:h-[100px] block -mt-px ${flip ? 'transform rotate-180' : ''}`} // Added transform for flip
      viewBox="0 0 1440 100" 
      preserveAspectRatio="none" 
      fill="#FFEFE2" // Fill color from instructions
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0,30 C120,90 360,90 480,30 C600,-30 840,-30 960,30 C1080,90 1320,90 1440,30 L1440,100 L0,100 Z"/>
    </svg>
  );
};

export default WaveDivider;
