
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BackStory from '@/components/BackStory';
import HowStarted from '@/components/HowStarted';
import SunshineClub from '@/components/SunshineClub';
import Offering from '@/components/Offering';
import Quiz from '@/components/Quiz';
import Testimonials from '@/components/Testimonials';
import SignUp from '@/components/SignUp';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BackStory />
      <HowStarted />
      <SunshineClub />
      <Offering />
      <Quiz />
      <Testimonials />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Index;
