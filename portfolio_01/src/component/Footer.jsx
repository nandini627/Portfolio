import React, { useState } from 'react';
import { FaHeart, FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { SiLeetcode, SiGmail } from 'react-icons/si';
import NameLogo from './NameLogo';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you! Your message has been sent successfully. I\'ll get back to you soon!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/nandini627', icon: <FaGithub />, color: '#ffffff' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nandini-prajapati-3473493a1', icon: <FaLinkedin />, color: '#0077b5' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/KVXpAaGWcH/', icon: <SiLeetcode />, color: '#ffa116' },
    { name: 'YouTube', url: 'https://www.youtube.com/@NandiniPrajapati-n8z', icon: <FaYoutube />, color: '#ff0000' },
    { name: 'Twitter', url: 'https://x.com/NandiniPraj4434', icon: <FaTwitter />, color: '#1da1f2' },
    { name: 'Email', url: 'mailto:bp623989@gmail.com', icon: <SiGmail />, color: '#ea4335' }
  ];

  return (
    <footer className="footer-modern" id="contact">
      <div className="footer-top-blur"></div>
      <div className="container">
        <div className="footer-contact-wrapper">
          <div className="footer-info-column">
            <div className="footer-logo-wrapper" style={{ marginBottom: '20px' }}>
              <NameLogo size={60} />
            </div>
            <p className="footer-tagline">Building the next generation of cosmic AI & Web experiences.</p>
            
            <div className="footer-contact-info">
              <h3>Get In Touch</h3>
              <div className="footer-contact-item">
                <span className="footer-contact-icon"><FaEnvelope /></span>
                <a href="mailto:bp623989@gmail.com">bp623989@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📍</span>
                <span>Gandhinagar, Gujarat</span>
              </div>
            </div>

            <div className="footer-social-wrapper">
              <h4>Follow Me</h4>
              <div className="social-icon-row">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modern-social-icon"
                    style={{ '--hover-color': link.color }}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-message-column">
            <h3 className="column-title">Send a Message</h3>
            <form onSubmit={handleSubmit} className="footer-form">
              <div className="footer-form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="How can I help you today?"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="footer-submit-btn glowing-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Nandini Prajapati. Made with <FaHeart className="heart-icon" /> in Gujarat.</p>
          <div className="footer-bottom-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Work</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
