
import React, { useEffect } from 'react'; // Added useEffect
import { useLocation } from 'react-router-dom'; // Added useLocation
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
  const location = useLocation(); // Added

  useEffect(() => {
    // Scrolls to the top when the component mounts or path changes (without hash)
    // Handles specific hash scrolling for sections after navigation
    const { hash } = location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Only scroll to top if there's no hash, to avoid overriding hash scrolling
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]); // Rerun on path or hash change

  return <div className="min-h-screen">
      <Navbar />

      <div className="relative">
        {/* Hero section */}
        <div className="relative">
          <Hero /> {/* Hero component already has id="hero" */}
          <WaveDivider />
        </div>
        
        {/* Travel Quiz section */}
        <div id="quiz" className="relative"> {/* Added id for quiz */}
          <TravelQuiz />
          <WaveDivider />
        </div>
        
        {/* Benefits Section */}
        <div className="relative">
          <BenefitsSection />
          <WaveDivider />
        </div>
        
        {/* Sunshine Club section */}
        <div id="sunshine-club" className="relative"> {/* Added id for sunshine-club */}
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
        <div id="backstory" className="relative"> {/* Added id for backstory */}
          <BackStory />
          <WaveDivider />
        </div>
        
        {/* HowStarted section */}
        <div className="relative">
          <HowStarted />
          <WaveDivider />
        </div>
        
        {/* Ambassador section */}
        <div id="ambassador" className="relative"> {/* Added id for ambassador */}
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
