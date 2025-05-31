// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Get the current path

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for scrolling to the top.
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Optional: adds a smooth scrolling animation
    });
  }, [pathname]); // Re-run this effect whenever the pathname changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;