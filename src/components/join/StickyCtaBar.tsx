import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const StickyCtaBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~600px (hero height)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 bg-primary/95 backdrop-blur-sm shadow-md transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="inner flex items-center justify-between py-2.5">
        <span className="text-primary-foreground font-display text-xs sm:text-base">
          Student Travel Buddy
        </span>
        <Link to="/checkout">
          <Button
            size="sm"
            className="bg-primary-foreground text-primary rounded-full font-semibold hover:bg-primary-foreground/90 transition-all"
          >
            Join for $20 <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StickyCtaBar;
