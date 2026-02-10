import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const JoinFinalCtaSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="inner text-center max-w-2xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-8">
          Stop overthinking.{' '}
          <span className="text-gradient">Start traveling smarter.</span>
        </h2>

        <div className="flex flex-col items-center gap-3 mb-10">
          {["One small step", "One simple system", "One year of student travel perks"].map((b, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sunny-gradient flex items-center justify-center text-primary-foreground text-xs font-bold">✓</span>
              <span className="text-foreground font-medium">{b}</span>
            </div>
          ))}
        </div>

        <Link to="/checkout">
          <Button className="bg-sunny-gradient text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
            Join Student Travel Buddy for $20 <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>

        <p className="mt-5 text-sm text-muted-foreground font-handwritten text-lg">
          Most students spend $20 on one airport meal. This lasts all year.
        </p>
      </div>
    </section>
  );
};

export default JoinFinalCtaSection;
