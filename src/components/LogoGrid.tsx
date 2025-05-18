
import React from 'react';

interface LogoGridProps {
  logos: string; // Comma-separated list of university names
}

const LogoGrid: React.FC<LogoGridProps> = ({ logos }) => {
  const logoList = logos.split(',');

  // Placeholder: In a real app, these would be actual logo images or more styled text
  return (
    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
      {logoList.map((logoName) => (
        <div key={logoName.trim()} className="text-center">
          <span className="text-sm sm:text-md font-medium text-gray-500 opacity-80 filter grayscale hover:grayscale-0 transition-all">
            {logoName.trim()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
