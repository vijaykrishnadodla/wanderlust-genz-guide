import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JoinHeroSection from '@/components/join/JoinHeroSection';
import JoinProblemSection from '@/components/join/JoinProblemSection';
import JoinSolutionSection from '@/components/join/JoinSolutionSection';
import JoinSocialProofSection from '@/components/join/JoinSocialProofSection';
import JoinFaqSection from '@/components/join/JoinFaqSection';
import JoinFinalCtaSection from '@/components/join/JoinFinalCtaSection';
import JoinMeetTheTeamSection from '@/components/join/JoinMeetTheTeamSection';
import StickyCtaBar from '@/components/join/StickyCtaBar';

const JoinPage = () => {
  return (
    <>
      <Navbar />
      <StickyCtaBar />
      <main>
        <JoinHeroSection />
        <div className="bg-white/50">
          <JoinProblemSection />
        </div>
        <JoinSolutionSection />
        <div className="bg-white/50">
          <JoinSocialProofSection />
        </div>
        <JoinMeetTheTeamSection />
        <div className="bg-primary/5">
          <JoinFaqSection />
        </div>
        <JoinFinalCtaSection />
      </main>
      <Footer />
    </>
  );
};

export default JoinPage;
