
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import MiniSignUpForm from './MiniSignUpForm';

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
        <div className="hidden lg:flex items-center gap-6">
          <a href="#backstory" className="font-medium hover:text-[#F97316] transform hover:scale-105 transition-transform">Story</a>
          <a href="#sunshine-club" className="font-medium hover:text-[#F97316] transform hover:scale-105 transition-transform">Sunshine Club</a>
          <a href="#offering" className="font-medium hover:text-[#F97316] transform hover:scale-105 transition-transform">Membership</a>
          <a href="#testimonials" className="font-medium hover:text-[#F97316] transform hover:scale-105 transition-transform">Reviews</a>
        </div>

        {/* Mini Signup Form - Desktop */}
        <div className="hidden md:block">
          <MiniSignUpForm />
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
            <a href="#backstory" className="font-medium hover:text-[#F97316] py-2 transform hover:translate-x-2 transition-transform" onClick={toggleMenu}>Story</a>
            <a href="#sunshine-club" className="font-medium hover:text-[#F97316] py-2 transform hover:translate-x-2 transition-transform" onClick={toggleMenu}>Sunshine Club</a>
            <a href="#offering" className="font-medium hover:text-[#F97316] py-2 transform hover:translate-x-2 transition-transform" onClick={toggleMenu}>Membership</a>
            <a href="#testimonials" className="font-medium hover:text-[#F97316] py-2 transform hover:translate-x-2 transition-transform" onClick={toggleMenu}>Reviews</a>
            
            {/* Mini Signup Form - Mobile */}
            <div className="pt-4">
              <MiniSignUpForm />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
