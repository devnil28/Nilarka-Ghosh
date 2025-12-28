
import React from 'react';
import { TRAINERS } from '../constants';

const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-syncopate text-4xl font-bold mb-4">OUR <span className="text-red-600">COMMANDERS</span></h2>
            <p className="text-gray-400">World-class experts with a shared goal: your ultimate evolution.</p>
          </div>
          <button className="text-red-600 font-bold uppercase tracking-widest text-sm hover:underline">
            View All Staff
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TRAINERS.map((trainer) => (
            <div key={trainer.id} className="group text-center">
              <div className="relative mb-6 mx-auto w-64 h-64 overflow-hidden rounded-full border-4 border-zinc-800 group-hover:border-red-600 transition-all duration-500">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-syncopate text-xl font-bold mb-1">{trainer.name}</h3>
              <p className="text-red-500 text-sm font-bold uppercase tracking-widest mb-2">{trainer.specialty}</p>
              <p className="text-gray-500 text-xs italic">Experience: {trainer.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
