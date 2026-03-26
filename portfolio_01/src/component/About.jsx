import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { SiTarget } from 'react-icons/si';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  useScrollReveal();
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">
          <span className="section-title-bg">About Me</span>
        </h2>
        
        <div className="about-grid">
          <div className="about-card cosmic-card reveal-on-scroll">
            <div className="card-header">
              <h3>Who Am I?</h3>
              <div className="card-icon">👩‍💻</div>
            </div>
            <p className="about-intro">
              Hello! I'm <strong>Nandini Prajapati</strong> from BK, Gujarat. 
              I'm deeply passionate about innovative technology, especially in the fields of 
              <span className="highlight-text"> Artificial Intelligence</span> and 
              <span className="highlight-text"> Machine Learning</span>.
            </p>
            <p>
              As a first-year B.E. Computer Science student, I'm building my foundation in 
              software development while exploring cutting-edge technologies that shape our future.
            </p>
            <div className="mission-statement">
              <SiTarget className="mission-icon" />
              <p>
                <strong>My Mission:</strong> To contribute meaningfully to the tech industry 
                by creating innovative solutions that make a difference.
              </p>
            </div>
          </div>

          <div className="about-card info-card reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="card-header">
              <h3>Personal Info</h3>
              <div className="card-icon">📋</div>
            </div>
            
            <div className="info-grid">
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <span className="info-label">Email</span>
                  <a href="mailto:bp623989@gmail.com" className="info-value">
                    bp623989@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">Gandhinagar, Gujarat</span>
                </div>
              </div>
              
              <div className="info-item">
                <FaUniversity className="info-icon" />
                <div>
                  <span className="info-label">University</span>
                  <span className="info-value">CodingGita x Swaminarayan University</span>
                </div>
              </div>
              
              <div className="info-item">
                <FaGraduationCap className="info-icon" />
                <div>
                  <span className="info-label">Education</span>
                  <span className="info-value">B.E. Computer Science (First Year)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;