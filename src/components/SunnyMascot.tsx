
import React from 'react';
import { Sun, Compass, Book, Coffee, Mountain } from 'lucide-react';

interface SunnyMascotProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  message?: string;
  className?: string;
  travelStyle?: 'default' | 'beach' | 'cultural' | 'educational' | 'adventure';
}

const SunnyMascot = ({ 
  size = 'md', 
  withText = false, 
  message, 
  className = '',
  travelStyle = 'default' 
}: SunnyMascotProps) => {
  // Size mappings
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };
  
  // Travel style variations
  const getAccessory = () => {
    switch(travelStyle) {
      case 'beach':
        return <span className="text-xs">🕶️</span>;
      case 'cultural':
        return <span className="text-xs">🎭</span>;
      case 'educational':
        return <span className="text-xs">🎓</span>;
      case 'adventure':
        return <span className="text-xs">🧗</span>;
      default:
        return <span className="text-xs">😎</span>;
    }
  };
  
  // Travel style color variations
  const getSunGradient = () => {
    switch(travelStyle) {
      case 'beach':
        return 'from-[#fdad32] to-[#fe8c02]';
      case 'cultural':
        return 'from-[#fdad32] to-[#fc6d34]';
      case 'educational':
        return 'from-[#fdad32] to-[#fe4c02]';
      case 'adventure':
        return 'from-[#ffbd32] to-[#fe7502]';
      default:
        return 'from-[#fdad32] to-[#fe4c02]';
    }
  };

  // Travel style icon
  const getTravelIcon = () => {
    switch(travelStyle) {
      case 'beach':
        return <Coffee className="h-3/5 w-3/5 text-white" />;
      case 'cultural':
        return <Compass className="h-3/5 w-3/5 text-white" />;
      case 'educational':
        return <Book className="h-3/5 w-3/5 text-white" />;
      case 'adventure':
        return <Mountain className="h-3/5 w-3/5 text-white" />;
      default:
        return <Sun className="h-3/5 w-3/5 text-white" />;
    }
  };
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className={`bg-gradient-to-br ${getSunGradient()} rounded-full flex items-center justify-center ${sizeClasses[size]}`}>
          {getTravelIcon()}
        </div>
        <div className="absolute -bottom-1 -right-1 bg-white rounded-full border-2 border-[#fdad32] h-1/2 w-1/2 flex items-center justify-center">
          {getAccessory()}
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
