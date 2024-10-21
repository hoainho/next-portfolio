// components/ScrollToTop.tsx
'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`group fixed bottom-5 right-5 w-[50px] h-[50px] rounded-full shadow-lg transition-all 
        ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} 
        bg-white text-gray-900 hover:bg-[#0061ff] hover:scale-110`}
    >
      <span className={`text-[#0061ff] group-hover:text-white`}>▲</span>
    </button>
  );
}
