
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Compass } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-1">
                <Compass className="h-5 w-5 text-black" />
              </div>
              <span className="font-display text-xl">STUDENT TRAVEL BUDDY</span>
            </div>
            <p className="text-gray-400">
              Travel smarter. Spend less. Vibe more.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#quiz" className="text-gray-400 hover:text-white transition-colors">Quiz</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">CONNECT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">TikTok</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">JOIN THE BESTIE LIST</h3>
            <p className="text-gray-400 mb-4">Get perks, trip tips, and access to rare travel drops</p>
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-0 focus-visible:ring-2 focus-visible:ring-stb-yellow" 
              />
              <Button className="bg-stb-yellow hover:bg-stb-yellow-dark text-black">Join</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 Student Travel Buddy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
