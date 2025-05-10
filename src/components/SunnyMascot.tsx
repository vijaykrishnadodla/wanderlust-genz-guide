
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import SunnyAvatar, { TravelStyle } from './SunnyAvatar';

interface SunnyMascotProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
  message?: string;
  className?: string;
  travelStyle?: TravelStyle;
}

const SunnyMascot = ({
  size = 'md',
  withText = false,
  message,
  className = '',
  travelStyle = 'default'
}: SunnyMascotProps) => {
  const isMobile = useIsMobile();

  // Changed: Updated the container to use row layout when there's text
  return (
    <div className={`flex ${withText ? 'flex-row items-center' : 'flex-col'} ${isMobile ? (withText ? 'flex-col items-center' : 'items-center') : 'items-start'} gap-4 ${className}`}>
      <div className="relative">
        {/* Use the new SunnyAvatar component */}
        <SunnyAvatar size={size} travelStyle={travelStyle} />
      </div>
      
      {/* Changed: Updated speech bubble positioning to be on the right side of the avatar */}
      {withText && message && (
        <div className={`sunny-speech-bubble ${isMobile ? 'sunny-speech-bubble-top' : 'sunny-speech-bubble-left'} max-w-xs font-handwritten text-sunny-orange`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default SunnyMascot;
