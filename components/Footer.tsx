
import React from 'react';
import { LOGO_SVG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 text-red-600">
              {LOGO_SVG}
              <span className="font-syncopate font-bold text-2xl tracking-tighter text-white">
                IRON<span className="text-red-600">MIND</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm italic">"Build Strength. Train Your Mind. Become Iron."</p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">FB</a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">IG</a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">TW</a>
          </div>

          <div className="text-gray-500 text-xs text-center md:text-right">
            <p>© 2024 Iron Mind Fitness. All rights reserved.</p>
            <p>Designed for the Elite Athletes of West Bengal.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
