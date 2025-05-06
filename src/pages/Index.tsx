
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Quiz from '@/components/Quiz';
import Offering from '@/components/Offering';
import Ambassadors from '@/components/Ambassadors';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Quiz />
      <Offering />
      <Ambassadors />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
