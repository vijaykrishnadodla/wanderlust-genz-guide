import React from 'react';
import { Globe, GraduationCap, Compass, MapPin, Quote } from 'lucide-react';

const proofPoints = [
  { icon: Globe, text: "Official ISIC-issued cards (used in 130+ countries)" },
  { icon: GraduationCap, text: "Designed specifically for U.S. full-time students" },
  { icon: Compass, text: "Built by travelers who studied & lived abroad" },
  { icon: MapPin, text: "Used for Europe, UK, Asia & beyond" },
];

const testimonials = [
  { quote: "I finally booked my trip because everything felt clear.", name: "Matthew S., UIUC" },
  { quote: "I saved more than $200 in my first week.", name: "Emily R., U-M" },
  { quote: "This made traveling feel doable, not scary.", name: "Michael B., Penn" },
];

const JoinSocialProofSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="inner">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-12">
          Trusted by students traveling all over the world
        </h2>

        {/* Proof icons row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {proofPoints.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="flex items-center gap-3 sunny-card p-4 text-center sm:text-left">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-base text-foreground">{p.text}</p>
              </div>
            );
          })}
        </div>

        {/* ISIC / UNESCO logos */}
        <div className="flex items-center justify-center gap-8 mb-14 opacity-70">
          <img src="/lovable-uploads/4e8ca135-6b1c-4114-955b-e29bc9a85a77.png" alt="ISIC logo" className="h-12 object-contain" />
          <img src="/lovable-uploads/6d788043-5bb0-4bd1-aee1-41c5cedd3162.png" alt="UNESCO logo" className="h-12 object-contain" />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="sunny-card p-6 text-center">
              <Quote className="h-6 w-6 text-primary/40 mx-auto mb-3" />
              <p className="text-foreground font-medium mb-3 italic">"{t.quote}"</p>
              <p className="text-sm text-muted-foreground">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinSocialProofSection;
