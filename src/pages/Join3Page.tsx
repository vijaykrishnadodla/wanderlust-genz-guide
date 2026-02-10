import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Join3HeroSection from '@/components/join3/Join3HeroSection';
import Join3ProblemSection from '@/components/join3/Join3ProblemSection';
import Join3SolutionSection from '@/components/join3/Join3SolutionSection';
import Join3TestimonialsSection from '@/components/join3/Join3TestimonialsSection';
import Join3FaqSection from '@/components/join3/Join3FaqSection';
import Join3FinalCtaSection from '@/components/join3/Join3FinalCtaSection';
import StickyCtaBar from '@/components/join/StickyCtaBar';

const Join3Page = () => {
  return (
    <>
      <Navbar />
      <StickyCtaBar />
      <main>
        <Join3HeroSection />
        <Join3ProblemSection />
        <Join3SolutionSection />
        <Join3TestimonialsSection />
        <Join3FaqSection />
        <Join3FinalCtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Join3Page;
