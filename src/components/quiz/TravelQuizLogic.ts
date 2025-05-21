
import { destinations as travelDestinationsData, DestinationItinerary } from "@/data/travelDestinations";
import { DESTINATIONS, DEFAULT_TRAVEL_IMAGE, SPEND_PROFILES, CATEGORY_WEIGHTS, DISCOUNT_RATES, Q4_CATEGORIES } from "./TravelQuizConstants";
import { FormData, TravelQuizCalculatedResults } from "./TravelQuizTypes";

export const normalizeString = (str: string): string =>
  str ? str.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

export const getDestData = (city: string): { costFactor: number; img: string } => {
  const normalizedQueryCity = normalizeString(city);
  let imageUrl: string | undefined = undefined;

  const destinationEntry = travelDestinationsData.find(
    (dest: DestinationItinerary) => normalizeString(dest.city) === normalizedQueryCity
  );

  if (destinationEntry?.imageUrl) {
    imageUrl = destinationEntry.imageUrl;
  } else if (city && DESTINATIONS[city]?.img) {
    imageUrl = DESTINATIONS[city].img;
  } else if (city) {
    // Fallback to Unsplash dynamic query if still no image and city is provided
    // console.log(`Falling back to Unsplash for city: ${city}`);
    // imageUrl = `https://source.unsplash.com/1200x800/?${encodeURIComponent(city + " travel, cityscape")}`;
    // Using default if unsplash is too slow or unreliable during generation
    imageUrl = DEFAULT_TRAVEL_IMAGE;
  } else {
    imageUrl = DEFAULT_TRAVEL_IMAGE;
  }
  
  const costFactor = (city && DESTINATIONS[city]?.costFactor) ?? 1.1;

  return { costFactor, img: imageUrl || DEFAULT_TRAVEL_IMAGE };
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
