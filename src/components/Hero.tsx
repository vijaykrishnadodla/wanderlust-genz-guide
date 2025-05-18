
import React from 'react';
import MiniSignUpForm from './MiniSignUpForm';
import SunnyCard from './SunnyCard'; // New import
import WaveDivider from './WaveDivider';
// Removed unused imports like Button, ArrowRight, Sparkles, MapPin, Sun, useIsMobile (moved to SunnyCard)

const Hero = () => {
  // Removed isMobile hook as it's now in SunnyCard
  return (
    <section id="hero">
      <div className="inner grid lg:grid-cols-2 gap-10 items-center py-20">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            TRAVEL <span className="text-sunny-yellow-dark">BRIGHTER.</span><br />SPEND <span className="text-sunny-orange">SMARTER.</span>
          </h1>
          <p className="mt-4 max-w-lg text-lg">
            The ultimate travel sidekick for students – with Sunny by your side!
          </p>
          <p className="mt-3 text-sm opacity-80">
            Join thousands of students saving <strong>$200+ per week</strong> with exclusive perks.
          </p>

          {/* pills + email grid */}
          <div className="grid sm:grid-cols-2 gap-4 items-center mt-6">
            <p className="text-sm font-medium text-sunny-orange-dark">
              Tokyo · Rome · Barcelona · Athens · Bali
            </p>
            <MiniSignUpForm />
          </div>

          {/* CTAs */}
          <div className="flex gap-4 mt-8">
            <a href="#quiz" className="btn btn-yellow">Find Your Travel Style</a>
            <a href="#membership" className="btn btn-outline">Join Sunshine Club</a>
          </div>

          <p className="mt-6 text-xs opacity-60">
            🙂✈️🪄 &nbsp;Joined by <strong>5,000+ student travellers</strong>
          </p>
        </div>

        <SunnyCard /> {/* Mascot + quote stays */}
      </div>
      <WaveDivider />
    </section>
  );
};

export default Hero;
