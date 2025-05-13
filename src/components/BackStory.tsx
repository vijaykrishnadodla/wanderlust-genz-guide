
import React from 'react';
import { BookOpen } from 'lucide-react';

const BackStory = () => {
  return <section id="our-story" className="py-16 bg-gradient-to-b from-white to-[#FEF7CD]/40 relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display inline-block bg-[#FEC6A1] px-6 py-2 rounded-lg transform rotate-1">
              OUR STORY
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              {/* Polaroid wrapper with relative positioning */}
              <div className="relative w-full h-full">
                {/* The polaroid image with all flags at top and bottom only */}
                <div className="polaroid transform rotate-3 z-10 relative">
                  {/* Top edge flags - including some that were previously on sides */}
                  <div className="absolute top-0 w-full flex justify-evenly flex-wrap" style={{
                  transform: 'translateY(-50%)'
                }}>
                    <span className="rotate-[-25deg] text-lg">🇦🇺</span>
                    <span className="rotate-[-15deg] text-lg">🇳🇴</span>
                    <span className="rotate-[-5deg] text-lg">🇸🇰</span>
                    <span className="rotate-[0deg] text-lg">🇩🇰</span>
                    <span className="rotate-[5deg] text-lg">🇸🇪</span>
                    <span className="rotate-[15deg] text-lg">🇫🇷</span>
                    <span className="rotate-[0deg] text-lg">🇩🇪</span>
                    <span className="rotate-[-5deg] text-lg">🇮🇹</span>
                    <span className="rotate-[-15deg] text-lg">🇪🇸</span>
                    <span className="rotate-[-25deg] text-lg">🇬🇷</span>
                    <span className="rotate-[10deg] text-lg">🇨🇿</span>
                    <span className="rotate-[0deg] text-lg">🇭🇷</span>
                    <span className="rotate-[-10deg] text-lg">🇵🇱</span>
                    <span className="rotate-[15deg] text-lg">🇬🇧</span>
                  </div>
                  
                  {/* Bottom edge flags - including some that were previously on sides */}
                  <div className="absolute bottom-0 w-full flex justify-evenly flex-wrap" style={{
                  transform: 'translateY(50%)'
                }}>
                    <span className="rotate-[25deg] text-lg">🇿🇦</span>
                    <span className="rotate-[15deg] text-lg">🇦🇪</span>
                    <span className="rotate-[5deg] text-lg">🇪🇬</span>
                    <span className="rotate-[0deg] text-lg">🇮🇸</span>
                    <span className="rotate-[-5deg] text-lg">🇨🇾</span>
                    <span className="rotate-[-15deg] text-lg">🇱🇰</span>
                    <span className="rotate-[0deg] text-lg">🇦🇹</span>
                    <span className="rotate-[5deg] text-lg">🇦🇼</span>
                    <span className="rotate-[15deg] text-lg">🇨🇼</span>
                    <span className="rotate-[25deg] text-lg">🇸🇮</span>
                    <span className="rotate-[0deg] text-lg">🇺🇸</span>
                    <span className="rotate-[-10deg] text-lg">🇮🇳</span>
                    <span className="rotate-[10deg] text-lg">🇮🇩</span>
                    <span className="rotate-[0deg] text-lg">🇹🇭</span>
                    <span className="rotate-[-5deg] text-lg">🇰🇭</span>
                    <span className="rotate-[5deg] text-lg">🇹🇿</span>
                  </div>
                  
                  <img alt="Dominika traveling" className="w-full h-auto object-cover retro-filter" src="/lovable-uploads/c38cdfa9-d9f7-4717-89e4-6cce94569408.jpg" />
                  <p className="text-center font-handwritten mt-2">Exploring new horizons!</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-display text-[#F97316]">HEY THERE, I AM DOMINIKA!</h3>
              
              <div className="bg-[#FDE1D3]/40 p-4 rounded-lg mb-4">
                <p className="font-medium text-[#F97316]">Ever felt lost while planning trips? Confused by endless options? Unsure if you're getting ripped off? Or just lonely figuring it all out?</p>
              </div>
              
              <p className="text-lg">
                I didn't just grow up traveling — I grew up learning how to <span className="text-[#F97316] font-medium">live anywhere</span>. From exploring Australia at 15 to studying in the U.S. and Norway, travel became part of who I am.
              </p>
              
              <p className="font-handwritten text-xl text-[#F97316]">
                "I've now visited more than 30 countries — from Iceland to India, South Africa to Sri Lanka."
              </p>
              
              <p className="text-lg">
                But I never traveled just for the photos. I traveled to learn how to live smarter, discover new perspectives, and find the <span className="font-bold">authentic moments most tourists miss</span>. And now, I pass that knowledge on to you.
              </p>
              
              <div className="bg-[#FEF7CD]/40 p-3 rounded-lg mt-2 transform -rotate-1">
                <p className="font-handwritten text-center text-[#F97316] text-3xl">
                  Most students don't need more travel blogs. They need a friend who gets it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default BackStory;
