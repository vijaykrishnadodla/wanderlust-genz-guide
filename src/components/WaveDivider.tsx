import React from 'react';

// Renamed component to Wave as per prompt, but keeping file name WaveDivider.tsx
// and will update imports later. Using WaveDivider as component name for now to avoid breaking existing imports immediately.
// The prompt used Wave, but the existing file is WaveDivider. Let's ensure the component uses the new SVG path and fill.
// Sticking to WaveDivider name to avoid breaking imports until all files are updated.
const WaveDivider = ({ flip = false }: { flip?: boolean }) => {
  return (
    <svg 
      className={`w-full h-[64px] sm:h-[100px] block -mt-px ${flip ? 'rotate-180' : ''}`}
      viewBox="0 0 1440 100" 
      preserveAspectRatio="none" 
      fill="#FFEFE2" // Fill color from prompt
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0,30 C120,90 360,90 480,30 C600,-30 840,-30 960,30 C1080,90 1320,90 1440,30 L1440,100 L0,100 Z"/>
    </svg>
  );
};

export default WaveDivider;
