
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FunnelLandingPage = () => {
  return (
    <div className="stb-page-container min-h-screen">
      <Navbar />

      <div className="relative py-24">
        {/* Main funnel content */}
        <div className="container px-4 bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg max-w-4xl mx-auto border-2 border-[#FFD600]/30">
          <h1 className="text-4xl md:text-6xl font-display mb-6 text-sunny-orange">
            BECOME A SUNSHINE TRAVELER
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-12">
            Join thousands of student travelers who explore the world with confidence and savings!
          </p>
          
          {/* Placeholder for funnel content - this can be expanded later */}
          <div className="sunny-card max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
            <p>Our exclusive funnel experience will be available shortly.</p>
            <p className="font-handwritten text-sunny-orange text-xl mt-4">Stay sunny! ☀️</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FunnelLandingPage;
