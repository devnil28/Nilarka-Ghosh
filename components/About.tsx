
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-red-600/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1200" 
              alt="Gym Interior" 
              className="relative rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 p-8 rounded-2xl hidden md:block">
              <span className="font-syncopate text-3xl font-bold">100%</span><br />
              <span className="text-sm uppercase tracking-widest">Digital Precision</span>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="font-syncopate text-3xl md:text-5xl font-bold leading-tight">
              MIND + MUSCLE + <br />
              <span className="text-red-600">DISCIPLINE</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Iron Mind isn't just a gym; it's a high-performance lab located in the heart of Kalyani. 
              We blend state-of-the-art European machinery with a disciplined approach to mental fortitude. 
              Whether you're stepping onto the mat for the first time or prepping for a pro-level competition, 
              our environment is built to sustain your progress.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="border-l-2 border-red-600 pl-4">
                <h4 className="font-bold text-white uppercase tracking-wider mb-2">Elite Gear</h4>
                <p className="text-xs text-gray-500">Smart sensors & AI trackers on every machine.</p>
              </div>
              <div className="border-l-2 border-red-600 pl-4">
                <h4 className="font-bold text-white uppercase tracking-wider mb-2">Beginner Safe</h4>
                <p className="text-xs text-gray-500">Structured onboarding for every new member.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
