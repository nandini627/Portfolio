import React, { useState, useEffect } from 'react';
import { FaRocket } from 'react-icons/fa';
import { SiSpacex } from 'react-icons/si';
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
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-wrapper">
          <div className="hero-content fade-in">
            <div className="hero-badge reveal-on-scroll" style={{ display: 'inline-flex', padding: '10px 25px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '50px', marginBottom: '30px', border: '1.5px solid rgba(255, 255, 255, 0.2)' }}>
              <FaRocket style={{ color: 'var(--theme-pink)', marginRight: '10px' }} /> Aspiring Software Developer
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
            <div className="hero-buttons reveal-on-scroll" style={{ display: 'flex', gap: '20px', marginBottom: '50px', transitionDelay: '0.4s' }}>
              <a href="#projects" className="btn">
                <SiSpacex style={{ fontSize: '1.4rem' }} /> View My Projects
              </a>
              <a href="#contact" className="btn" style={{ background: 'transparent', border: '2.5px solid var(--theme-pink)', color: 'var(--theme-white)' }}>
                Let's Connect
              </a>
            </div>
            
            <div className="hero-stats reveal-on-scroll" style={{ transitionDelay: '0.5s' }}>
              <div className="stat-item">
                <div className="stat-number">
                  <Counter end={2} duration={2000} suffix="+" />
                </div>
                <div className="stat-label">Projects</div>
              </div>
              <div style={{ width: '1.5px', height: '50px', background: 'var(--theme-pink)', opacity: 0.3 }}></div>
              <div className="stat-item">
                <div className="stat-number">
                  <Counter end={8} duration={2000} suffix="+" />
                </div>
                <div className="stat-label">Skills</div>
              </div>
              <div style={{ width: '1.5px', height: '50px', background: 'var(--theme-pink)', opacity: 0.3 }}></div>
              <div className="stat-item">
                <div className="stat-number">
                  <Counter end={100} duration={2000} suffix="%" />
                </div>
                <div className="stat-label">Passionate</div>
              </div>
            </div>
          </div>

          <div className="hero-photo-side reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <div className="photo-frame">
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