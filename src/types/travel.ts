
import React from 'react'; // Import React for React.ReactNode

// Type for individual attractions
export type Attraction = {
  name: string;
  icon: React.ReactNode | string; // Can be a Lucide icon component or an emoji string
  description?: string; // Optional brief description
};

// Type for ISIC savings details
export type ISICSavings = {
  total: string; // e.g., "€50 - €150"
  period: string; // e.g., "on a 7-day trip"
  highlights?: string[]; // e.g., ["Up to 20% off museum entries", "10% off selected cafes"]
};

// Type for details specific to a holiday type within a destination
export type HolidayTypeDetails = {
  vibeDescription: string;
  attractions: Attraction[]; // General attractions for this vibe
  mustSee: Attraction[]; // Key attractions for students
  isicSavings?: ISICSavings;
};

// Main type for a travel destination
export type DestinationItinerary = {
  city: string;
  country: string;
  imageEmoji: string; // Emoji for quick display
  imageUrl?: string; // URL for a representative image of the city
  holidayTypes: {
    [key: string]: HolidayTypeDetails; // e.g., "cultural", "adventure"
  };
};

