import React from 'react';

const painPoints = [
  "Student discounts exist, but they're hard to find and rarely advertised.",
  "Many \"deals\" online aren't built for students or aren't trustworthy.",
  "Planning trips alone feels overwhelming and confusing.",
  "You want real experiences, not tourist traps or scams.",
];

const Join3ProblemSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="inner max-w-3xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-4">
          Planning trips as a student shouldn't be this hard.
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          The all-in-one student travel membership that unlocks real discounts, insider tips, and a global student community, wherever you're headed.
        </p>

        <div className="space-y-4">
          {painPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-3 sunny-card p-5">
              <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-destructive/15 flex items-center justify-center text-destructive text-sm font-bold">✕</span>
              <p className="text-base text-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Join3ProblemSection;
