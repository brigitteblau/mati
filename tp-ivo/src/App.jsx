import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import { useScroll } from './hooks/useScroll';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const { scrolled } = useScroll();

  const scrollToGallery = () => {
    setCurrentView('gallery');
    setTimeout(() => {
      const galleryElement = document.getElementById('gallery-section');
      if (galleryElement) {
        galleryElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <Header 
        isScrolled={scrolled} 
        isGalleryView={currentView === 'gallery'}
        setCurrentView={setCurrentView}
        scrollToGallery={scrollToGallery}
      />
      
      {currentView === 'home' ? 
        <HomePage scrollToGallery={scrollToGallery} /> : 
        <GalleryPage setCurrentView={setCurrentView} />
      }
    </div>
  );
};

export default App;