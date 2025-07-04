import React from 'react';

const Header = ({ isScrolled, isGalleryView, setCurrentView, scrollToGallery }) => {
  return (
 <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6">
  <div className="flex items-center border border-white rounded-full overflow-hidden text-white text-sm font-semibold">
    <button 
      onClick={() => setCurrentView('gallery')}
      className="bg-white text-blue-900 px-4 py-2 transition-all duration-300"
    >
      US
    </button>
    <button 
      onClick={scrollToGallery}
      className="px-4 py-2"
    >
      START SURFING
    </button>
  </div>
</header>

  );
};

export default Header;