import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Sparkles } from 'lucide-react';
import SunnyMascot from './SunnyMascot';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-lg shadow-sm ring-1 ring-black/5">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <img src="/lovable-uploads/9238c9a8-0093-446f-a9f2-d0a191f3c306.png" alt="Student Travel Buddy Logo" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-sunny-gradient rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></div>
            </div>
            <span className="font-display text-xl font-bold text-sunny-orange hidden sm:block">STUDENT TRAVEL BUDDY</span>
            <span className="font-display text-xl font-bold text-sunny-orange sm:hidden">STB</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {['Travel Quiz', 'Sunshine Club', 'Our Story', 'Ambassadors'].map((item, index) => (
              <Link
                key={index}
                to={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-2 text-sunny-orange-dark hover:text-sunny-orange-DEFAULT font-medium transition-colors rounded-lg hover:bg-sunny-yellow-pale"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button asChild className="bg-sunny-gradient text-white rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Link to="#membership">
                <Sun className="mr-1 h-4 w-4" /> Join Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-sunny-orange-dark hover:text-sunny-orange rounded-full hover:bg-sunny-yellow-pale transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream/90 backdrop-blur-lg border-t border-black/5">
          <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex flex-col space-y-2">
              {['Travel Quiz', 'Sunshine Club', 'Our Story', 'Ambassadors'].map((item, index) => (
                <Link
                  key={index}
                  to={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 py-2.5 text-sunny-orange-dark hover:bg-sunny-yellow-pale rounded-xl flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item === 'Home' && <Sun className="h-4 w-4 mr-2 text-sunny-yellow-dark" />}
                  {item === 'Sales Page' && <Sparkles className="h-4 w-4 mr-2 text-sunny-yellow-dark" />}
                  {item}
                </Link>
              ))}
              <div className="pt-3 flex flex-col space-y-2 border-t border-sunny-yellow-light/30 mt-2">
                <Button asChild className="w-full justify-center bg-sunny-gradient text-white rounded-full shadow-sm hover:shadow-md">
                  <Link to="#membership">
                    <Sun className="mr-1 h-4 w-4" /> Join Now
                  </Link>
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
