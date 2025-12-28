
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-110"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2000')`,
          transform: `translateY(${offsetY * 0.4}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="font-syncopate text-5xl md:text-8xl font-bold mb-6 leading-tight tracking-tighter animate-pulse">
          BUILD <span className="text-red-600">STRENGTH.</span><br />
          TRAIN YOUR <span className="text-glow">MIND.</span><br />
          BECOME IRON.
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-10 font-light tracking-wide">
          Experience Kalyani's premier tech-driven fitness studio. Where elite performance meets beginner-friendly discipline.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg tracking-widest transition-all glow-red">
            BOOK FREE TRIAL
          </button>
          <button className="border border-white/20 hover:border-white text-white px-10 py-4 rounded-lg font-bold text-lg tracking-widest transition-all backdrop-blur-sm">
            EXPLORE GYM
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs uppercase tracking-[0.3em] mb-2 opacity-50">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-red-600 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
