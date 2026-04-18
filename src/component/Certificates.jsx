import React, { useRef, useState, useEffect } from 'react';
import { FaGraduationCap, FaExternalLinkAlt, FaAward, FaSearchPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Existing certificates
import be10xAi from '../assets/certificates/be10x_ai.jpg';
import googleGemini from '../assets/certificates/google_gemini.jpg';
import sololearnC from '../assets/certificates/sololearn_c.jpg';
import hackathonCert from '../assets/certificates/unstop.jpeg';
import hackerrankCert from '../assets/certificates/hackerRank.jpeg';

const Certificates = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const containerWidth = container.clientWidth;
    const containerCenter = container.scrollLeft + containerWidth / 2;
    const cardWidth = 320;
    const gap = 35;
    const distanceThreshold = 180;

    let closestIndex = 0;
    let closestDistance = Infinity;

    // Apply focal effects and dome shape directly to DOM for 60fps performance
    Array.from(container.children).forEach((child, index) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      
      // Calculate continuous distance factor
      const distFac = Math.pow(Math.max(0, (distance - distanceThreshold) / (cardWidth + gap)), 1.5);
      const clampedDistFac = Math.min(distFac, 1.5);

      // Update CSS variable for transform/opacity/blur mapping in index.css
      child.style.setProperty('--dist-fac', clampedDistFac);
      
      // Determine active index for logic (like badges or dots)
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }

      // Toggle focus classes
      if (distance < (cardWidth + gap) / 2) {
        child.classList.add('active-cert');
      } else {
        child.classList.remove('active-cert');
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  // Run scroll detection and image preloading on mount
  useEffect(() => {
    // Preload all certificate images
    certifications.forEach(cert => {
      const img = new Image();
      img.src = cert.image;
    });

    // Initial check for positioning - do it instantly then re-check
    handleScroll();
    const initialTimer = setTimeout(handleScroll, 50);
    
    // Re-check on window resize
    window.addEventListener("resize", handleScroll);
    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener("resize", handleScroll);
    };
  }, []); 

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const certifications = [
    {
      title: "Certificate of Participation (Local Hosters)",
      issuer: "ArtPark CodeForge Hackathon / IISc Bangalore",
      date: "2024", 
      image: hackathonCert,
      color: "#FF00FF",
      link: "#"
    },
    {
      title: "JavaScript (Basic) Certificate",
      issuer: "HackerRank",
      date: "13 Apr, 2026",
      image: hackerrankCert,
      color: "#00EA64", 
      link: "#"
    },
    {
      title: "AI Tools & ChatGPT Workshop",
      issuer: "be10x (Co-founder: Aditya Goenka)",
      date: "January 11th, 2026",
      image: be10xAi,
      color: "#222222",
      link: "#"
    },
    {
      title: "Gemini for Google Workspace",
      issuer: "Simplilearn / SkillUp / Google Cloud",
      date: "December 30th, 2025",
      image: googleGemini,
      color: "#4285F4",
      link: "#"
    },
    {
      title: "Introduction to C",
      issuer: "Sololearn (Chief Executive: Yeva Hyusyan)",
      date: "October 6th, 2025",
      image: sololearnC,
      color: "#8B5CF6",
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-bg">My Certifications</span>
        </h2>

        <div className="cert-scroll-wrapper">
          <button className="cert-scroll-arrow cert-scroll-left" onClick={scrollLeft} aria-label="Scroll left">
            <FaChevronLeft />
          </button>
          
          <div 
            className="cert-grid" 
            ref={scrollRef} 
            onScroll={handleScroll}
          >
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="cert-card-new"
                style={{ 
                  '--cert-color': cert.color,
                  '--float-delay': `${index * -1.5}s`,
                  transitionDelay: `${index * 0.1}s` 
                }}
              >
                <div className="cert-top-bar" style={{ background: cert.color }}></div>
                
                <div className="cert-img-wrapper" onClick={() => window.open(cert.image, '_blank')}>
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="cert-thumbnail" 
                    loading="eager"
                    decoding="async"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/320x200?text=Image+Not+Found'; }} 
                  />
                  <div className="cert-img-overlay">
                    <FaSearchPlus className="cert-zoom-icon cosmic-icon-sm" style={{ color: 'white' }} />
                    <span>Click to Preview</span>
                  </div>
                </div>

                <div className="cert-body">
                  <div className="cert-award-badge" style={{ borderColor: cert.color, color: cert.color, background: `${cert.color}15` }}>
                    <FaAward className="cosmic-icon-sm" style={{ color: 'inherit' }} /> Verified Certificate
                  </div>
                  <h3 className="cert-title-new">{cert.title}</h3>
                  <div className="cert-issuer-new">
                    <FaGraduationCap className="cosmic-icon-sm" style={{ marginRight: 8, color: cert.color }} />
                    {cert.issuer}
                  </div>
                  <div className="cert-year">{cert.date}</div>
                  
                  <div style={{ marginTop: '20px' }}>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-view-btn"
                      style={{ borderColor: cert.color, boxShadow: `0 5px 15px ${cert.color}20` }}
                    >
                      Verify Credentials <FaExternalLinkAlt className="cosmic-icon-sm" style={{ marginLeft: 8, color: 'inherit' }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="cert-scroll-arrow cert-scroll-right" onClick={scrollRight} aria-label="Scroll right">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
