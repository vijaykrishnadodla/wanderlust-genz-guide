import React from 'react';
import { Backpack, Camera, Book, Map, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
interface SunnyMascotProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
  message?: string;
  className?: string;
  travelStyle?: 'default' | 'beach' | 'cultural' | 'educational' | 'adventure' | 'fashion';
}
const SunnyMascot = ({
  size = 'md',
  withText = false,
  message,
  className = '',
  travelStyle = 'default'
}: SunnyMascotProps) => {
  const isMobile = useIsMobile();

  // Enhanced size mappings for bigger avatar
  const sizeClasses = {
    sm: isMobile ? 'h-10 w-10' : 'h-12 w-12',
    md: isMobile ? 'h-16 w-16' : 'h-20 w-20',
    lg: isMobile ? 'h-24 w-24' : 'h-32 w-32',
    xl: isMobile ? 'h-40 w-40' : 'h-56 w-56'
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
              <Camera className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} text-sunny-orange`} />
            </div>
          </div>;
      case 'educational':
        return <div className="absolute -top-1 -right-1 z-10">
            <div className="bg-sunny-yellow-light rounded-full p-1">
              <Book className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} text-sunny-orange`} />
            </div>
          </div>;
      case 'adventure':
        return <div className="absolute -top-1 -right-1 z-10">
            <div className="bg-sunny-yellow-light rounded-full p-1">
              <Backpack className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} text-sunny-orange`} />
            </div>
          </div>;
      case 'fashion':
        return <>
            {/* Pink Hat and Heart Glasses are now part of the image */}
            {/* Arms */}
          </>;
      default:
        return null;
    }
  };

  // Add sparkle effect for Gen Z dynamic feel
  const renderSparkles = () => {
    return <>
        <div className="absolute -top-1 -left-1 sunny-pulse" style={{
        animationDelay: '0.5s'
      }}>
          <Sparkles className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} text-sunny-yellow`} />
        </div>
        <div className="absolute -bottom-1 -right-1 sunny-pulse" style={{
        animationDelay: '1s'
      }}>
          <Sparkles className={`${isMobile ? 'h-2 w-2' : 'h-3 w-3'} text-sunny-orange`} />
        </div>
      </>;
  };

  // Changed: Updated the container to use row layout when there's text
  return <div className={`flex ${withText ? 'flex-row items-center' : 'flex-col'} ${isMobile ? withText ? 'flex-col items-center' : 'items-center' : 'items-start'} gap-2 md:gap-4 ${className}`}>
      <div className="relative">
        {/* Updated Sunny image with glow effect */}
        <div className={`relative ${sizeClasses[size]}`}>
          <div className="absolute inset-0 bg-sunny-yellow/50 rounded-full blur-md sunny-pulse"></div>
          
          {/* Base Sun with new fashion-style avatar - Updated to use the new image */}
          <div className="w-full h-full relative z-0">
            <img alt="Sunny mascot" className="w-full h-full object-contain" src="/lovable-uploads/26445152-6bec-4571-a696-f6672bb5b4b2.png" />
          </div>
          
          {/* Travel style accessories */}
          {renderAccessory()}
          
          {/* Add sparkle effect */}
          {renderSparkles()}
        </div>
      </div>
      
      {/* Changed: Updated speech bubble positioning to be on the right side of the avatar */}
      {withText && message && <div className={`sunny-speech-bubble ${isMobile ? 'sunny-speech-bubble-top text-xs md:text-sm' : 'sunny-speech-bubble-left text-sm'} max-w-[120px] md:max-w-xs font-handwritten text-sunny-orange`}>
          {message}
        </div>}
    </div>;
};
export default SunnyMascot;