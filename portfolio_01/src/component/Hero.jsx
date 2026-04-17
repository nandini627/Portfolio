import React, { useState, useEffect } from 'react';
import { FaRocket, FaFileDownload, FaLinkedin, FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';
import { SiSpacex, SiLeetcode, SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const Counter = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const Typewriter = ({ texts, speed = 150, delay = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delay);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, speed, delay]);

  return (
    <span className="typewriter-text" style={{ borderRight: '3px solid var(--theme-pink)', paddingRight: '5px' }}>
      {texts[index].substring(0, subIndex)}
    </span>
  );
};

const Hero = () => {
  useScrollReveal();
  return (
    <section id="home" className="hero">
      <style>{`
        .hero-wrapper {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          width: 100% !important;
        }
        .hero-photo-side {
          display: flex !important;
          align-items: center !important;
          justify-content: flex-end !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 1024px) {
          .hero-wrapper {
            flex-direction: column !important;
            text-align: center !important;
          }
          .hero-photo-side {
            justify-content: center !important;
            margin-bottom: 30px !important;
            order: -1 !important;
          }
        }
      `}</style>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-wrapper">
          <div className="hero-content fade-in">
            <div className="hero-badge reveal-on-scroll" style={{ display: 'inline-flex', padding: '10px 25px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '50px', marginBottom: '30px', border: '1.5px solid rgba(255, 255, 255, 0.2)' }}>
              <FaRocket className="cosmic-icon-sm" style={{ marginRight: '10px' }} /> Aspiring Software Developer
            </div>
            <h1 className="hero-title reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
              Hello, I'm <br />
              <span className="logo-gradient typing-once" style={{ display: 'inline-block' }}>
                Nandini Prajapati
              </span>
            </h1>
            <h2 className="hero-subtitle reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              I'm a <Typewriter texts={["Software Developer", "AI/ML Enthusiast", "CS Student", "Tech Innovator"]} />
            </h2>
            <p className="hero-description reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
              First-year B.E. Computer Science student from CodingGita x Swaminarayan University. 
              Eager to contribute to the evolving tech landscape with creativity and innovation.
            </p>
            <div className="hero-buttons reveal-on-scroll" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '30px', transitionDelay: '0.4s' }}>
              <Link to="/projects" className="btn glowing-btn">
                <SiSpacex className="cosmic-icon-sm" style={{ fontSize: '1.4rem', color: 'inherit' }} /> View Projects
              </Link>
              <a 
                href="/Resume.pdf" 
                download="Nandini_Prajapati_Resume.pdf"
                className="btn glowing-btn-outline" 
                style={{ background: 'transparent', border: '1.5px solid var(--theme-pink)', color: 'var(--theme-white)', padding: '12px 24px', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
              >
                <FaFileDownload className="cosmic-icon-sm" style={{ marginRight: '8px' }} /> Resume
              </a>
              
              <div className="social-icon-row" style={{ display: 'flex', gap: '12px', alignItems: 'center', marginLeft: '10px' }}>
                {[
                  { name: 'GitHub', url: 'https://github.com/nandini627', icon: <FaGithub />, color: '#ffffff' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nandini-prajapati-3473493a1', icon: <FaLinkedin />, color: '#0077b5' },
                  { name: 'LeetCode', url: 'https://leetcode.com/u/KVXpAaGWcH/', icon: <SiLeetcode />, color: '#ffa116' },
                  { name: 'YouTube', url: 'https://www.youtube.com/@NandiniPrajapati-n8z', icon: <FaYoutube />, color: '#ff0000' },
                  { name: 'Twitter', url: 'https://x.com/NandiniPraj4434', icon: <FaTwitter />, color: '#1da1f2' },
                  { name: 'Email', url: 'mailto:bp623989@gmail.com', icon: <SiGmail />, color: '#ea4335' }
                ].map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modern-social-icon"
                    style={{ '--hover-color': link.color, width: '40px', height: '40px', fontSize: '1.1rem' }}
                    title={link.name}
                  >
                    <span className="cosmic-icon-sm" style={{ color: 'inherit' }}>{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="hero-stats reveal-on-scroll" style={{ transitionDelay: '0.5s' }}>
              <div className="stat-item">
                <div className="stat-number">
                  <Counter end={2} duration={2000} suffix="+" />
                </div>
                <div className="stat-label">Projects</div>
              </div>
              <div style={{ width: '1.5px', height: '40px', background: 'var(--theme-pink)', opacity: 0.3 }}></div>
              <div className="stat-item">
                <div className="stat-number">
                  <Counter end={8} duration={2000} suffix="+" />
                </div>
                <div className="stat-label">Skills</div>
              </div>
              <div style={{ width: '1.5px', height: '40px', background: 'var(--theme-pink)', opacity: 0.3 }}></div>
              <div className="stat-item">
                <div className="stat-number">
                  <Counter end={100} duration={2000} suffix="%" />
                </div>
                <div className="stat-label">Passionate</div>
              </div>
            </div>
          </div>

          <div className="hero-photo-side reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <div className="photo-frame" style={{ width: '380px', height: '380px' }}>
              <div className="photo-placeholder">
                <img 
                  src="https://res.cloudinary.com/dxnsg3spg/image/upload/v1770363089/Screenshot_2026-02-06_125845_dwc6nw.png" 
                  alt="Nandini Prajapati" 
                />
              </div>
              
              {/* Added subtle floating glow effects around the photo frame */}
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: 'var(--theme-pink)', filter: 'blur(80px)', opacity: 0.4, zIndex: -1 }}></div>
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--theme-purple)', filter: 'blur(80px)', opacity: 0.4, zIndex: -1 }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;