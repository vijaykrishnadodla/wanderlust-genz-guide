
import React from 'react';
import { TravelQuizStepSharedProps } from '../TravelQuizTypes';
import { Q1_DESTS } from '../TravelQuizConstants';

export const TravelQuizStep1Destination: React.FC<TravelQuizStepSharedProps> = ({ answers, update }) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">1️⃣ Destination?</h2>
      <input 
        className="w-full p-3 border border-gray-300 rounded-2xl mb-3 focus:ring-sunny-orange focus:border-sunny-orange" 
        list="destList" 
        placeholder="Type a city…" 
        value={answers.dest} 
        onChange={(e) => update("dest", e.target.value)} 
        aria-label="Destination city"
      />
      <datalist id="destList">
        {Q1_DESTS.map((d) => <option key={d} value={d} />)}
      </datalist>
      <button 
        className="underline text-sunny-orange text-sm" 
        onClick={() => update("dest", Q1_DESTS[Math.floor(Math.random() * Q1_DESTS.length)])}
      >
        Surprise me!
      </button>
    </>
  );
};
