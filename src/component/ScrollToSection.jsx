import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Extract section ID from pathname (e.g., "/about" -> "about")
    // If pathname is just "/", scroll to top or default section
    const sectionId = pathname === '/' ? 'home' : pathname.replace('/', '');
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Small timeout to ensure DOM is ready and any animations haven't blocked the calculation
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (pathname === '/') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
};

export default ScrollToSection;
