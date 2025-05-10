
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Sparkles } from 'lucide-react';

export type AvatarVariant = 'default' | 'beach' | 'cultural' | 'educational' | 'adventure' | 'fashion';

interface SunnyAvatarProps {
  variant?: AvatarVariant;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  withGlow?: boolean;
}

const SunnyAvatar = ({
  variant = 'default',
  size = 'md',
  className = '',
  withGlow = true
}: SunnyAvatarProps) => {
  
  // Size mappings
  const sizeClasses = {
    sm: 'h-12 w-12',
    md: 'h-20 w-20',
    lg: 'h-32 w-32',
    xl: 'h-56 w-56'
  };

  // Avatar variant image mapping
  const avatarImages = {
    default: '/lovable-uploads/1795a97d-401c-44f0-9fe1-baa9ee21c4b9.png',
    beach: '/lovable-uploads/1919aa02-ee8c-4a23-b76a-79325b03daad.png',
    cultural: '/lovable-uploads/2a26224f-3d4d-45a2-b5f7-850369f9cc52.png',
    educational: '/lovable-uploads/38c8baea-c639-49d2-8de8-d70bfadeee89.png',
    adventure: '/lovable-uploads/544e57e6-94ce-4b89-b52a-9d1dabf9b0ea.png',
    fashion: '/lovable-uploads/1795a97d-401c-44f0-9fe1-baa9ee21c4b9.png' // Using default for fashion for now
  };
  
  // Decorative effect based on variant
  const renderEffect = () => {
    switch(variant) {
      case 'beach':
        return <div className="absolute -top-2 right-0 transform rotate-6 z-10">
          <div className="bg-sunny-orange-light h-3 w-7 rounded-full"></div>
          <div className="bg-sunny-orange-light h-5 w-10 rounded-t-full -mt-1"></div>
        </div>;
      case 'adventure':
        return <div className="absolute -top-2 -right-1 transform rotate-3 z-10">
          <div className="bg-sunny-yellow-light rounded-full p-1 shadow-sm">
            <Sparkles className="h-4 w-4 text-sunny-orange" />
          </div>
        </div>;
      default:
        return null;
    }
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {withGlow && <div className="absolute inset-0 bg-sunny-yellow/50 rounded-full blur-md sunny-pulse"></div>}
      
      <Avatar className="w-full h-full">
        <AvatarImage 
          src={avatarImages[variant]} 
          alt={`Sunny mascot ${variant} style`}
          className="object-contain"
        />
        <AvatarFallback className="bg-sunny-yellow-light text-sunny-orange text-lg">
          ☀️
        </AvatarFallback>
      </Avatar>

      {renderEffect()}
      
      {/* Sparkle effects for all variants */}
      {withGlow && (
        <>
          <div className="absolute -top-1 -left-1 sunny-pulse" style={{ animationDelay: '0.5s' }}>
            <Sparkles className="h-4 w-4 text-sunny-yellow" />
          </div>
          <div className="absolute -bottom-1 -right-1 sunny-pulse" style={{ animationDelay: '1s' }}>
            <Sparkles className="h-3 w-3 text-sunny-orange" />
          </div>
        </>
      )}
    </div>
  );
};

export default SunnyAvatar;
