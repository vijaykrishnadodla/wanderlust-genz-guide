import React, { useState } from "react";
import { motion } from "framer-motion";
import SunnyMascot from "@/components/SunnyMascot";

// ---------- TYPE DEFINITIONS ----------
export interface FormData {
  name: string;
  email: string;
  dest: string;
  vibe: string;
  style: string;
  cats: string[];
  group: string;
  idealTripDescription?: string;
}

// This interface is defined to satisfy imports from src/components/quiz/QuizResult.tsx
// TravelQuiz.tsx itself does not use this structure for its results.
interface Attraction {
  icon: string | React.ReactElement;
  name: string;
}

export interface DisplayItinerary {
  title?: string;
  imageEmoji?: string;
  city?: string;
  country?: string;
  aiVibeDescription?: string;
  vibeDescription?: string;
  userDescriptionConsidered?: string;
  mustSee?: Attraction[];
  attractions?: Attraction[];
  estimatedSavings?: string;
}

// ---------- CONSTANTS ----------
// Use the uploaded Sunny image
const SUNNY_IMG = "/lovable-uploads/c8ee8c54-1ae7-490f-bbb8-75978c486431.png"; 

const DESTINATIONS: Record<string, { costFactor: number; img: string }> = {
  "Cancún": { costFactor: 0.9, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" },
  "Paris": { costFactor: 1.2, img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80" },
  "London": { costFactor: 1.3, img: "https://images.unsplash.com/photo-1543877087-ebf71bb88de2?auto=format&fit=crop&w=1200&q=80" },
  "Rome": { costFactor: 1.1, img: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1200&q=80" },
  "Barcelona": { costFactor: 1.0, img: "https://images.unsplash.com/photo-1501959915551-4e8d21282f19?auto=format&fit=crop&w=1200&q=80" },
  "Tokyo": { costFactor: 1.4, img: "https://images.unsplash.com/photo-1505061481992-53fb0f931f5d?auto=format&fit=crop&w=1200&q=80" },
  "Seoul": { costFactor: 1.1, img: "https://images.unsplash.com/photo-1580170533783-0c0d9fcc9a19?auto=format&fit=crop&w=1200&q=80" },
  "Honolulu": { costFactor: 1.3, img: "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=1200&q=80" },
  "New York": { costFactor: 1.35, img: "https://images.unsplash.com/photo-1501147830916-ce44a6359892?auto=format&fit=crop&w=1200&q=80" },
  "Los Angeles": { costFactor: 1.2, img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1200&q=80" }
};

const SPEND_PROFILES: Record<string, number> = { Shoestring: 350, "Mid-range": 550, "Treat Yo’Self": 900 };
const DISCOUNT_RATES: Record<string, number> = { accommodation: 0.2, transport: 0.15, attractions: 0.5, food: 0.1, nightlife: 0.05, shopping: 0.1 };
const CATEGORY_WEIGHTS: Record<string, number> = { accommodation: 0.35, transport: 0.15, attractions: 0.2, food: 0.15, nightlife: 0.05, shopping: 0.1 };

const Q1_DESTS = Object.keys(DESTINATIONS);
const Q2_VIBES = ["Beach/Party", "Culture & Museums", "Foodie Adventures", "Outdoor/Nature", "City Blitz"];
const Q3_STYLE = Object.keys(SPEND_PROFILES);
const Q4_CATEGORIES = Object.keys(CATEGORY_WEIGHTS);
const Q5_GROUP = ["Solo", "1–2", "3–5", "6+"];

// Use theme colors for gradient button: #FFD53F (sunny-yellow) to #FF8A00 (sunny-orange)
const gradientBtn = "bg-gradient-to-r from-sunny-yellow to-sunny-orange";

// ---------- HELPERS ----------
const getDestData = (city: string) =>
  DESTINATIONS[city] ?? {
    costFactor: 1.1, // Default cost factor
    img: `https://source.unsplash.com/1200x800/?${encodeURIComponent(city + " travel")}`
  };

// ---------- COMPONENT ----------
export default function TravelQuiz() {
  const [step, setStep] = useState(0);
  // Use the FormData interface for the answers state
  const [answers, setAnswers] = useState<FormData>({ name: "", email: "", dest: "", vibe: "", style: "", cats: [], group: "Solo", idealTripDescription: "" });

  const update = (key: keyof FormData, val: string | string[]) => setAnswers((prev) => ({ ...prev, [key]: val }));
  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  // ---------- CALC ----------
  const calc = () => {
    const { costFactor } = getDestData(answers.dest);
    // Ensure answers.style is a valid key for SPEND_PROFILES
    const styleKey = answers.style as keyof typeof SPEND_PROFILES;
    const baseSpend = SPEND_PROFILES[styleKey] || SPEND_PROFILES["Mid-range"]; // Fallback to Mid-range if style is invalid
    const base = baseSpend * costFactor;
    
    const breakdown: {[key: string]: {spend: string, save: string}} = {};
    let saveTotal = 0;
    Q4_CATEGORIES.forEach((c) => {
      // Ensure c is a valid key for CATEGORY_WEIGHTS and DISCOUNT_RATES
      const categoryKey = c as keyof typeof CATEGORY_WEIGHTS & keyof typeof DISCOUNT_RATES;
      const spend = base * (CATEGORY_WEIGHTS[categoryKey] || 0);
      const save = spend * (DISCOUNT_RATES[categoryKey] || 0);
      breakdown[c] = { spend: spend.toFixed(0), save: save.toFixed(0) };
      saveTotal += save;
    });
    return { base: base.toFixed(0), breakdown, saveTotal: saveTotal.toFixed(0) };
  };

  // ---------- VALID ----------
  const valid = () => {
    if (step === 0) return answers.name && /.+@.+\..+/.test(answers.email);
    if (step === 1) return !!answers.dest;
    if (step === 2) return !!answers.vibe;
    if (step === 3) return !!answers.style;
    // Step 4 (categories) can be empty, Step 5 (group size) has a default
    return true;
  };

  // ---------- RESULTS ----------
  if (step === 6) {
    const { base, breakdown, saveTotal } = calc();
    const heroImg = getDestData(answers.dest).img;
    return (
      <section className="flex flex-col items-center text-center p-6 max-w-2xl mx-auto">
        <img src={heroImg} alt={answers.dest} className="rounded-2xl shadow-xl mb-4 w-full h-64 object-cover" />
        <h2 className="text-3xl font-bold mb-2">🔥 {answers.name || "Traveler"}, {answers.dest} is calling!</h2>
        <p className="text-lg mb-4">1‑week <span className="font-semibold">{answers.style}</span> budget ≈ <span className="font-semibold">${base}</span></p>
        {/* Use theme color #FF8A00 (text-sunny-orange) for emphasis */}
        <p className="text-xl font-bold mb-4">Snag ISIC + STB & save about <span className="text-sunny-orange">${saveTotal}</span> in 7&nbsp;days 🤑</p>

        <div className="grid grid-cols-2 gap-4 text-sm w-full mb-6">
          {Object.entries(breakdown).map(([c, v]) => (
            <div key={c} className={`rounded-2xl p-3 shadow ${answers.cats.includes(c) ? "bg-sunny-yellow-light" : "bg-white/50 backdrop-blur-sm"}`}>
              <p className="font-semibold capitalize">{c}</p>
              <p>Spend: ${v.spend}</p>
              {/* Use theme color #FF8A00 (text-sunny-orange) for emphasis */}
              <p className="text-sunny-orange">Save: -${v.save}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 mb-6 shadow">
          <img src={SUNNY_IMG} alt="Sunny mascot" className="w-24 h-24 mb-2" />
          <p className="font-semibold mb-2 text-base">Sunny’s got your back:</p>
          <ul className="text-sm list-disc list-inside text-left space-y-1 max-w-xs">
            <li>Digital ISIC discounts worldwide</li>
            <li>Personalised itinerary & hacks</li>
            <li>Travel‑prep PDF cheat‑sheet</li>
            <li>24/7 Sunny bot support</li>
            <li>Member‑only giveaways</li>
          </ul>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }} 
          className={`${gradientBtn} text-white px-6 py-3 rounded-2xl text-lg shadow-lg`} // Updated to rounded-2xl
          onClick={() => {
            // Scroll to pricing section (assuming an element with id="pricing" exists)
            const pricingSection = document.getElementById('pricing'); // Make sure PricingSection has id="pricing"
            if (pricingSection) {
              pricingSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              // Fallback or warning if the section isn't found
              console.warn("Pricing section with ID 'pricing' not found for scroll.");
              // Potentially scroll to another relevant part or top of page
            }
          }}
        >
          Snag my ISIC & save big 💸
        </motion.button>
      </section>
    );
  }

  // ---------- QUESTIONS ----------
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">👋 First things first</h2>
            {/* Retain focus styles, update rounding */}
            <input className="w-full p-3 border border-gray-300 rounded-2xl mb-3 focus:ring-sunny-orange focus:border-sunny-orange" placeholder="First name" value={answers.name} onChange={(e) => update("name", e.target.value)} />
            <input className="w-full p-3 border border-gray-300 rounded-2xl focus:ring-sunny-orange focus:border-sunny-orange" type="email" placeholder="Email" value={answers.email} onChange={(e) => update("email", e.target.value)} />
          </>
        );
      case 1:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">1️⃣ Destination?</h2>
            {/* Retain focus styles, update rounding */}
            <input className="w-full p-3 border border-gray-300 rounded-2xl mb-3 focus:ring-sunny-orange focus:border-sunny-orange" list="destList" placeholder="Type a city…" value={answers.dest} onChange={(e) => update("dest", e.target.value)} />
            <datalist id="destList">{Q1_DESTS.map((d) => <option key={d} value={d} />)}</datalist>
            {/* Use theme color #FF8A00 (text-sunny-orange) */}
            <button className="underline text-sunny-orange text-sm" onClick={() => update("dest", Q1_DESTS[Math.floor(Math.random() * Q1_DESTS.length)])}>Surprise me!</button>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">2️⃣ Pick your vibe</h2>
            <div className="grid grid-cols-2 gap-4">
              {Q2_VIBES.map((v) => (
                // Retain hover styles and border for unselected, update rounding
                <button key={v} className={`p-3 rounded-2xl border ${answers.vibe === v ? `${gradientBtn} text-white` : "bg-white border-gray-300 hover:bg-gray-50"}`} onClick={() => update("vibe", v)}>{v}</button>
              ))}
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">3️⃣ Budget style</h2>
            <div className="flex flex-col gap-3">
              {Q3_STYLE.map((s) => (
                // Retain hover styles and border for unselected, update rounding
                <button key={s} className={`p-3 rounded-2xl border ${answers.style === s ? `${gradientBtn} text-white` : "bg-white border-gray-300 hover:bg-gray-50"}`} onClick={() => update("style", s)}>{s}</button>
              ))}
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">4️⃣ Big spending categories</h2>
            <p className="text-sm mb-2 text-gray-600">Pick a couple – total savings remain 🔥</p>
            <div className="grid grid-cols-2 gap-4">
              {Q4_CATEGORIES.map((c) => (
                // Retain hover styles and border for unselected, update rounding
                <button key={c} className={`p-3 rounded-2xl border capitalize ${answers.cats.includes(c) ? `${gradientBtn} text-white` : "bg-white border-gray-300 hover:bg-gray-50"}`} onClick={() => {
                  const newCats = answers.cats.includes(c) ? answers.cats.filter((x) => x !== c) : [...answers.cats, c];
                  update("cats", newCats);
                }}>{c}</button>
              ))}
            </div>
          </>
        );
      case 5:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">5️⃣ Squad size</h2>
            <div className="grid grid-cols-2 gap-4">
              {Q5_GROUP.map((g) => (
                // Retain hover styles and border for unselected, update rounding
                <button key={g} className={`p-3 rounded-2xl border ${answers.group === g ? `${gradientBtn} text-white` : "bg-white border-gray-300 hover:bg-gray-50"}`} onClick={() => update("group", g)}>{g}</button>
              ))}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    // Updated background gradient to use theme colors: #FFFBEA (sunny-yellow-pale) to #FFF0BF (sunny-yellow-light)
    // Updated rounding to rounded-2xl
    <section className="bg-gradient-to-br from-sunny-yellow-pale to-sunny-yellow-light p-6 rounded-2xl shadow-xl max-w-xl mx-auto text-center">
      {step < 6 && (
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <SunnyMascot size="lg" travelStyle="adventure" />
          </div>
          <h1 className="text-3xl font-bold text-sunny-orange-dark mb-2">
            Ready for an Adventure? 🚀
          </h1>
          <p className="text-md text-gray-700">
            Answer a few Q's to find your perfect trip & unlock sweet ISIC savings! ✨
          </p>
        </div>
      )}
      {renderStep()}
      <div className="flex justify-between mt-6">
        {/* Use theme color #FF8A00 (text-sunny-orange) for back button */}
        {step > 0 && step < 6 && <button className="text-sunny-orange underline" onClick={back}>← Back</button>}
        {/* Ensure CTA button uses updated gradientBtn and rounded-2xl */}
        {step < 6 && (
          <button disabled={!valid()} onClick={step === 5 ? () => setStep(6) : next} className={`${gradientBtn} text-white px-4 py-2 rounded-2xl disabled:opacity-40 ml-auto`}>
            {step === 5 ? "Show Me the Savings →" : "Next →"}
          </button>
        )}
      </div>
    </section>
  );
}
