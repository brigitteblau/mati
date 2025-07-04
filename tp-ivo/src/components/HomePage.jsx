import React from 'react';
import { ChevronDown } from 'lucide-react';

const HomePage = ({ scrollToGallery }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">

    
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
       <section className="min-h-screen flex flex-col justify-center items-center text-white relative px-4 text-center">
  <h1 className="text-[7rem] font-bold mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
    CEAN
  </h1>
  <p className="text-xl font-light tracking-wide mb-12 uppercase text-white/70" style={{ fontFamily: 'Orbitron, sans-serif' }}>
    Surf the web
  </p>
  
  {/* Botón LIGHT abajo a la izquierda */}
  <div className="absolute bottom-8 left-8">
    <button 
      onClick={() => setCurrentView('home')}
      className="border-2 border-white px-6 py-2 rounded-full text-white font-bold hover:bg-white hover:text-black transition-all"
    >
      LIGHT
    </button>
  </div>
</section>

        
        <div className="max-w-2xl mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <span className="text-blue-400 text-sm">OUR MISSION</span>
              <span className="text-blue-400 text-sm">WHO ARE WE</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              AT CEAN, WE ARE DEDICATED TO CELEBRATING AND PROTECTING THE BEAUTY OF OUR OCEANS THROUGH STUNNING VISUAL STORYTELLING. OUR MISSION IS TO INSPIRE WONDER AND CONSERVATION THROUGH CAPTIVATING IMAGERY OF MARINE LIFE AND UNDERWATER ECOSYSTEMS.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mt-4">
              WE BELIEVE THAT BY SHARING THE WONDERS OF THE OCEAN'S DEPTHS, WE CAN FOSTER GREATER AWARENESS AND PROTECTION OF THESE VITAL ECOSYSTEMS THAT SUSTAIN ALL LIFE ON EARTH.
            </p>
          </div>
        </div>
        
        <button 
          onClick={scrollToGallery}
          className="flex items-center space-x-2 px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors animate-pulse"
        >
          <span>START SURFING</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default HomePage;