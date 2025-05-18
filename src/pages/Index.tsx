
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
import WaveDivider from '@/components/WaveDivider';

const Index = () => {
  return <div className="min-h-screen">
      <Navbar />

      <div className="relative">
        {/* Hero section */}
        <div className="relative">
          <Hero />
          <WaveDivider />
        </div>
        
        {/* Travel Quiz section */}
        <div className="relative">
          <TravelQuiz />
          <WaveDivider />
        </div>
        
        {/* Benefits Section */}
        <div className="relative">
          <BenefitsSection />
          <WaveDivider />
        </div>
        
        {/* Sunshine Club section */}
        <div className="relative">
          <SunshineClub />
          <WaveDivider />
        </div>
        
        {/* Offering section */}
        <div className="relative">
          <Offering />
          <WaveDivider />
        </div>
        
        {/* Testimonials section */}
        <div className="relative">
          <Testimonials />
          <WaveDivider />
        </div>
        
        {/* Features section */}
        <div className="relative">
          <Features />
          <WaveDivider />
        </div>
        
        {/* BackStory section */}
        <div className="relative">
          <BackStory />
          <WaveDivider />
        </div>
        
        {/* HowStarted section */}
        <div className="relative">
          <HowStarted />
          <WaveDivider />
        </div>
        
        {/* Ambassador section */}
        <div className="relative">
          <Ambassador />
          <WaveDivider />
        </div>
        
        {/* SignUp section */}
        <div className="relative">
          <SignUp />
          <WaveDivider />
        </div>
        
        {/* Pricing Section */}
        <div className="relative">
          <PricingSection />
          <WaveDivider />
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>;
};
export default Index;
