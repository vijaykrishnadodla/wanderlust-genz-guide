
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
          
        </div>
        
        {/* Benefits Section - new section above Sunshine Club */}
        <div className="relative stb-section-gradient-3">
          <BenefitsSection />
          
        </div>
        
        {/* Sunshine Club section with gradient 1 */}
        <div className="relative stb-section-gradient-1">
          <SunshineClub />
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </div>
        
        {/* Offering section with gradient 2 */}
        <div className="relative stb-section-gradient-2">
          <Offering />
        </div>
        
        {/* Travel Quiz section with gradient 1 */}
        <div className="relative stb-section-gradient-1">
          
          <TravelQuiz />
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </div>
        
        {/* Testimonials section with gradient 3 */}
        <div className="relative stb-section-gradient-3">
          <Testimonials />
        </div>
        
        {/* Features section with gradient 1 */}
        <div className="relative stb-section-gradient-1">
          
          <Features />
        </div>
        
        {/* BackStory section with gradient 4 */}
        <div className="relative stb-section-gradient-4">
          
          <BackStory />
        </div>
        
        {/* HowStarted section with gradient 1 */}
        <div className="relative stb-section-gradient-1">
          <HowStarted />
          <div className="stb-wave-divider stb-wave-divider-bottom"></div>
        </div>
        
        {/* Ambassador section with gradient 2 */}
        <div className="relative stb-section-gradient-2">
          <Ambassador />
        </div>
        
        {/* SignUp section with gradient 1 */}
        <div className="relative stb-section-gradient-1">
          <SignUp />
        </div>
        
        {/* Pricing Section with gradient 3 */}
        <div className="relative stb-section-gradient-3">
          <PricingSection />
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>;
};
export default Index;
