
import React from 'react';

const WhoItsForSection = () => {
  const idealFor = [
    "You're a current student who's eager to make the most of your travel opportunities while in school",
    "You value authentic experiences over just checking tourist attractions off a list",
    "You want to travel on a budget, but not sacrifice the quality of your experiences",
    "You're willing to step outside your comfort zone and connect with new people and cultures",
    "You're looking for a supportive community of like-minded student travelers",
    "You're ready to take action and transform how you experience the world as a student"
  ];

  return (
    <section className="py-16 bg-white relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display inline-block bg-[#FEC6A1] px-6 py-2 rounded-lg transform rotate-1">
              THIS IS DEFINITELY FOR YOU, IF:
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {idealFor.map((item, index) => (
              <div key={index} className="bg-[#FEF7CD]/30 p-5 rounded-lg border border-[#FEC6A1]/30 transform hover:-translate-y-1 transition-transform">
                <div className="flex items-start gap-3">
                  <div className="bg-[#F97316] text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span>✓</span>
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
