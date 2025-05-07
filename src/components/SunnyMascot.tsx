
import React from 'react';
import { Sun } from 'lucide-react';

interface SunnyMascotProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  message?: string;
  className?: string;
}

const SunnyMascot = ({ size = 'md', withText = false, message, className = '' }: SunnyMascotProps) => {
  // Size mappings
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className={`bg-gradient-to-br from-[#fdad32] to-[#fe4c02] rounded-full flex items-center justify-center ${sizeClasses[size]}`}>
          <Sun className="h-3/5 w-3/5 text-white" />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-white rounded-full border-2 border-[#fdad32] h-1/2 w-1/2 flex items-center justify-center">
          <span className="text-xs">😎</span>
        </div>
      </div>
      
      {withText && message && (
        <div className="bg-white px-3 py-2 rounded-lg relative max-w-xs font-handwritten text-[#fe4c02] shadow-sm">
          <div className="absolute top-2 -left-2 h-3 w-3 bg-white transform rotate-45"></div>
          {message}
        </div>
      )}
    </div>
  );
};

export default SunnyMascot;
