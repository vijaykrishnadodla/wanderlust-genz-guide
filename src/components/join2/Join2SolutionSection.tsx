import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Wallet, MapPin, HeartHandshake, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "1",
    icon: BadgeCheck,
    title: "Verified student access",
    text: "We verify your student status and unlock the official ISIC card, accepted worldwide.",
  },
  {
    num: "2",
    icon: Wallet,
    title: "Real savings, instantly",
    text: "Access verified student discounts on transport, attractions, food, tours, and more.",
  },
  {
    num: "3",
    icon: MapPin,
    title: "Travel done for you",
    text: "Get a personalized itinerary with city guides, daily plans, and must-know tips — built for your trip.",
  },
  {
    num: "4",
    icon: HeartHandshake,
    title: "Travel supported",
    text: "Prep guides, trip emails, and help when you're excited, lost, or unsure.",
  },
];

const Join2SolutionSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="inner">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-14 max-w-4xl mx-auto">
          Here's how Student Travel Buddy fixes that.
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-8 md:space-y-12">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex gap-6 items-start relative">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sunny-gradient flex items-center justify-center text-primary-foreground font-display text-2xl shadow-md z-10">
                    {s.num}
                  </div>
                  <div className="sunny-card flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="font-display text-xl text-foreground">{s.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">{s.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 max-w-xl mx-auto bg-sunny-yellow-light/60 border-l-4 border-primary rounded-xl px-6 py-5 transform rotate-1 shadow-sm">
          <p className="font-handwritten text-2xl sm:text-3xl text-foreground text-center">
            💡 Most students earn back the $20 on their first trip day.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link to="/checkout">
            <Button className="bg-sunny-gradient text-primary-foreground rounded-full px-8 py-6 text-base sm:text-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
              Unlock student perks <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Join2SolutionSection;
