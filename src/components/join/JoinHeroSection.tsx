import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, ShieldCheck, CreditCard, BadgeCheck } from 'lucide-react';
import SunnyMascot from '@/components/SunnyMascot';

const JoinHeroSection = () => {
  const bullets = [
    "Official ISIC student card (accepted worldwide)",
    "Personalized itinerary built for your dates, city & budget",
    "Save $20+ per day on transport, attractions & food",
    "Simple verification. No confusing programs.",
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="inner">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground leading-tight mb-6">
              Travel abroad without the{' '}
              <span className="text-gradient">stress, overspending, or guesswork.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
              Student Travel Buddy is a <strong className="text-primary">$20/year</strong> membership that turns overwhelmed students into confident travelers — with real discounts, a custom trip plan, and support when you need it.
            </p>

            {/* Micro-value bullets — 2 col desktop, 1 col mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-2xl mx-auto lg:mx-0">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-left">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sunny-gradient flex items-center justify-center text-primary-foreground text-xs font-bold">✓</span>
                  <span className="text-sm text-foreground">{b}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Made for U.S. students traveling abroad (study abroad, gap year, personal trips).
            </p>

            {/* CTA + price badge */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-4">
              <Link to="/checkout">
                <Button className="bg-sunny-gradient text-primary-foreground rounded-full px-8 py-6 text-base sm:text-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                  Get your Student Travel Buddy membership <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <span className="bg-primary/10 text-primary font-display text-lg px-4 py-2 rounded-full border-2 border-primary/30">
                $20/year
              </span>
            </div>

            {/* Micro-copy */}
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center lg:justify-start mb-8">
              <Zap className="h-4 w-4 text-primary" /> Takes less than 3 minutes
            </p>

            {/* Trust micro-row */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <BadgeCheck className="h-4 w-4 text-primary" /> Official ISIC
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-primary" /> Secure checkout
              </span>
              <span className="flex items-center gap-1">
                <CreditCard className="h-4 w-4 text-primary" /> Cancel anytime
              </span>
            </div>
          </div>

          {/* Mascot */}
          <div className="flex-shrink-0 sunny-float">
            <SunnyMascot size="xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinHeroSection;
