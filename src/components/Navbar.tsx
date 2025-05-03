
import React from 'react';
import { Compass, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2">
          <div className="bg-black rounded-full p-2">
            <Compass className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-xl">STUDENT TRAVEL BUDDY</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="font-medium hover:text-stb-pink">Features</a>
          <a href="#quiz" className="font-medium hover:text-stb-pink">Quiz</a>
          <a href="#about" className="font-medium hover:text-stb-pink">About</a>
          <Button className="stb-button">Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col gap-4">
            <a href="#features" className="font-medium hover:text-stb-pink py-2" onClick={toggleMenu}>Features</a>
            <a href="#quiz" className="font-medium hover:text-stb-pink py-2" onClick={toggleMenu}>Quiz</a>
            <a href="#about" className="font-medium hover:text-stb-pink py-2" onClick={toggleMenu}>About</a>
            <Button className="stb-button w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
