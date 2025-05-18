import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom Link is used for SPA, not <a> for page reloads
import { Button } from '@/components/ui/button';
import { Menu, X, Sun } from 'lucide-react';
// SunnyMascot import removed as it's not used here

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Travel Quiz', href: '#quiz' },
  { name: 'Sunshine Club', href: '#membership' },
  { name: 'Our Story', href: '#story' },
  { name: 'Ambassadors', href: '#ambassadors' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // isScrolled state might not be needed if background is always cream/90
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const id = targetId.substring(1); // Remove '#'
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-lg shadow-sm ring-1 ring-black/5">
      {/* Changed max-w-screen-xl to w-full, inner div will handle max-width */}
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Kept mx-auto here for centering navbar content */}
        <div className="flex items-center justify-between h-16">
          {/* Updated Link to use handleScrollTo for smooth scrolling */}
          <a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')} className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <img src="/lovable-uploads/9238c9a8-0093-446f-a9f2-d0a191f3c306.png" alt="Student Travel Buddy Logo" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-sunny-gradient rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></div>
            </div>
            <span className="font-display text-xl font-bold text-sunny-orange hidden sm:block">STUDENT TRAVEL BUDDY</span>
            <span className="font-display text-xl font-bold text-sunny-orange sm:hidden">STB</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((item) => (
              <a // Changed from Link to <a> for scroll behavior
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="px-3 py-2 text-sunny-orange-dark hover:text-sunny-orange-DEFAULT font-medium transition-colors rounded-lg hover:bg-sunny-yellow-pale"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            {/* Updated Button asChild to use custom scroll for <a> tag */}
            <Button asChild className="bg-sunny-gradient text-white rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <a href="#membership" onClick={(e) => handleScrollTo(e, '#membership')}>
                <Sun className="mr-1 h-4 w-4" /> Join Now
              </a>
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
          <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4"> {/* Kept mx-auto here */}
            <nav className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <a // Changed from Link to <a> for scroll behavior
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="px-3 py-2.5 text-sunny-orange-dark hover:bg-sunny-yellow-pale rounded-xl flex items-center"
                >
                  {/* Icons can be added back if needed based on item.name */}
                  {item.name}
                </a>
              ))}
              {/* Removed border-t from here */}
              <div className="pt-3 flex flex-col space-y-2 mt-2"> 
                <Button asChild className="w-full justify-center bg-sunny-gradient text-white rounded-full shadow-sm hover:shadow-md">
                  <a href="#membership" onClick={(e) => handleScrollTo(e, '#membership')}>
                    <Sun className="mr-1 h-4 w-4" /> Join Now
                  </a>
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
