
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Compass, Sun, MapPin, ArrowRight, Sparkles, Star, Heart } from 'lucide-react';
import SunnyMascot from './SunnyMascot';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12 bg-gradient-to-br from-[#1A1F2C]/90 to-[#221F26] text-white">
      {/* Grain texture overlay */}
      <div className="absolute inset-0 bg-film-grain opacity-20 mix-blend-overlay"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="inner relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <SunnyMascot size="sm" />
              <span className="font-display text-xl">STUDENT TRAVEL BUDDY</span>
            </div>
            <p className="text-white font-handwritten text-xl">
              Travel brighter. Spend smarter.
            </p>
            
            <div className="mt-4">
              <div className="bg-white/20 inline-block px-5 py-2 rounded-full font-medium text-white backdrop-blur-sm">
                @STUDENTTRAVELBUDDYOFFICIAL
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 transform -rotate-2 inline-block bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">
              EXPLORE
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Travel Styles', icon: <Compass className="h-4 w-4" /> },
                { name: 'City Guides', icon: <MapPin className="h-4 w-4" /> },
                { name: 'About Us', icon: <Sun className="h-4 w-4" /> }
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white hover:text-sunny-yellow transition-colors flex items-center gap-2 group">
                    <span className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                      {item.icon}
                    </span> 
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 transform rotate-1 inline-block bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">
              CONNECT
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Instagram', emoji: '📸' },
                { name: 'TikTok', emoji: '🎵' },
                { name: 'Discord', emoji: '💬' }
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white hover:text-sunny-yellow transition-colors flex items-center gap-2 group">
                    <span className="bg-white/10 w-7 h-7 flex items-center justify-center rounded-full group-hover:bg-white/20 transition-colors">
                      {item.emoji}
                    </span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 transform -rotate-1 inline-block bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">
              SUNSHINE CLUB
            </h3>
            <p className="text-white mb-4 font-handwritten text-lg">Get exclusive travel drops and tips!</p>
            <form className="flex flex-col gap-3">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/20 border-0 focus-visible:ring-2 focus-visible:ring-white text-white placeholder:text-white/60 rounded-xl backdrop-blur-sm" 
              />
              <Button className="bg-sunny-yellow hover:bg-sunny-yellow-light text-sunny-orange-dark font-bold rounded-xl flex items-center gap-2 group">
                Join Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white">© 2025 Student Travel Buddy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-sunny-yellow transition-colors">Terms</a>
            <a href="#" className="text-white hover:text-sunny-yellow transition-colors">Privacy</a>
          </div>
        </div>
        
        {/* Interactive comment prompt */}
        <div className="mt-8 text-center p-5 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 sunny-dot-pattern opacity-5"></div>
          <div className="relative z-10">
            <p className="font-handwritten text-2xl mb-2">Drop a "☀️" in the comments</p>
            <p className="text-white">...and unlock our secret travel hack guide!</p>
            
            <div className="mt-3 flex justify-center gap-2">
              <Sparkles className="h-5 w-5 sunny-pulse" />
              <Star className="h-5 w-5 sunny-pulse" style={{ animationDelay: "0.3s" }} />
              <Heart className="h-5 w-5 sunny-pulse" style={{ animationDelay: "0.6s" }} />
            </div>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-10 right-10 hidden lg:block sunny-bounce">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl text-white transform rotate-6 border border-white/10">
            <p className="font-handwritten text-lg">Summer '25 ☀️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
