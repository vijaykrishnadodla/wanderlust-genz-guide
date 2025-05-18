
import React from 'react';
import { CheckCircle } from 'lucide-react'; // Or any other icon you prefer

const traits = [
  { title: "Adventure Seeker", description: "Always ready for the next thrill and discovery." },
  { title: "Budget Savvy", description: "Smart with money, always finding the best deals." },
  { title: "Culture Curious", description: "Eager to learn and immerse in local traditions." },
  { title: "Community Focused", description: "Loves connecting with fellow travelers and locals." },
];

const CoreTraitsGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-8">
      {traits.map((trait, index) => (
        <div key={index} className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-sunny-yellow-light transform transition-all hover:scale-105">
          <div className="flex items-center mb-3">
            <CheckCircle className="h-6 w-6 text-sunny-orange mr-3" />
            <h4 className="text-lg font-semibold text-sunny-orange-dark">{trait.title}</h4>
          </div>
          <p className="text-sm text-gray-700">{trait.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CoreTraitsGrid;
