
import React from 'react';
// Removed Link and Button imports as they are not used in the new simple navbar
// Removed Menu, X, Sun icons as they are not used

// navLinks array is removed as it's not used in the new simple navbar
// useState and useEffect for menu and scroll behavior are removed

const Navbar = () => {
  // handleScrollTo function is removed as simple anchor links will be used

  return (
    <header className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-lg shadow-sm ring-1 ring-black/5">
      <nav className="inner flex items-center justify-between py-2">
        <a href="#hero" className="font-bold">@STUDENTTRAVELBUDDYOFFICIAL</a>
        <ul className="hidden lg:flex gap-6 text-sm font-medium">
          <li><a href="#quiz" className="hover:text-hyper transition-colors">Travel Quiz</a></li>
          <li><a href="#membership" className="hover:text-hyper transition-colors">Sunshine Club</a></li>
          <li><a href="#story" className="hover:text-hyper transition-colors">Our Story</a></li>
          <li><a href="#ambassadors" className="hover:text-hyper transition-colors">Ambassadors</a></li>
        </ul>
        <a href="#membership" className="ml-auto lg:ml-0 bg-hyper text-white rounded-full px-5 py-2 text-sm font-semibold shadow hover:opacity-90 transition-opacity">
          ☀ Join Now
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
