
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AmbassadorApplicationForm from '@/components/AmbassadorApplicationForm';
import WaveDivider from '@/components/WaveDivider'; // Optional, for consistency

const AmbassadorApplicationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        <AmbassadorApplicationForm />
      </main>
      <WaveDivider />
      <Footer />
    </div>
  );
};

export default AmbassadorApplicationPage;
