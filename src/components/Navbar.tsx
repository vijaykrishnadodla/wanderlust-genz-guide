
import React, { useState } from 'react';
import { Menu, X, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleJoinNowClick = () => {
    const offeringSection = document.getElementById('offering');
    if (offeringSection) offeringSection.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <nav className="bg-white border-b border-gray-200 py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img alt="Student Travel Buddy" src="/lovable-uploads/1bfb3ff6-11c2-429e-a525-6350583e6630.png" className="h-12 w-auto" />
          <span className="font-display text-xl">Student Travel Buddy</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#sunshine-club" className="text-gray-600 hover:text-[#F97316]">The Sunshine Club</a>
          <a href="#offering" className="text-gray-600 hover:text-[#F97316]">Membership</a>
          <a href="#quiz" className="text-gray-600 hover:text-[#F97316]">Savings Quiz</a>
          <Button className="stb-button" onClick={handleJoinNowClick}>
            <Users className="mr-1 h-4 w-4" /> Join Now
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full left-0 py-4 px-4 border-b border-gray-200">
          <div className="flex flex-col space-y-4">
            <a href="#sunshine-club" className="text-gray-600 hover:text-[#F97316] px-4 py-2" onClick={() => setIsMenuOpen(false)}>
              The Sunshine Club
            </a>
            <a href="#offering" className="text-gray-600 hover:text-[#F97316] px-4 py-2" onClick={() => setIsMenuOpen(false)}>
              Membership
            </a>
            <a href="#quiz" className="text-gray-600 hover:text-[#F97316] px-4 py-2" onClick={() => setIsMenuOpen(false)}>
              Savings Quiz
            </a>
            <Button className="stb-button w-full" onClick={() => {
              setIsMenuOpen(false);
              handleJoinNowClick();
            }}>
              <Users className="mr-1 h-4 w-4" /> Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
