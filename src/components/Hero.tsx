
import React from 'react';
import MiniSignUpForm from './MiniSignUpForm';
import SunnyCard from './SunnyCard'; 
import WaveDivider from './WaveDivider'; // Changed Wave to WaveDivider

const Hero = () => {
  return (
    // The outer section tag with id="hero" will be in Index.tsx
    // The WaveDivider below will also be in Index.tsx
    // This component will only render the content inside <div className="inner">
    // The prompt structure places <section id="hero"> and <WaveDivider/> in Index.tsx
    // So Hero.tsx should return the content for <div class="inner ...">
    <>
      <div className="grid lg:grid-cols-2 gap-10 items-center py-20">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            TRAVEL BRIGHTER.<br/>SPEND SMARTER.
          </h1>
          <p className="mt-4 max-w-lg text-lg">
            The ultimate travel sidekick for students – with Sunny by your side!
          </p>
          <p className="mt-3 text-sm opacity-80">
            Join thousands of students saving <strong>$200 + per week</strong> with exclusive perks.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 items-center mt-6">
            <p className="text-sm font-medium text-sunny-orange-dark"> {/* Using existing color, can adjust if needed */}
              Tokyo · Rome · Barcelona · Athens · Bali
            </p>
            <MiniSignUpForm />
          </div>

          <div className="flex gap-4 mt-8">
            <a href="#quiz" className="btn btn-yellow">Find Your Travel Style</a>
            <a href="#membership" className="btn btn-outline">Join Sunshine Club</a>
          </div>

          <p className="mt-6 text-xs opacity-60">
            🙂✈️🪄 &nbsp;Joined by <strong>5000 + student travelers</strong> {/* Corrected typo from travellers */}
          </p>
        </div>
        <SunnyCard />
      </div>
    </>
  );
};

export default Hero;
