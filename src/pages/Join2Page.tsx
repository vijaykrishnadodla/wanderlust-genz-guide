import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Join2HeroSection from '@/components/join2/Join2HeroSection';
import Join2ProblemSection from '@/components/join2/Join2ProblemSection';
import Join2SolutionSection from '@/components/join2/Join2SolutionSection';
import Join2SocialProofSection from '@/components/join2/Join2SocialProofSection';
import Join2FaqSection from '@/components/join2/Join2FaqSection';
import Join2FinalCtaSection from '@/components/join2/Join2FinalCtaSection';
import StickyCtaBar from '@/components/join/StickyCtaBar';

const Join2Page = () => {
  return (
    <>
      <Navbar />
      <StickyCtaBar />
      <main>
        <Join2HeroSection />
        <Join2ProblemSection />
        <Join2SolutionSection />
        <Join2SocialProofSection />
        <Join2FaqSection />
        <Join2FinalCtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Join2Page;
