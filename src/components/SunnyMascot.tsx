
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

  // Sizing for accessories and sparkles based on avatar size
  const accessorySizes = {
    sm: { top: '-top-1', right: '-right-1', height: 'h-3', width: 'w-3', icon: 'h-3 w-3' },
    md: { top: '-top-2', right: '-right-2', height: 'h-4', width: 'w-4', icon: 'h-4 w-4' },
    lg: { top: '-top-3', right: '-right-3', height: 'h-6', width: 'w-6', icon: 'h-5 w-5' },
    xl: { top: '-top-4', right: '-right-4', height: 'h-8', width: 'w-8', icon: 'h-6 w-6' }
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

  // Travel style accessory with updated Gen Z design - now sized relative to avatar
  const renderAccessory = () => {
    const { top, right, height, width, icon } = accessorySizes[size];
    
    switch (travelStyle) {
      case 'beach':
        return <div className={`absolute ${top} ${right} transform rotate-6 z-10`}>
            <div className={`bg-sunny-orange-light ${height} ${width} rounded-full`}></div>
            <div className={`bg-sunny-orange-light h-${parseInt(height.split('-')[1]) + 2} w-${parseInt(width.split('-')[1]) + 3} rounded-t-full -mt-1`}></div>
          </div>;
      case 'cultural':
        return <div className={`absolute ${top} ${right} z-10`}>
            <div className="bg-sunny-yellow-light rounded-full p-1">
              <Camera className={icon + " text-sunny-orange"} />
            </div>
          </div>;
      case 'educational':
        return <div className={`absolute ${top} ${right} z-10`}>
            <div className="bg-sunny-yellow-light rounded-full p-1">
              <Book className={icon + " text-sunny-orange"} />
            </div>
          </div>;
      case 'adventure':
        return <div className={`absolute ${top} ${right} z-10`}>
            <div className="bg-sunny-yellow-light rounded-full p-1">
              <Backpack className={icon + " text-sunny-orange"} />
            </div>
          </div>;
      default:
        return null;
    }
  };

  // Add sparkle effect for Gen Z dynamic feel - now sized relative to avatar
  const renderSparkles = () => {
    const { top, right, icon } = accessorySizes[size];
    
    return <>
        <div className={`absolute ${top} -left-1 sunny-pulse`} style={{
        animationDelay: '0.5s'
      }}>
          <Sparkles className={icon + " text-sunny-yellow"} />
        </div>
        <div className={`absolute -bottom-1 ${right} sunny-pulse`} style={{
        animationDelay: '1s'
      }}>
          <Sparkles className={`${parseInt(icon.split(' ')[0].split('-')[1]) - 1} ${parseInt(icon.split(' ')[1].split('-')[1]) - 1} text-sunny-orange`} />
        </div>
        <div className={`absolute top-1/2 ${right} sunny-pulse`} style={{
        animationDelay: '1.5s'
      }}>
          <Sparkles className={`${parseInt(icon.split(' ')[0].split('-')[1]) - 2} ${parseInt(icon.split(' ')[1].split('-')[1]) - 2} text-sunny-orange-light`} />
        </div>
      </>;
  };

  // Updated layout with proper responsive behavior and transition
  return <div className={`flex ${withText ? 'flex-row items-center' : 'flex-col'} ${isMobile ? (withText ? 'flex-col items-center' : 'items-center') : 'items-start'} gap-4 transition-all duration-300 ${className}`}>
      <div className="relative">
        {/* Updated Sunny image with glow effect */}
        <div className={`relative ${sizeClasses[size]} sunny-float`}>
          <div className="absolute inset-0 bg-sunny-yellow/50 rounded-full blur-md sunny-pulse"></div>
          
          {/* Base Sun with avatar image */}
          <div className="w-full h-full relative z-0">
            {/* Use the sunny avatar image */}
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
      
      {/* Fixed speech bubble with proper positioning and animation */}
      {withText && message && <div className={`sunny-speech-bubble ${isMobile ? 'sunny-speech-bubble-top mt-2' : 'sunny-speech-bubble-left ml-2'} max-w-xs font-handwritten text-sunny-orange-dark animate-fade-in p-3`}>
          {message}
        </div>}
    </div>;
};

export default SunnyMascot;
