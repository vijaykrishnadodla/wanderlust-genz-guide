
import React from 'react';
import { Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export type TravelStyle = 'default' | 'beach' | 'cultural' | 'educational' | 'adventure' | 'fashion';

interface SunnyAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  travelStyle?: TravelStyle;
  className?: string;
  withGlow?: boolean;
}

const SunnyAvatar: React.FC<SunnyAvatarProps> = ({
  size = 'md',
  travelStyle = 'default',
  className = '',
  withGlow = true
}) => {
  const isMobile = useIsMobile();
  
  // Enhanced size mappings for bigger avatar
  const sizeClasses = {
    sm: 'h-12 w-12',
    md: 'h-20 w-20',
    lg: 'h-32 w-32',
    xl: 'h-56 w-56'
  };

  // Map travel styles to avatar images
  const getAvatarImage = () => {
    switch (travelStyle) {
      case 'beach':
        return "/lovable-uploads/3b3e8b55-d7f6-416c-9e8c-63fd0ebb888c.png";
      case 'cultural':
        return "/lovable-uploads/06577958-9e73-49f1-8276-2850779c7f45.png";
      case 'educational':
        return "/lovable-uploads/e2c80a6e-05e9-4006-a278-a146bc68bad7.png";
      case 'adventure':
        return "/lovable-uploads/0a2a973a-315c-4c6d-b4a9-ce7a9042c5e3.png";
      case 'fashion':
        return "/lovable-uploads/87172c35-770e-4713-905e-f0c4c1e86585.png";
      default:
        return "/lovable-uploads/1795a97d-401c-44f0-9fe1-baa9ee21c4b9.png";
    }
  };

  // Sparkle effect for Gen Z dynamic feel
  const renderSparkles = () => {
    if (!withGlow) return null;
    
    return (
      <>
        <div className="absolute -top-1 -left-1 sunny-pulse" style={{ animationDelay: '0.5s' }}>
          <Sparkles className="h-4 w-4 text-sunny-yellow" />
        </div>
        <div className="absolute -bottom-1 -right-1 sunny-pulse" style={{ animationDelay: '1s' }}>
          <Sparkles className="h-3 w-3 text-sunny-orange" />
        </div>
      </>
    );
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {withGlow && <div className="absolute inset-0 bg-sunny-yellow/50 rounded-full blur-md sunny-pulse"></div>}
      
      {/* Avatar Image */}
      <div className="w-full h-full relative z-0">
        <img 
          src={getAvatarImage()} 
          alt="Sunny avatar" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Add sparkle effect */}
      {renderSparkles()}
    </div>
  );
};

export default SunnyAvatar;
