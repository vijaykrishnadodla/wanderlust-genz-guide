
import React from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md film-grain">
      <div className="container flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2">
          <div className="bg-[#FEC6A1]/70 p-1 rounded-lg transform rotate-2">
            <img 
              src="/lovable-uploads/c197ba54-f28d-4bfd-a89c-27c8d21e11c0.png" 
              alt="Student Travel Buddy Logo" 
              className="h-9 w-9"
            />
          </div>
          <span className="font-display text-xl">STUDENT TRAVEL BUDDY</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="font-medium hover:text-[#F97316] transform hover:scale-105 transition-transform">Features</a>
          <a href="#quiz" className="font-medium hover:text-[#F97316] transform hover:scale-105 transition-transform">Quiz</a>
          <a href="#about" className="font-medium hover:text-[#F97316] transform hover:scale-105 transition-transform">About</a>
          <Button className="bg-[#FEC6A1] hover:bg-[#F97316] text-black font-bold rounded-full px-6 py-2 transform rotate-1 flex items-center gap-2">
            <Camera className="h-4 w-4" /> Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden p-2 bg-[#FEF7CD] rounded-lg">
          {isMenuOpen ? <X className="text-[#F97316]" /> : <Menu className="text-[#F97316]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg border-t border-[#FEC6A1]/30">
          <div className="flex flex-col gap-4">
            <a href="#features" className="font-medium hover:text-[#F97316] py-2 transform hover:translate-x-2 transition-transform" onClick={toggleMenu}>Features</a>
            <a href="#quiz" className="font-medium hover:text-[#F97316] py-2 transform hover:translate-x-2 transition-transform" onClick={toggleMenu}>Quiz</a>
            <a href="#about" className="font-medium hover:text-[#F97316] py-2 transform hover:translate-x-2 transition-transform" onClick={toggleMenu}>About</a>
            <Button className="bg-[#FEC6A1] hover:bg-[#F97316] text-black font-bold w-full rounded-full flex items-center justify-center gap-2">
              <Camera className="h-4 w-4" /> Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
