import React from 'react';
import { Rocket, Users, Globe, GraduationCap } from 'lucide-react';
const SunshineClub = () => {
  return <section id="sunshine-club" className="py-16 relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display inline-block bg-[#FEC6A1] px-6 py-2 rounded-lg transform rotate-1">
            UNLOCK LIMITLESS STUDENT TRAVEL
          </h2>
          <p className="text-xl italic text-[#F97316] mt-4">
            "Your all-access pass to saving money, making friends, and creating unforgettable memories abroad."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ISIC Card Benefits */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#FEC6A1]/30 transform hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-[#FFD600] to-[#FF7A00] mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#F97316]">Official ISIC Card</h3>
            <p className="text-gray-700">Unlock 150,000+ student discounts worldwide on flights, hotels, tours, and more.</p>
            <a href="https://www.isic.org/" target="_blank" rel="noopener noreferrer" className="text-[#F97316] mt-3 inline-block hover:underline">
              Learn More
            </a>
          </div>
          
          {/* Community & Connections */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#FEC6A1]/30 transform hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-[#FFD600] to-[#FF7A00] mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#F97316]">Global Community</h3>
            <p className="text-gray-700">Connect with thousands of student travelers in our city-based WhatsApp groups.</p>
            <a href="#ambassadors" className="text-[#F97316] mt-3 inline-block hover:underline">
              Find Your City
            </a>
          </div>
          
          {/* Exclusive Resources */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#FEC6A1]/30 transform hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-[#FFD600] to-[#FF7A00] mx-auto mb-4">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#F97316]">Travel Hacking Toolkit</h3>
            <p className="text-gray-700">Access mini-courses, hidden gems maps, and 24/7 support to maximize your adventures.</p>
            <a href="#offering" className="text-[#F97316] mt-3 inline-block hover:underline">
              Explore Resources
            </a>
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-12 text-center">
          <Globe className="h-10 w-10 text-[#F97316] mx-auto animate-spin-slow mb-3" />
          <p className="text-lg italic font-handwritten text-[#F97316]">
            "Travel is the only thing you buy that makes you richer."
          </p>
        </div>
      </div>
    </section>;
};
export default SunshineClub;
