
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Compass, Camera, Map, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-stb-orange-DEFAULT to-black text-white py-12 relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-1 transform rotate-3">
                <Compass className="h-5 w-5 text-stb-orange-DEFAULT" />
              </div>
              <span className="font-display text-xl">STUDENT TRAVEL BUDDY</span>
            </div>
            <p className="text-white/80 font-handwritten text-lg">
              Travel smarter. Spend less. Vibe more.
            </p>
            
            <div className="mt-4">
              <div className="bg-stb-orange-dark inline-block px-5 py-2 rounded-full font-medium text-white">
                @STUDENTTRAVELBUDDYOFFICIAL
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 transform -rotate-2 inline-block bg-white/10 px-3 py-1 rounded-lg">LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors flex items-center gap-2"><Map className="h-4 w-4" /> Features</a></li>
              <li><a href="#quiz" className="text-white/80 hover:text-white transition-colors flex items-center gap-2"><Compass className="h-4 w-4" /> Quiz</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors flex items-center gap-2"><Camera className="h-4 w-4" /> About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 transform rotate-1 inline-block bg-white/10 px-3 py-1 rounded-lg">CONNECT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">TikTok</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 transform -rotate-1 inline-block bg-white/10 px-3 py-1 rounded-lg">JOIN THE BESTIE LIST</h3>
            <p className="text-white/80 mb-4 font-handwritten">Get perks, trip tips, and access to rare travel drops</p>
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-0 focus-visible:ring-2 focus-visible:ring-white text-white placeholder:text-white/50 rounded-xl" 
              />
              <Button className="bg-white hover:bg-stb-yellow-light text-stb-orange-DEFAULT font-bold rounded-xl">
                Join <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60">© 2025 Student Travel Buddy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
        
        {/* Comment prompt */}
        <div className="mt-8 text-center bg-white/10 p-4 rounded-2xl">
          <p className="font-handwritten text-xl">Comment "TRAVELBUDDY" and we'll send you our supercool travel quiz!</p>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="bg-stb-yellow-light p-2 rounded-lg text-stb-orange-DEFAULT transform rotate-6">
            <p className="font-handwritten">Summer '25 ☀️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
