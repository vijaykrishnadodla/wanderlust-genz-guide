
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Keep for logo link
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Sparkles, Users, Check, Gift } from 'lucide-react';

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

  const navItems = [
    { name: 'Travel Quiz', path: '#quiz', icon: <Check className="h-4 w-4 mr-2 text-sunny-yellow-dark" /> },
    { name: 'The Sunshine Club', path: '#sunshine-club', icon: <Sun className="h-4 w-4 mr-2 text-sunny-yellow-dark" /> },
    { name: 'Our Story', path: '#backstory', icon: <Sparkles className="h-4 w-4 mr-2 text-sunny-yellow-dark" /> },
    { name: 'Ambassadors', path: '#ambassador', icon: <Users className="h-4 w-4 mr-2 text-sunny-yellow-dark" /> }
  ];

  const commonLinkClasses = "px-3 py-2 text-sunny-orange-dark hover:text-sunny-orange-DEFAULT font-medium transition-colors rounded-lg hover:bg-sunny-yellow-pale";
  const mobileLinkClasses = "px-3 py-2.5 text-sunny-orange-dark hover:bg-sunny-yellow-pale rounded-xl flex items-center";

  return <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="inner">
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
            {navItems.map((item) => (
              <a // Changed from Link to a
                key={item.name}
                href={item.path} // Changed from to to href
                className={commonLinkClasses}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop buttons: Join Now */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Sign In Button Removed */}
            <Button className="bg-sunny-gradient text-white rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Sparkles className="mr-1 h-4 w-4" /> Join Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-sunny-orange-dark hover:text-sunny-orange rounded-full hover:bg-sunny-yellow-pale transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t border-sunny-yellow-light/30 shadow-md animate-accordion-down">
          <div className="inner py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a // Changed from Link to a
                  key={item.name}
                  href={item.path} // Changed from to to href
                  className={mobileLinkClasses}
                  onClick={() => setIsMenuOpen(false)} // Keep this to close menu on click
                >
                  {React.cloneElement(item.icon, { className: "h-4 w-4 mr-2 text-sunny-yellow-dark"})}
                  {item.name}
                </a>
              ))}
              <div className="pt-3 flex flex-col space-y-2 border-t border-sunny-yellow-light/30 mt-2">
                {/* Sign In Button Removed */}
                <Button className="w-full justify-center bg-sunny-gradient text-white rounded-full shadow-sm hover:shadow-md">
                  <Sparkles className="mr-1 h-4 w-4" /> Join Now
                </Button>
              </div>
            </nav>
          </div>
        </div>}
    </header>;
};

export default Navbar;
