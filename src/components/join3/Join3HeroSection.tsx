import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import SunnyMascot from '@/components/SunnyMascot';

const bullets = [
  "Save up to $300/week with verified student discounts",
  "Get your ISIC Student Card + exclusive perks",
  "Plan trips with confidence",
];

const Join3HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="inner">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground leading-tight mb-6">
              Travel smarter as a student.{' '}
              <span className="text-gradient">Save money everywhere you go.</span>
            </h1>

            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
              The all-in-one student travel membership that unlocks real discounts, insider tips, and a global student community, wherever you're headed.
            </p>

            <div className="space-y-3 mb-8 max-w-2xl mx-auto lg:mx-0">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-left">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sunny-gradient flex items-center justify-center text-primary-foreground text-xs font-bold">✓</span>
                  <span className="text-base text-foreground">{b}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-4">
              <Link to="/checkout">
                <Button className="bg-sunny-gradient text-primary-foreground rounded-full px-8 py-6 text-base sm:text-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                  Get student access now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center lg:justify-start mb-6">
              ✓ Instant access · ✓ Student-verified · ✓ Cancel anytime
            </p>

            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center lg:justify-start">
              <Star className="h-4 w-4 text-primary fill-primary" /> Trusted by 5,000+ students from top universities worldwide
            </p>
          </div>

          <div className="flex-shrink-0 sunny-float">
            <SunnyMascot size="xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join3HeroSection;
