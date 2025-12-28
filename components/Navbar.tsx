
import React, { useState, useEffect } from 'react';
import { LOGO_SVG } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-red-600">
            {LOGO_SVG}
          </div>
          <span className="font-syncopate font-bold text-xl tracking-tighter">
            IRON<span className="text-red-600">MIND</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-widest uppercase">
          <a href="#about" className="hover:text-red-600 transition-colors">About</a>
          <a href="#sections" className="hover:text-red-600 transition-colors">Zones</a>
          <a href="#trainers" className="hover:text-red-600 transition-colors">Trainers</a>
          <a href="#location" className="hover:text-red-600 transition-colors">Contact</a>
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold text-sm tracking-wide transition-all glow-red">
          JOIN NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
