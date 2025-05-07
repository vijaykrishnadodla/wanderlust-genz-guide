
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun } from 'lucide-react';
import SunnyMascot from './SunnyMascot';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <SunnyMascot size="sm" />
            <span className="font-display text-xl font-bold">SUNSHINE CLUB</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-[#fdad32] font-medium transition-colors">
              Home
            </Link>
            <Link to="/sales" className="text-gray-700 hover:text-[#fdad32] font-medium transition-colors">
              Sales Page
            </Link>
            <Link to="/funnel" className="text-gray-700 hover:text-[#fdad32] font-medium transition-colors">
              Funnel
            </Link>
            <Link to="#offering" className="text-gray-700 hover:text-[#fdad32] font-medium transition-colors">
              Memberships
            </Link>
            <Link to="#quiz" className="text-gray-700 hover:text-[#fdad32] font-medium transition-colors">
              Quiz
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="rounded-full border-[#fdad32] text-[#fdad32] hover:bg-[#fdad32]/10"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] text-white rounded-full hover:brightness-105">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="container px-4 py-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/sales" 
                className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Sales Page
              </Link>
              <Link 
                to="/funnel" 
                className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Funnel
              </Link>
              <Link 
                to="#offering" 
                className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Memberships
              </Link>
              <Link 
                to="#quiz" 
                className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Quiz
              </Link>
              <div className="pt-2 flex flex-col space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-center rounded-full border-[#fdad32] text-[#fdad32] hover:bg-[#fdad32]/10"
                >
                  Sign In
                </Button>
                <Button className="w-full justify-center bg-gradient-to-r from-[#fdad32] to-[#fe4c02] text-white rounded-full hover:brightness-105">
                  Join Now
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
