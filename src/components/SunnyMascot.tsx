
import React from 'react';
import { Sunglasses, Backpack, Camera, Book, Map } from 'lucide-react';

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
  
  // Travel style accessory
  const renderAccessory = () => {
    switch(travelStyle) {
      case 'beach':
        return (
          <div className="absolute -top-3 -right-1 transform rotate-6">
            <div className="bg-[#ff3b81] h-3 w-8 rounded-full"></div>
            <div className="bg-[#ff3b81] h-6 w-12 rounded-t-full -mt-1"></div>
          </div>
        );
      case 'cultural':
        return (
          <div className="absolute -top-1 -right-1">
            <Camera className="h-5 w-5 text-[#fe4c02]" />
          </div>
        );
      case 'educational':
        return (
          <div className="absolute -top-1 -right-1">
            <Book className="h-5 w-5 text-[#fe4c02]" />
          </div>
        );
      case 'adventure':
        return (
          <div className="absolute -top-1 -right-1">
            <Backpack className="h-5 w-5 text-[#fe4c02]" />
          </div>
        );
      default:
        return (
          <div className="absolute -top-3 -right-1 transform rotate-6">
            <div className="bg-[#ff3b81] h-3 w-8 rounded-full"></div>
            <div className="bg-[#ff3b81] h-6 w-12 rounded-t-full -mt-1"></div>
          </div>
        );
    }
  };
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        {/* Updated Sunny image */}
        <div className={`relative ${sizeClasses[size]}`}>
          <img
            src="/lovable-uploads/2a26224f-3d4d-45a2-b5f7-850369f9cc52.png"
            alt="Sunny mascot"
            className="w-full h-full object-contain"
          />
          
          {/* Only show travel style accessories for non-beach styles since beach is default in the image */}
          {travelStyle !== 'default' && travelStyle !== 'beach' && renderAccessory()}
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
