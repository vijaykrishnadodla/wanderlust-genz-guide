import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    emoji: "🎓",
    title: "Verified Student Access",
    text: "Unlock the ISIC Student Card and discounts accepted worldwide on transport, attractions, tours, food, and more.",
  },
  {
    emoji: "🧭",
    title: "Travel, done for you",
    text: "Get curated itineraries, city guides, and must-know tips made for you.",
  },
  {
    emoji: "🌍",
    title: "Global student community",
    text: "Connect with students traveling at the same time as you and get advice, meetups, and support wherever you go.",
  },
  {
    emoji: "💬",
    title: "Real human support",
    text: "Chat and community help when you're excited, lost, or stressed during your trip.",
  },
];

const Join3SolutionSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="inner">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-14 max-w-4xl mx-auto">
          Here's how Student Travel Buddy fixes that.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {solutions.map((s, i) => (
            <div key={i} className="sunny-card p-5 md:p-8 flex flex-col items-start">
              <span className="text-4xl mb-4">{s.emoji}</span>
              <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/checkout">
            <Button className="w-full sm:w-auto bg-sunny-gradient text-primary-foreground rounded-full px-8 py-6 text-base sm:text-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
              Unlock student perks <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Join3SolutionSection;
