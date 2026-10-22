import React, { useState, useEffect } from 'react';
import { IoIosArrowDropup } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-32 sm:bottom-20 lg:bottom-20 xl:bottom-20 right-2 sm:right-6 lg:right-12 xl:right-12 transition-opacity text-light-blue hover:text-white text-3xl 
              ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} cursor-pointer z-50`}
    >
      <IoIosArrowDropup size={50} />
    </button>
  );
};

export default ScrollToTop;
