
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SunshineClub from '@/components/SunshineClub';
import Offering from '@/components/Offering';
import TravelQuiz from '@/components/TravelQuiz';
import Testimonials from '@/components/Testimonials';
import Features from '@/components/Features';
import BackStory from '@/components/BackStory';
import HowStarted from '@/components/HowStarted';
import Ambassador from '@/components/Ambassador';
import SignUp from '@/components/SignUp';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import BenefitsSection from '@/components/BenefitsSection';

const Index = () => {
  return <div className="stb-page-container min-h-screen">
      <Navbar />

      <div className="relative">
        {/* Hero section with base gradient */}
        <div className="relative">
          <Hero />
          {/* Wave divider after Hero */}
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </div>
        
        {/* Travel Quiz section - with consistent gradient */}
        <section id="quiz" className="relative stb-section-gradient">
          <TravelQuiz />
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </section>
        
        {/* Benefits Section */}
        <section id="benefits" className="relative stb-section-gradient">
          <BenefitsSection />
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </section>
        
        {/* Sunshine Club section */}
        <section id="sunshine-club" className="relative stb-section-gradient">
          <SunshineClub />
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </section>
        
        {/* Offering section */}
        <section id="offering" className="relative stb-section-gradient">
          <Offering />
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </section>
        
        {/* Testimonials section */}
        <section id="testimonials" className="relative stb-section-gradient">
          <Testimonials />
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </section>
        
        {/* Features section */}
        <section id="features" className="relative stb-section-gradient">
          <Features />
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </section>
        
        {/* BackStory section */}
        <section id="our-story" className="relative stb-section-gradient">
          <BackStory />
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </section>
        
        {/* HowStarted section */}
        <section className="relative stb-section-gradient">
          <HowStarted />
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </section>
        
        {/* Ambassador section */}
        <section id="ambassadors" className="relative stb-section-gradient">
          <Ambassador />
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </section>
        
        {/* SignUp section */}
        <section id="signup" className="relative stb-section-gradient">
          <SignUp />
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="relative stb-section-gradient">
          <PricingSection />
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>;
};
export default Index;
