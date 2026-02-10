import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Join2FinalCtaSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="inner text-center max-w-2xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
          You already have what it takes to{' '}
          <span className="text-gradient">travel smarter.</span>
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Join thousands of students saving money, traveling confidently, and exploring the world together.
        </p>

        <div className="inline-block bg-primary/10 text-primary font-display text-lg px-6 py-3 rounded-full border-2 border-primary/30 mb-8">
          $20 / year — most students make this back on their first trip.
        </div>

        <div className="mb-6">
          <Link to="/checkout">
            <Button className="bg-sunny-gradient text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
              Get full-time student access <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          ✓ Student-only access · ✓ Global discounts · ✓ Real support
        </p>
      </div>
    </section>
  );
};

export default Join2FinalCtaSection;
