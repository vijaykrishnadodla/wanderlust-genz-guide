
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SunshineClub from '@/components/SunshineClub';
// Offering component is not explicitly in the new structure, ensure its content is merged or handled if needed.
// import Offering from '@/components/Offering'; 
import TravelQuiz from '@/components/TravelQuiz';
import Testimonials from '@/components/Testimonials';
import Features from '@/components/Features';
import BackStory from '@/components/BackStory';
import HowStarted from '@/components/HowStarted';
import Ambassador from '@/components/Ambassador';
// SignUp component is not explicitly in the new structure, usually part of other sections or a dedicated page.
// import SignUp from '@/components/SignUp'; 
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection'; // This was in the original, but not in the new section list. Will add to #membership or its own section if needed.
import BenefitsSection from '@/components/BenefitsSection';
import WaveDivider from '@/components/WaveDivider';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section id="hero">
        {/* Hero section: WaveDivider only BELOW */}
        <div className="inner">
          <Hero />
        </div>
        <WaveDivider />
      </section>
      
      <section id="quiz">
        <WaveDivider />
        <div className="inner">
          <TravelQuiz />
        </div>
        <WaveDivider flip />
      </section>
      
      <section id="benefits">
        <WaveDivider />
        <div className="inner">
          <BenefitsSection />
        </div>
        <WaveDivider flip />
      </section>
      
      <section id="membership">
        <WaveDivider />
        <div className="inner">
          <SunshineClub />
          {/* Considering PricingSection might belong here or needs its own section */}
          <PricingSection /> 
        </div>
        <WaveDivider flip />
      </section>

      {/* Merged Offering into Features as per previous discussions if applicable, or it could be part of membership */}
      {/* 
      <section id="offering">
        <WaveDivider />
        <div className="inner">
          <Offering />
        </div>
        <WaveDivider flip />
      </section> 
      */}
      
      <section id="story">
        <WaveDivider />
        <div className="inner">
          <BackStory />
          <HowStarted />
        </div>
        <WaveDivider flip />
      </section>

      {/* Testimonials and Features might be separate or combined depending on content strategy */}
      <section id="testimonials">
        <WaveDivider />
        <div className="inner">
          <Testimonials />
        </div>
        <WaveDivider flip />
      </section>

      <section id="features">
        <WaveDivider />
        <div className="inner">
          <Features />
        </div>
        <WaveDivider flip />
      </section>
      
      <section id="ambassadors">
        <WaveDivider />
        <div className="inner">
          <Ambassador />
        </div>
        <WaveDivider flip />
      </section>
      
      {/* SignUp component is often a specific call to action, might be part of Footer or Membership */}
      {/* 
      <section id="signup">
        <WaveDivider />
        <div className="inner">
          <SignUp />
        </div>
        <WaveDivider flip />
      </section> 
      */}
      
      <section id="footer">
        {/* Footer: WaveDivider only ABOVE (flip) */}
        <WaveDivider flip />
        <div className="inner"> {/* Footer itself might not need inner if it handles its own padding/max-width */}
          <Footer />
        </div>
        {/* No WaveDivider below footer */}
      </section>
    </div>
  );
};
export default Index;
