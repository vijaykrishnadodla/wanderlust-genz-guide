
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FunnelLandingPage = () => {
  return (
    <div className="stb-page-container min-h-screen">
      <Navbar />

      {/* Clean minimal film grain texture */}
      <div className="stb-film-grain">
        <div className="relative">
          {/* Main funnel content */}
          <div className="relative py-24">
            <div className="container px-4">
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
      </div>
    </div>
  );
};

export default FunnelLandingPage;
