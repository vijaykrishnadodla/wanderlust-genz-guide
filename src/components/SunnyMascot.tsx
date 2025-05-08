import React from 'react';
import { Backpack, Camera, Book, Map, Sparkles } from 'lucide-react';
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
    sm: 'h-10 w-10',
    md: 'h-16 w-16',
    lg: 'h-24 w-24'
  };

  // Travel style accessory with updated Gen Z design
  const renderAccessory = () => {
    switch (travelStyle) {
      case 'beach':
        return <div className="absolute -top-2 -right-1 transform rotate-6 z-10">
            <div className="bg-sunny-orange-light h-3 w-7 rounded-full"></div>
            <div className="bg-sunny-orange-light h-5 w-10 rounded-t-full -mt-1"></div>
          </div>;
      case 'cultural':
        return <div className="absolute -top-1 -right-1 z-10">
            <div className="bg-sunny-yellow-light rounded-full p-1">
              <Camera className="h-4 w-4 text-sunny-orange" />
            </div>
          </div>;
      case 'educational':
        return <div className="absolute -top-1 -right-1 z-10">
            <div className="bg-sunny-yellow-light rounded-full p-1">
              <Book className="h-4 w-4 text-sunny-orange" />
            </div>
          </div>;
      case 'adventure':
        return <div className="absolute -top-1 -right-1 z-10">
            <div className="bg-sunny-yellow-light rounded-full p-1">
              <Backpack className="h-4 w-4 text-sunny-orange" />
            </div>
          </div>;
      default:
        return <div className="absolute -top-2 -right-1 transform rotate-6 z-10">
            <div className="bg-sunny-orange-light h-3 w-7 rounded-full"></div>
            <div className="bg-sunny-orange-light h-5 w-10 rounded-t-full -mt-1"></div>
          </div>;
    }
  };

  // Add sparkle effect for Gen Z dynamic feel
  const renderSparkles = () => {
    return <>
        <div className="absolute -top-1 -left-1 sunny-pulse" style={{
        animationDelay: '0.5s'
      }}>
          <Sparkles className="h-4 w-4 text-sunny-yellow" />
        </div>
        <div className="absolute -bottom-1 -right-1 sunny-pulse" style={{
        animationDelay: '1s'
      }}>
          <Sparkles className="h-3 w-3 text-sunny-orange" />
        </div>
      </>;
  };
  return <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        {/* Updated Sunny image with glow effect */}
        <div className={`relative ${sizeClasses[size]}`}>
          <div className="absolute inset-0 bg-sunny-yellow/50 rounded-full blur-md sunny-pulse"></div>
          <img alt="Sunny mascot" className="w-full h-full relative z-0 object-contain" src="/lovable-uploads/b393e5e2-3b2c-4eb4-8c0d-3df4416cc9c6.png" />
          
          {/* Only show travel style accessories for non-default styles */}
          {travelStyle !== 'default' && renderAccessory()}
          
          {/* Add sparkle effect */}
          {renderSparkles()}
        </div>
      </div>
      
      {withText && message && <div className="sunny-speech-bubble sunny-speech-bubble-left max-w-xs font-handwritten text-sunny-orange">
          {message}
        </div>}
    </div>;
};
export default SunnyMascot;