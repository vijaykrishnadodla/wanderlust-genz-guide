
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SunshineClub />
      <Offering />
      <TravelQuiz />
      <Testimonials />
      <Features />
      <BackStory />
      <HowStarted />
      <Ambassador />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Index;
