
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sales/HeroSection';
import VideoSection from '@/components/sales/VideoSection';
import PainPointsSection from '@/components/sales/PainPointsSection';
import PositiveOutcomesSection from '@/components/sales/PositiveOutcomesSection';
import BriefIntroSection from '@/components/sales/BriefIntroSection';
import TestimonialsSection from '@/components/sales/TestimonialsSection';
import WhatsInsideSection from '@/components/sales/WhatsInsideSection';
import ModuleBreakdownSection from '@/components/sales/ModuleBreakdownSection';
import AboutFounderSection from '@/components/sales/AboutFounderSection';
import GuestExpertsSection from '@/components/sales/GuestExpertsSection';
import WhoItsForSection from '@/components/sales/WhoItsForSection';
import CtaPricingSection from '@/components/sales/CtaPricingSection';
import FaqsSection from '@/components/sales/FaqsSection';

const SalesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <PainPointsSection />
      <PositiveOutcomesSection />
      <BriefIntroSection />
      <TestimonialsSection type="primary" />
      <WhatsInsideSection />
      <ModuleBreakdownSection />
      <AboutFounderSection />
      <GuestExpertsSection />
      <TestimonialsSection type="secondary" />
      <WhoItsForSection />
      <CtaPricingSection />
      <FaqsSection />
      <Footer />
    </div>
  );
};

export default SalesPage;
