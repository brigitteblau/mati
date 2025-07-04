import React from 'react';
import { oceanImages } from './data/images';

const GalleryPage = ({ setCurrentView }) => {
  return (
    <div id="gallery-section" className="min-h-screen bg-slate-900 text-white pt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {oceanImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg bg-slate-800 aspect-square hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-blue-300 capitalize">{image.type}</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => setCurrentView('home')}
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            BACK TO SURFACE
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;