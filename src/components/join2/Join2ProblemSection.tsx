import React from 'react';

const problems = [
  {
    emoji: "😵‍💫",
    title: "Planning overload",
    text: "You've saved TikToks, opened endless tabs, and still don't know what's legit or worth the money.",
  },
  {
    emoji: "💸",
    title: "Budget stress",
    text: "Student discounts exist — but they're hard to find, unreliable, or not made for real travel.",
  },
  {
    emoji: "😬",
    title: "Fear of getting it wrong",
    text: "You want real experiences, not tourist traps, scams, or expensive mistakes.",
  },
];

const Join2ProblemSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="inner">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-12">
          Planning trips as a student shouldn't be this hard.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {problems.map((p, i) => (
            <div key={i} className="sunny-card flex flex-col items-center text-center p-8">
              <span className="text-6xl mb-4">{p.emoji}</span>
              <h3 className="font-display text-xl text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-2xl px-6 py-5 max-w-3xl mx-auto text-center">
          <p className="font-handwritten text-2xl sm:text-3xl text-foreground">
            You don't need more blogs.{' '}
            <span className="text-primary font-bold">You need a system made for students.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Join2ProblemSection;
