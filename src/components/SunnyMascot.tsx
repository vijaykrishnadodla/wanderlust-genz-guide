
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
    sm: 'h-12 w-12',
    md: 'h-20 w-20',
    lg: 'h-32 w-32',
    xl: 'h-56 w-56'
  };

  // Get the appropriate avatar image based on travel style
  const getAvatarImage = () => {
    switch (travelStyle) {
      case 'beach':
        return "/lovable-uploads/9aa14dc9-3d1b-4cd1-9028-93d4a960f2b2.png";
      case 'cultural':
        return "/lovable-uploads/6ea74ff7-ba75-4e2b-981f-bb9f813af6ed.png";
      case 'educational':
        return "/lovable-uploads/6d788043-5bb0-4bd1-aee1-41c5cedd3162.png";
      case 'adventure':
        return "/lovable-uploads/5c2d377d-29d1-42e0-bd60-bd389a75fe7d.png";
      case 'fashion':
        return "/lovable-uploads/1919aa02-ee8c-4a23-b76a-79325b03daad.png";
      default:
        return "/lovable-uploads/1795a97d-401c-44f0-9fe1-baa9ee21c4b9.png";
    }
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
        <div className="absolute top-1/2 -right-2 sunny-pulse" style={{
        animationDelay: '1.5s'
      }}>
          <Sparkles className="h-2 w-2 text-sunny-orange-light" />
        </div>
      </>;
  };

  // Changed: Updated the container to use row layout when there's text
  return <div className={`flex ${withText ? 'flex-row items-center' : 'flex-col'} ${isMobile ? (withText ? 'flex-col items-center' : 'items-center') : 'items-start'} gap-4 ${className}`}>
      <div className="relative">
        {/* Updated Sunny image with glow effect */}
        <div className={`relative ${sizeClasses[size]} sunny-float`}>
          <div className="absolute inset-0 bg-sunny-yellow/50 rounded-full blur-md sunny-pulse"></div>
          
          {/* Base Sun with new fashion-style avatar */}
          <div className="w-full h-full relative z-0">
            {/* Use the new sunny avatar image with fashion style (hat and heart glasses) */}
            <img 
              src={getAvatarImage()} 
              alt="Sunny mascot" 
              className="w-full h-full object-contain transform transition-transform hover:scale-105 duration-500" 
            />
          </div>
          
          {/* Travel style accessories */}
          {renderAccessory()}
          
          {/* Add sparkle effect */}
          {renderSparkles()}
        </div>
      </div>
      
      {/* Changed: Updated speech bubble positioning to be on the right side of the avatar */}
      {withText && message && <div className={`sunny-speech-bubble ${isMobile ? 'sunny-speech-bubble-top' : 'sunny-speech-bubble-left'} max-w-xs font-handwritten text-sunny-orange animate-fade-in`}>
          {message}
        </div>}
    </div>;
};

export default SunnyMascot;
