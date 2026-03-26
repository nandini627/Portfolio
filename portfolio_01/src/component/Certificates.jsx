import React from 'react';
import { FaGraduationCap, FaExternalLinkAlt, FaAward, FaSearchPlus } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const Certificates = () => {
  useScrollReveal();
  const certifications = [
    {
      title: "Data Visualization with Python",
      issuer: "Guvi / Skill-Lync",
      date: "2024",
      image: "https://images.unsplash.com/photo-1513258496099-48168024adb0?q=80&w=1470&auto=format&fit=crop", 
      color: "#FF00FF",
      link: "#"
    },
    {
      title: "Full Stack Development Foundations",
      issuer: "FreeCodeCamp",
      date: "2024",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1471&auto=format&fit=crop",
      color: "#A855F7",
      link: "#"
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "2023",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop",
      color: "#6366F1",
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">
          <span className="section-title-bg">My Certifications</span>
        </h2>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="cert-card-new reveal-on-scroll" 
              style={{ 
                '--cert-color': cert.color,
                transitionDelay: `${index * 0.1}s` 
              }}
            >
              <div className="cert-top-bar" style={{ background: cert.color }}></div>
              
              <div className="cert-img-wrapper" onClick={() => window.open(cert.image, '_blank')}>
                <img src={cert.image} alt={cert.title} className="cert-thumbnail" />
                <div className="cert-img-overlay">
                  <FaSearchPlus className="cert-zoom-icon" />
                  <span>Click to Preview</span>
                </div>
              </div>

              <div className="cert-body">
                <div className="cert-award-badge" style={{ borderColor: cert.color, color: cert.color, background: `${cert.color}15` }}>
                  <FaAward /> Verified Certificate
                </div>
                <h3 className="cert-title-new">{cert.title}</h3>
                <div className="cert-issuer-new">
                  <FaGraduationCap style={{ marginRight: 8, color: cert.color }} />
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
                    Verify Credentials <FaExternalLinkAlt style={{ marginLeft: 8 }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
