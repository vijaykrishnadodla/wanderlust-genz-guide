
import React from 'react';
import { motion } from 'framer-motion';
import { FormData, TravelQuizResultsViewProps } from './TravelQuizTypes';
import { SUNNY_IMG, gradientBtn } from './TravelQuizConstants';

export const TravelQuizResultsView: React.FC<TravelQuizResultsViewProps> = ({ answers, calculatedResults, heroImg, onSnagMembership }) => {
  const { base, breakdown, saveTotal } = calculatedResults;

  return (
    <section className="flex flex-col items-center text-center p-6 max-w-2xl mx-auto">
      <img 
        src={heroImg} 
        alt={answers.dest || "Selected Destination"} 
        className="rounded-2xl shadow-xl mb-4 w-full h-64 object-cover" 
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null; // prevent infinite loop if default also fails
          target.src = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"; // Default fallback
        }}
      />
      <h2 className="text-3xl font-bold mb-2">
        🔥 {answers.name || "Traveler"}, {answers.dest || "your destination"} is calling!
      </h2>
      <p className="text-lg mb-4">
        1‑week <span className="font-semibold">{answers.style || "Mid-range"}</span> budget ≈ <span className="font-semibold">${base}</span>
      </p>
      <p className="text-xl font-bold mb-4">
        Snag our membership with ISIC & save about <span className="text-sunny-orange">${saveTotal}</span> in 7&nbsp;days 🤑
      </p>

      <div className="grid grid-cols-2 gap-4 text-sm w-full mb-6">
        {Object.entries(breakdown).map(([c, v]) => (
          <div 
            key={c} 
            className={`rounded-2xl p-3 shadow ${answers.cats.includes(c) ? "bg-sunny-yellow-light" : "bg-white/50 backdrop-blur-sm"}`}
          >
            <p className="font-semibold capitalize">{c}</p>
            <p>Spend: ${v.spend}</p>
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
        className={`${gradientBtn} text-white px-6 py-3 rounded-2xl text-lg shadow-lg`}
        onClick={onSnagMembership}
      >
        Snag our membership with ISIC & save big 💸
      </motion.button>
    </section>
  );
};
