
import React from 'react'; // Import React for React.ReactNode
import { Plane, MapPin, Camera, Coffee, Building, BookOpen, Bike, TreePalm, Ticket, Landmark, ShoppingCart, Utensils } from 'lucide-react';

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

// Default itinerary / fallback if a specific destination or type isn't found
export const defaultItinerary: HolidayTypeDetails = {
  vibeDescription: "An exciting journey awaits! Discover unique spots and make unforgettable memories.",
  attractions: [
    { name: "Local Market", icon: <ShoppingCart className="w-4 h-4" />, description: "Experience the local culture and find unique souvenirs." },
    { name: "City Park", icon: <TreePalm className="w-4 h-4" />, description: "Relax and enjoy the green spaces." },
  ],
  mustSee: [
    { name: "Iconic Landmark", icon: <Landmark className="w-4 h-4" />, description: "A must-visit spot in any city." }
  ],
  isicSavings: {
    total: "Varies",
    period: "during your trip",
    highlights: ["Look for ISIC discounts at various attractions and eateries!"],
  },
};

// Sample destinations data
export const destinations: DestinationItinerary[] = [
  {
    city: "Barcelona",
    country: "Spain",
    imageEmoji: "🇪🇸",
    imageUrl: "/lovable-uploads/c38cdfa9-d9f7-4717-89e4-6cce94569408.jpg", // Example image, replace with actual if available
    holidayTypes: {
      "cultural": {
        vibeDescription: "Immerse yourself in Barcelona's rich history, stunning architecture, and vibrant arts scene.",
        attractions: [
          { name: "Sagrada Familia", icon: <Landmark className="w-4 h-4" />, description: "Gaudí's masterpiece, an architectural marvel." },
          { name: "Gothic Quarter", icon: <Building className="w-4 h-4" />, description: "Historic streets, charming squares, and local shops." },
          { name: "Picasso Museum", icon: <Camera className="w-4 h-4" />, description: "Explore the early works of Pablo Picasso." },
        ],
        mustSee: [
          { name: "Park Güell", icon: <TreePalm className="w-4 h-4" />, description: "Another Gaudí wonder with panoramic city views (book tickets in advance!)." },
          { name: "La Boqueria Market", icon: <ShoppingCart className="w-4 h-4" />, description: "A bustling market with fresh produce and local delicacies." },
        ],
        isicSavings: {
          total: "€30 - €70",
          period: "on a 5-day trip",
          highlights: ["Discounted entry to many museums with ISIC.", "Student deals at some tapas bars."],
        },
      },
      "sun-beach": {
        vibeDescription: "Relax on Barcelona's sunny beaches, enjoy seaside paella, and soak up the Mediterranean atmosphere.",
        attractions: [
          { name: "Barceloneta Beach", icon: <TreePalm className="w-4 h-4" />, description: "The city's most famous beach." },
          { name: "Port Olímpic", icon: <Plane className="w-4 h-4" />, description: "Marina area with restaurants and nightlife." }, // Using Plane as placeholder
        ],
        mustSee: [
          { name: "Sitges (day trip)", icon: <MapPin className="w-4 h-4" />, description: "Beautiful coastal town near Barcelona, known for its beaches." },
        ],
        isicSavings: {
          total: "€20 - €50",
          period: "on a 5-day trip",
          highlights: ["Discounts on some water sports activities.", "Student offers at beachside cafes."],
        },
      },
      "adventure": {
        vibeDescription: "Explore Barcelona's surroundings with adventurous activities and enjoy the thrill of Catalonia.",
        attractions: [
          { name: "Montserrat Mountain", icon: <Bike className="w-4 h-4" />, description: "Hiking and stunning views at this unique rock formation." },
          { name: "Tibidabo Amusement Park", icon: <Camera className="w-4 h-4" />, description: "Historic amusement park with panoramic city views." },
        ],
        mustSee: [
          { name: "Collserola Park cycling", icon: <Bike className="w-4 h-4" />, description: "Extensive natural park perfect for biking." },
        ],
      },
    },
  },
  {
    city: "Paris",
    country: "France",
    imageEmoji: "🇫🇷",
    imageUrl: "/lovable-uploads/6babe884-a973-49d2-9125-fad3e4a98f6e.jpg", // Example image
    holidayTypes: {
      "cultural": {
        vibeDescription: "Experience the romance and artistry of Paris, from iconic landmarks to world-class museums.",
        attractions: [
          { name: "Eiffel Tower", icon: <Landmark className="w-4 h-4" />, description: "The symbol of Paris, offering breathtaking views." },
          { name: "Louvre Museum", icon: <Building className="w-4 h-4" />, description: "Home to masterpieces like the Mona Lisa." },
          { name: "Notre-Dame Cathedral", icon: <Landmark className="w-4 h-4" />, description: "Historic Gothic cathedral (check status for visits)." },
        ],
        mustSee: [
          { name: "Montmartre & Sacré-Cœur", icon: <Camera className="w-4 h-4" />, description: "Artistic neighborhood with stunning basilica views." },
          { name: "Seine River Cruise", icon: <Plane className="w-4 h-4" />, description: "See Paris landmarks from the water (placeholder icon)." },
        ],
        isicSavings: {
          total: "€40 - €100",
          period: "on a 5-day trip",
          highlights: ["Free/discounted museum entry for EU students under 26.", "ISIC discounts on some tours."],
        },
      },
      "educational": {
        vibeDescription: "Delve into Paris's rich literary, historical, and scientific heritage with its many institutions.",
        attractions: [
          { name: "Sorbonne University", icon: <BookOpen className="w-4 h-4" />, description: "Historic university in the Latin Quarter." },
          { name: "Musée d'Orsay", icon: <Building className="w-4 h-4" />, description: "Impressionist and Post-Impressionist art in a former railway station." },
        ],
        mustSee: [
          { name: "Shakespeare and Company", icon: <BookOpen className="w-4 h-4" />, description: "Iconic English-language bookstore." },
        ],
      }
    },
  },
  // Add more destinations here following the same structure
];

