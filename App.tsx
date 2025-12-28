
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import GymZones from './components/GymZones';
import Trainers from './components/Trainers';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import IronAI from './components/IronAI';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <GymZones />
        
        {/* Why Choose Section (Inline for simplicity) */}
        <section className="py-24 bg-red-600 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-24 opacity-10 font-syncopate text-9xl font-bold select-none -rotate-12">
            STRENGTH
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="font-syncopate text-6xl font-bold mb-2">24/7</h3>
                <p className="uppercase tracking-widest font-bold">Biometric Access</p>
              </div>
              <div>
                <h3 className="font-syncopate text-6xl font-bold mb-2">50+</h3>
                <p className="uppercase tracking-widest font-bold">Pro Machines</p>
              </div>
              <div>
                <h3 className="font-syncopate text-6xl font-bold mb-2">0%</h3>
                <p className="uppercase tracking-widest font-bold">Excuses Allowed</p>
              </div>
            </div>
          </div>
        </section>

        <Trainers />
        <LocationContact />
      </main>
      <Footer />
      <IronAI />
    </div>
  );
};

export default App;
