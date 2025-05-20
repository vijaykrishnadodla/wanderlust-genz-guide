import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, ExternalLink } from 'lucide-react';
import SunnyMascot from './SunnyMascot';
import JourneySuns from './JourneySuns';

const SunshineClub = () => {
  const perks = [
    "Exclusive discounts on flights, accommodation, and activities (save up to 30%!)",
    "Access to a global community of student travelers",
    "Curated city guides and insider tips from local students",
    "Personalized travel recommendations based on your interests",
    "Early access to new features and perks",
    "Priority support from our travel experts",
    "Official ISIC digital card for international student recognition & benefits",
    "Member-only online events and workshops",
  ];

  return (
    <section id="sunshine-club" className="py-16 md:py-24 bg-gradient-to-br from-sunny-yellow-light via-sunny-orange-light to-sunny-yellow relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full filter blur-2xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-white/10 rounded-full filter blur-3xl opacity-60 animate-pulse-slower"></div>
      <JourneySuns />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon and Title */}
          <div className="inline-block bg-white/80 p-3 rounded-full shadow-md mb-6 transform rotate-[-3deg] sunny-wiggle">
            <Users className="h-8 w-8 text-sunny-orange" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-4 leading-tight shadow-text-sm">
            Join The <span className="text-sunny-yellow-dark">Sunshine Club</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-medium">
            Unlock a world of exclusive travel benefits and connect with fellow student adventurers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column with perks list */}
          <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl space-y-4 transform md:rotate-1">
            <h3 className="text-2xl font-semibold text-sunny-orange-dark mb-4">Membership Perks:</h3>
            <ul className="space-y-3">
              {perks.map((perk, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sunny-orange mr-3 mt-0.5 shrink-0" />
                  <span className="text-slate-700">{perk}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button className="w-full bg-sunny-gradient text-white font-bold rounded-full px-8 py-3 text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all group">
                Become a Sunshine Club Member
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          {/* Right column with Sunny Mascot and ISIC card info */}
          <div className="flex flex-col items-center justify-center space-y-6 transform md:-rotate-1">
            <div className="relative">
              <div className="bg-white/80 p-3 rounded-lg shadow-lg transform rotate-2">
                <SunnyMascot size="lg" travelStyle="adventure" className="sunny-bounce-light" />
              </div>
              <p className="font-handwritten text-xl text-center mt-3 text-white shadow-text-xs">Your adventure starts here!</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl w-full max-w-md text-center">
              <img src="/lovable-uploads/fce2b689-f403-4f89-9f79-0091c0c3be6f.png" alt="ISIC Logo" className="h-12 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-sunny-orange-dark mb-2">Includes Official ISIC Digital Card!</h4>
              <p className="text-sm text-slate-600">
                Get recognized as a student worldwide and unlock 150,000+ discounts with the International Student Identity Card.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-handwritten text-2xl md:text-3xl text-white shadow-text-sm">
            Ready to travel smarter, safer, and sunnier?
          </p>
        </div>
      </div>
    </section>
  );
};

export default SunshineClub;
