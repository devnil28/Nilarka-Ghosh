
import React from 'react';

const LocationContact: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="font-syncopate text-4xl font-bold">VISIT <span className="text-red-600">IRON MIND</span></h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-red-600">📍</span>
                <div>
                  <h4 className="font-bold">LOCATION</h4>
                  <p className="text-gray-400">Kalyani, City Center Area, West Bengal, India</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-red-600">📞</span>
                <div>
                  <h4 className="font-bold">CALL US</h4>
                  <p className="text-gray-400">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-red-600">✉️</span>
                <div>
                  <h4 className="font-bold">EMAIL</h4>
                  <p className="text-gray-400">hq@ironmind.fit</p>
                </div>
              </div>
            </div>

            <form className="space-y-4 pt-4">
              <input type="text" placeholder="Your Name" className="w-full bg-black border border-white/10 rounded-lg p-4 focus:outline-none focus:border-red-600" />
              <input type="email" placeholder="Email Address" className="w-full bg-black border border-white/10 rounded-lg p-4 focus:outline-none focus:border-red-600" />
              <textarea placeholder="Message" rows={4} className="w-full bg-black border border-white/10 rounded-lg p-4 focus:outline-none focus:border-red-600"></textarea>
              <button className="w-full bg-red-600 py-4 font-bold rounded-lg hover:bg-red-700 transition-colors uppercase tracking-widest">Send Signal</button>
            </form>
          </div>

          <div className="h-[500px] rounded-2xl overflow-hidden border border-white/10 relative">
            {/* Using a placeholder for Google Maps embed logic as requested */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14686.046554784656!2d88.4357738!3d22.9863414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89498a44b9319%3A0x6b47c430e3713d80!2sKalyani%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
