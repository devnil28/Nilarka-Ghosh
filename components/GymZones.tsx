
import React from 'react';
import { SECTIONS } from '../constants';

const GymZones: React.FC = () => {
  return (
    <section id="sections" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-syncopate text-4xl font-bold mb-4">TRAINING <span className="text-red-600">ZONES</span></h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SECTIONS.map((section) => (
            <div key={section.id} className="group relative overflow-hidden rounded-2xl glass-card h-[400px]">
              <img 
                src={section.image} 
                alt={section.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-4xl mb-4 block">{section.icon}</span>
                <h3 className="font-syncopate text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GymZones;
