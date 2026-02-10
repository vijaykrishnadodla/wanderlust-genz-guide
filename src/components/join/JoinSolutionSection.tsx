import React from 'react';
import { BadgeCheck, Wallet, MapPin, HeartHandshake } from 'lucide-react';

const steps = [
  {
    num: "1",
    icon: BadgeCheck,
    title: "Get verified once",
    text: "We confirm your student status and issue your official ISIC card — the most accepted student ID worldwide.",
  },
  {
    num: "2",
    icon: Wallet,
    title: "Save money instantly",
    text: "Unlock 150,000+ student discounts on transport, attractions, food, hostels, museums & more.",
  },
  {
    num: "3",
    icon: MapPin,
    title: "Get your personal trip plan",
    text: "Tell us where you're going. We build a custom itinerary that fits your budget, interests, and pace — with daily savings clearly shown.",
  },
  {
    num: "4",
    icon: HeartHandshake,
    title: "Travel supported, not alone",
    text: "You get clear prep guides, daily trip emails, and access to help if you're unsure about anything.",
  },
];

const JoinSolutionSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="inner">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-14 max-w-4xl mx-auto">
          Student Travel Buddy gives you the plan, the perks, and the confidence — in one place.
        </h2>

        {/* Timeline — vertical on desktop, stacked cards on mobile */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line (desktop only) */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex gap-6 items-start relative">
                  {/* Number circle */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sunny-gradient flex items-center justify-center text-primary-foreground font-display text-2xl shadow-md z-10">
                    {s.num}
                  </div>

                  {/* Card */}
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

        {/* Value callout — sticky-note style */}
        <div className="mt-14 max-w-xl mx-auto bg-sunny-yellow-light/60 border-l-4 border-primary rounded-xl px-6 py-5 transform rotate-1 shadow-sm">
          <p className="font-handwritten text-xl sm:text-2xl text-foreground text-center">
            💡 Most students save more in one day than the entire membership costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinSolutionSection;
