import React from 'react';

const problems = [
  {
    emoji: "😵‍💫",
    title: "Planning overload",
    text: "You've saved TikToks, opened 20 tabs, and still don't know where to start. Every blog says something different.",
  },
  {
    emoji: "💸",
    title: "Budget anxiety",
    text: "You want to travel — but you're scared of overspending, hidden costs, or blowing your savings on mistakes.",
  },
  {
    emoji: "😬",
    title: 'Safety & "what if" fear',
    text: "What if something goes wrong? What if you get lost, scammed, or stuck without support?",
  },
];

const JoinProblemSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="inner">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-12">
          Planning your trip abroad shouldn't feel this hard.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {problems.map((p, i) => (
            <div
              key={i}
              className="sunny-card flex flex-col items-center text-center p-8"
            >
              <span className="text-6xl mb-4">{p.emoji}</span>
              <h3 className="font-display text-xl text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Transition punchline */}
        <div className="bg-primary/10 border border-primary/20 rounded-2xl px-6 py-5 max-w-3xl mx-auto text-center">
          <p className="font-handwritten text-2xl sm:text-3xl text-foreground">
            Most students don't fail to travel because they don't want to.{' '}
            <span className="text-primary font-bold">They fail because they don't have a simple system.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinProblemSection;
