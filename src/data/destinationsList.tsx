
import React from 'react';
import { Plane, MapPin, Camera, Coffee, Building, BookOpen, Bike, TreePalm, Ticket, Landmark, ShoppingCart, Utensils } from 'lucide-react';
import { DestinationItinerary } from '@/types/travel';
import { minimalGeneralHolidayType } from './travelDefaults';

// Sample destinations data
export const destinations: DestinationItinerary[] = [
  {
    city: "Barcelona",
    country: "Spain",
    imageEmoji: "🇪🇸",
    imageUrl: "https://images.unsplash.com/photo-1587789202069-f57c8a6d52c9?auto=format&fit=crop&w=1200&q=80", // Replaced local upload with Unsplash
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
    imageUrl: "/lovable-uploads/6babe884-a973-49d2-9125-fad3e4a98f6e.jpg", // Local upload preferred
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
  // --- New Entries ---
  {
    city: "Cancún", // Normalizing to Cancun for matching if needed, but display as Cancún
    country: "Mexico",
    imageEmoji: "🇲🇽",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    holidayTypes: { "general": minimalGeneralHolidayType },
  },
  {
    city: "London",
    country: "United Kingdom",
    imageEmoji: "🇬🇧",
    imageUrl: "https://images.unsplash.com/photo-1543877087-ebf71bb88de2?auto=format&fit=crop&w=1200&q=80",
    holidayTypes: { "general": minimalGeneralHolidayType },
  },
  {
    city: "Rome",
    country: "Italy",
    imageEmoji: "🇮🇹",
    imageUrl: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1200&q=80",
    holidayTypes: { "general": minimalGeneralHolidayType },
  },
  {
    city: "Tokyo",
    country: "Japan",
    imageEmoji: "🇯🇵",
    imageUrl: "https://images.unsplash.com/photo-1505061481992-53fb0f931f5d?auto=format&fit=crop&w=1200&q=80",
    holidayTypes: { "general": minimalGeneralHolidayType },
  },
  {
    city: "Seoul",
    country: "South Korea",
    imageEmoji: "🇰🇷",
    imageUrl: "https://images.unsplash.com/photo-1580170533783-0c0d9fcc9a19?auto=format&fit=crop&w=1200&q=80",
    holidayTypes: { "general": minimalGeneralHolidayType },
  },
  {
    city: "Honolulu",
    country: "USA",
    imageEmoji: "🇺🇸", // Could also use 🌺 or similar
    imageUrl: "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=1200&q=80",
    holidayTypes: { "general": minimalGeneralHolidayType },
  },
  {
    city: "New York",
    country: "USA",
    imageEmoji: "🇺🇸",
    imageUrl: "https://images.unsplash.com/photo-1501147830916-ce44a6359892?auto=format&fit=crop&w=1200&q=80",
    holidayTypes: { "general": minimalGeneralHolidayType },
  },
  {
    city: "Los Angeles",
    country: "USA",
    imageEmoji: "🇺🇸",
    imageUrl: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1200&q=80",
    holidayTypes: { "general": minimalGeneralHolidayType },
  },
  {
    city: "Venice",
    country: "Italy",
    imageEmoji: "🇮🇹",
    imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80", // Venice image
    holidayTypes: { "general": minimalGeneralHolidayType },
  },
  {
    city: "Bratislava",
    country: "Slovakia",
    imageEmoji: "🇸🇰",
    imageUrl: "https://images.unsplash.com/photo-1587723954480-849445c9704e?auto=format&fit=crop&w=1200&q=80", // Added Bratislava
    holidayTypes: { "general": minimalGeneralHolidayType },
  },
  // Add more destinations here following the same structure
];
