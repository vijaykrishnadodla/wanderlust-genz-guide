import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  { quote: "The ISIC card paid for itself almost immediately." },
  { quote: "I finally booked my trip because everything felt clear." },
  { quote: "This saved me money and stress on my first solo trip." },
];

const universities = [
  { name: "Harvard", logo: "/lovable-uploads/c856622f-59f3-4cd0-baa8-09350023937b.png" },
  { name: "Stanford", logo: "/lovable-uploads/832dd1b4-4324-40a9-9c84-0a823be50f5a.png" },
  { name: "Yale", logo: "/lovable-uploads/d3f54b62-f843-4732-8aae-27f9e7d51dda.png" },
  { name: "Princeton", logo: "/lovable-uploads/c8ee8c54-1ae7-490f-bbb8-75978c486431.png" },
  { name: "Columbia", logo: "/lovable-uploads/544e57e6-94ce-4b89-b52a-9d1dabf9b0ea.png" },
  { name: "Berkeley", logo: "/lovable-uploads/b66cce02-8ef6-42d3-8be3-fb538945490c.png" },
  { name: "UPenn", logo: "/lovable-uploads/698b81da-180a-47a2-b935-1dd063b0a8dc.png" },
  { name: "Cornell", logo: "/lovable-uploads/5c2d377d-29d1-42e0-bd60-bd389a75fe7d.png" },
];

const Join2SocialProofSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="inner">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-12">
          Built by a student traveler, for student travelers.
        </h2>

        {/* Founder quote */}
        <div className="sunny-card max-w-3xl mx-auto p-8 mb-14 text-center">
          <Quote className="h-8 w-8 text-primary/40 mx-auto mb-4" />
          <p className="text-lg text-foreground italic leading-relaxed mb-4">
            "I know how overwhelming student travel feels — I've studied, lived, and traveled abroad myself. Student Travel Buddy exists so you don't have to figure everything out alone."
          </p>
          <p className="text-sm text-muted-foreground font-medium">— Dominika, Founder</p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t, i) => (
            <div key={i} className="sunny-card p-6 text-center">
              <Quote className="h-6 w-6 text-primary/40 mx-auto mb-3" />
              <p className="text-lg text-foreground font-medium italic">"{t.quote}"</p>
            </div>
          ))}
        </div>

        {/* ISIC / UNESCO logos */}
        <div className="flex items-center justify-center gap-8 mb-8 opacity-70">
          <img src="/lovable-uploads/4e8ca135-6b1c-4114-955b-e29bc9a85a77.png" alt="ISIC logo" className="h-12 object-contain" />
          <img src="/lovable-uploads/6d788043-5bb0-4bd1-aee1-41c5cedd3162.png" alt="UNESCO logo" className="h-12 object-contain" />
        </div>

        {/* University logos */}
        <p className="text-center text-sm text-muted-foreground mb-4 font-medium">Students from top universities trust us</p>
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {universities.map((uni, i) => (
            <img
              key={i}
              src={uni.logo}
              alt={`${uni.name} University`}
              className="h-10 w-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          In cooperation with ISIC · Trusted by students worldwide.
        </p>
      </div>
    </section>
  );
};

export default Join2SocialProofSection;
