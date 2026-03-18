import React, { useState } from 'react';
import { FaGraduationCap, FaAward, FaTimes, FaSearchPlus } from 'react-icons/fa';

const Certificates = () => {
  const [modalImg, setModalImg] = useState(null);

  // ✅ Add your certificate image paths here.
  // Save your certificate images to: src/assets/
  // e.g., src/assets/cert_be10x.jpg
  // Then replace the placeholder strings below with the imported images.
  const certifications = [
    {
      title: "AI Tools & ChatGPT Workshop",
      issuer: "be10x",
      date: "January 11, 2026",
      image: null,          // ← Replace with: import certBe10x from '../assets/cert_be10x.jpg'; then put certBe10x here
      imageFile: "cert_be10x",
      color: "#FF6B35",
      description: "Completion of AI tools and ChatGPT workshop — creating presentations, analysing data, and coding with AI."
    },
    {
      title: "Gemini for Google Workspace",
      issuer: "Google Cloud · Simplilearn SkillUp",
      date: "December 30, 2025",
      image: null,          // ← Replace with imported cert_googlecloud
      imageFile: "cert_googlecloud",
      color: "#4285F4",
      description: "Successfully completed the online course on Gemini for Google Workspace. Certificate code: 9660135"
    },
    {
      title: "Introduction to C",
      issuer: "Sololearn",
      date: "October 2023",
      image: null,          // ← Replace with imported cert_sololearn
      imageFile: "cert_sololearn",
      color: "#A855F7",
      description: "Demonstrated theoretical and practical understanding of Introduction to C. Certificate ID: CKXRQWVARD"
    },
    {
      title: "Data Visualization with Python",
      issuer: "Guvi / Skill-Lync",
      date: "2024",
      image: null,
      color: "#FF00FF",
      description: "Learned to create compelling data visualizations using Python libraries."
    },
    {
      title: "Full Stack Development Foundations",
      issuer: "FreeCodeCamp",
      date: "2024",
      image: null,
      color: "#6366F1",
      description: "Completed foundations of full stack web development."
    }
  ];

  return (
    <>
      {/* Lightbox Modal */}
      {modalImg && (
        <div className="cert-modal-overlay" onClick={() => setModalImg(null)}>
          <div className="cert-modal-box" onClick={e => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setModalImg(null)}>
              <FaTimes />
            </button>
            <img src={modalImg} alt="Certificate" className="cert-modal-img" />
          </div>
        </div>
      )}

      <section id="certificates" className="certificates" style={{ background: 'transparent' }}>
        <div className="container">
          <h2 className="section-title">
            <span className="section-title-bg">My Certifications</span>
          </h2>

          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card-new" style={{ '--cert-color': cert.color }}>
                {/* Top Color Bar */}
                <div className="cert-top-bar" style={{ background: cert.color }}></div>

                {/* Certificate Image or Placeholder */}
                {cert.image ? (
                  <div className="cert-img-wrapper" onClick={() => setModalImg(cert.image)}>
                    <img src={cert.image} alt={cert.title} className="cert-thumbnail" />
                    <div className="cert-img-overlay">
                      <FaSearchPlus className="cert-zoom-icon" />
                      <span>Click to view full certificate</span>
                    </div>
                  </div>
                ) : (
                  <div className="cert-img-placeholder" style={{ borderColor: cert.color + '55' }}>
                    <FaAward style={{ fontSize: '3rem', color: cert.color }} />
                    <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginTop: 8 }}>
                      Add image: src/assets/{cert.imageFile || 'certificate'}.jpg
                    </span>
                  </div>
                )}

                {/* Card Body */}
                <div className="cert-body">
                  <div className="cert-award-badge" style={{ color: cert.color, borderColor: cert.color + '55', background: cert.color + '18' }}>
                    <FaAward /> Certified
                  </div>
                  <h3 className="cert-title-new">{cert.title}</h3>
                  <p className="cert-issuer-new">
                    <FaGraduationCap style={{ marginRight: 8 }} />
                    {cert.issuer}
                  </p>
                  {cert.description && (
                    <p className="cert-description">{cert.description}</p>
                  )}
                  <span className="cert-year" style={{ borderColor: cert.color + '44', color: cert.color }}>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificates;
