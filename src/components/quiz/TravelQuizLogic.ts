import { destinations as travelDestinationsData } from "@/data/destinationsList";
import { DestinationItinerary } from "@/types/travel";
import { DESTINATIONS, DEFAULT_TRAVEL_IMAGE, SPEND_PROFILES, CATEGORY_WEIGHTS, DISCOUNT_RATES, Q4_CATEGORIES } from "./TravelQuizConstants";
import { FormData, TravelQuizCalculatedResults } from "./TravelQuizTypes";

export const normalizeString = (str: string): string =>
  str ? str.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

export const getDestData = (city: string): { costFactor: number; img: string } => {
  const normalizedQueryCity = normalizeString(city);
  let imageUrl: string | undefined = undefined;

  // 1. Try to get image from imported travelDestinationsData (primary source)
  const destinationEntry = travelDestinationsData.find(
    (dest: DestinationItinerary) => normalizeString(dest.city) === normalizedQueryCity
  );

  if (destinationEntry?.imageUrl) {
    imageUrl = destinationEntry.imageUrl;
  }

  // 2. Fallback to DESTINATIONS constant for image if not found above and city is in DESTINATIONS
  // This is useful if travelDestinationsData entry exists but is missing an image URL for some reason.
  if (!imageUrl && city && DESTINATIONS[city]?.img) {
    imageUrl = DESTINATIONS[city].img;
  }
  
  // 3. Fallback to Unsplash dynamic query if still no image and city is provided
  if (!imageUrl && city) {
    console.log(`Falling back to Unsplash for city: ${city}`);
    imageUrl = `https://source.unsplash.com/1200x800/?${encodeURIComponent(city + " travel, cityscape")}`;
  }

  // 4. Ultimate fallback to default image
  if (!imageUrl) {
    imageUrl = DEFAULT_TRAVEL_IMAGE;
  }
  
  // Get costFactor from DESTINATIONS constant (using original city key), or default
  // If city is in travelDestinationsData but not DESTINATIONS, it will use default costFactor.
  // This can be enhanced later if costFactor should also be part of DestinationItinerary type.
  const costFactor = (city && DESTINATIONS[city]?.costFactor) ?? 1.1;

  return { costFactor, img: imageUrl };
};

export const calculateQuizResults = (answers: FormData): TravelQuizCalculatedResults => {
  const { costFactor } = getDestData(answers.dest);
  const styleKey = answers.style as keyof typeof SPEND_PROFILES;
  const baseSpend = SPEND_PROFILES[styleKey] || SPEND_PROFILES["Mid-range"];
  const base = baseSpend * costFactor;
  
  const breakdown: {[key: string]: {spend: string, save: string}} = {};
  let saveTotal = 0;
  Q4_CATEGORIES.forEach((c) => {
    const categoryKey = c as keyof typeof CATEGORY_WEIGHTS & keyof typeof DISCOUNT_RATES;
    const spend = base * (CATEGORY_WEIGHTS[categoryKey] || 0);
    const save = spend * (DISCOUNT_RATES[categoryKey] || 0) * (answers.cats.includes(c) ? 1 : 0.5); // Example: full save if category selected, half otherwise for demo
    breakdown[c] = { spend: spend.toFixed(0), save: save.toFixed(0) };
    saveTotal += save;
  });
  return { base: base.toFixed(0), breakdown, saveTotal: saveTotal.toFixed(0) };
};
