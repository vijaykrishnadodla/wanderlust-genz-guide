
import React from 'react';
import { Backpack, Camera, Book, Map, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import SunnyAvatar from './SunnyAvatar';

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
    sm: 'h-12 w-12',
    md: 'h-20 w-20',
    lg: 'h-32 w-32',
    xl: 'h-56 w-56'
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
          <Sparkles className="h-4 w-4 text-sunny-yellow" />
        </div>
        <div className="absolute -bottom-1 -right-1 sunny-pulse" style={{
        animationDelay: '1s'
      }}>
          <Sparkles className="h-3 w-3 text-sunny-orange" />
        </div>
        {/* Additional pink sparkles to match image */}
        <div className="absolute -left-8 top-1/2 sunny-pulse" style={{
        animationDelay: '1.5s'
      }}>
          
        </div>
        <div className="absolute -right-8 top-1/3 sunny-pulse" style={{
        animationDelay: '0.8s'
      }}>
          
        </div>
      </>;
  };

  // Changed: Updated the container to use row layout when there's text
  return <div className={`flex ${withText ? 'flex-row items-center' : 'flex-col'} ${isMobile ? (withText ? 'flex-col items-center' : 'items-center') : 'items-start'} gap-4 ${className}`}>
      <div className="relative">
        {/* Use the SunnyAvatar component for the avatar */}
        <SunnyAvatar variant={travelStyle} size={size} />
      </div>
      
      {/* Changed: Updated speech bubble positioning to be on the right side of the avatar */}
      {withText && message && <div className={`sunny-speech-bubble ${isMobile ? 'sunny-speech-bubble-top' : 'sunny-speech-bubble-left'} max-w-xs font-handwritten text-sunny-orange`}>
          {message}
        </div>}
    </div>;
};
export default SunnyMascot;
