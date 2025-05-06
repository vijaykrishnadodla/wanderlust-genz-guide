
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/9aa14dc9-3d1b-4cd1-9028-93d4a960f2b2.png" 
            alt="Student Travel Buddy" 
            className="h-10 w-auto"
          />
          <span className="font-display text-xl">Student Travel Buddy</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-[#F97316]">Home</Link>
          <Link to="/sales" className="text-gray-600 hover:text-[#F97316]">The Sunshine Club</Link>
          <Button className="stb-button">Join Now</Button>
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full left-0 py-4 px-4 border-b border-gray-200">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/"
              className="text-gray-600 hover:text-[#F97316] px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/sales"
              className="text-gray-600 hover:text-[#F97316] px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              The Sunshine Club
            </Link>
            <Button className="stb-button w-full">Join Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
