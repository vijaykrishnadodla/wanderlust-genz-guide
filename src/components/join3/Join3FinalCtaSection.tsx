import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import SunnyMascot from '@/components/SunnyMascot';

const features = [
  { title: "ISIC Student Card & Verified Discounts", desc: "Save $2–300/week on transport, attractions, and experiences worldwide" },
  { title: "Daily Travel Itineraries", desc: "Know exactly what to do when you travel, no FOMO." },
  { title: "Local Student Community Groups", desc: "Connect with students wherever you are" },
  { title: "Student City Guides", desc: "Curated recommendations made for student budgets" },
  { title: "10 Non-Negotiable Student Travel Rules", desc: "What most students learn the hard (and expensive) way" },
  { title: "Local Events & Meetups", desc: "Travel doesn't have to be lonely" },
  { title: "Live Webinars", desc: "Learn how to travel smarter, anywhere" },
  { title: "Chat & Phone Support", desc: "Real help when you need it" },
  { title: "Curated Student Newsletter", desc: "Deals, tips, and updates and no spam." },
];

const Join3FinalCtaSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="inner">
        {/* Top headline */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            You already have what it takes to{' '}
            <span className="text-gradient">travel smarter!</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            Join thousands of students saving money, traveling confidently, and exploring the world together!
          </p>
          <Link to="/checkout" className="w-full sm:w-auto inline-block">
            <Button className="w-full sm:w-auto bg-sunny-gradient text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all mb-4">
              Join Student Travel Buddy now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground">
            ✓ Student-only access · ✓ Global discounts · ✓ Real community
          </p>
        </div>

        {/* Pricing card + features */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto items-start">
          {/* FULLTIMER card */}
          <div className="lg:w-1/2 w-full">
            <div className="sunny-card p-5 md:p-8 relative overflow-hidden">
              {/* Badge */}
              <div className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full inline-block mb-6 uppercase tracking-wide">
                30% OFF FOR LIMITED TIME
              </div>

              <h3 className="font-display text-3xl text-foreground mb-3">FULLTIMER</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                All-access pass for verified full-time students — perks, discounts, community events, and more.
              </p>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display text-4xl md:text-5xl text-foreground">$20</span>
                <span className="text-xl text-muted-foreground line-through">$29</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Most students make this back on their first trip.
              </p>

              <Link to="/checkout">
                <Button className="w-full bg-sunny-gradient text-primary-foreground rounded-full py-6 text-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                  GET FULLTIMER NOW <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Sunny mascot */}
            <div className="mt-6 flex justify-center">
              <SunnyMascot size="md" withText message="Best choice for most students traveling this year!" />
            </div>
          </div>

          {/* Features list */}
          <div className="lg:w-1/2 w-full">
            <p className="font-display text-lg text-foreground mb-6">
              Unlock ALL student travel perks plus exclusive access to special events & VIP support.
            </p>

            <div className="space-y-3 md:space-y-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-sunny-gradient flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-primary-foreground" />
                  </span>
                  <div>
                    <span className="font-semibold text-foreground">{f.title}: </span>
                    <span className="text-muted-foreground">{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join3FinalCtaSection;
