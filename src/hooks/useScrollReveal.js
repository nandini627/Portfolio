import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    console.log('ScrollReveal hook initialized');
    
    const observerOptions = {
      threshold: 0.15,
      // Root margin to trigger a bit earlier
      rootMargin: '0px 0px -20px 0px'
    };

    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Element revealing:', entry.target);
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // Give React a small moment to paint before observing
    const timeout = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      console.log(`Found ${revealElements.length} elements to observe`);
      
      revealElements.forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);
};

export default useScrollReveal;
