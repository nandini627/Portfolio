import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
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
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nandini-prajapati-3473493a1',
      icon: <FaLinkedin />,
      username: 'nandini-prajapati'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/nandini627',
      icon: <FaGithub />,
      username: 'nandini627'
    },
    {
      platform: 'Twitter',
      url: 'https://x.com/NandiniPraj4434',
      icon: <FaTwitter />,
      username: '@NandiniPraj4434'
    },
    {
      platform: 'Email',
      url: 'mailto:bp623989@gmail.com',
      icon: <SiGmail />,
      username: 'bp623989@gmail.com'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-bg">Let's Connect</span>
        </h2>
        
        <div className="contact-intro">
          <p className="intro-text">
            I'm always open to discussing technology, collaboration opportunities, 
            or just chatting about the latest in AI/ML. Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info cosmic-card">
            <h3 className="contact-subtitle">Get In Touch</h3>
            
            <div className="contact-details">
              <div className="primary-contact">
                <div className="contact-item email-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:bp623989@gmail.com" className="contact-value">
                      bp623989@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-item location-item">
                  <div className="contact-icon">
                    📍
                  </div>
                  <div>
                    <h4>Location</h4>
                    <span className="contact-value">Gandhinagar, Gujarat</span>
                  </div>
                </div>
              </div>
              
              <div className="social-profiles">
                <h4>Connect with me</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-profile-link"
                    >
                      <div className="social-icon-wrapper">
                        {social.icon}
                      </div>
                      <div className="social-info">
                        <span className="social-platform">{social.platform}</span>
                        <span className="social-username">{social.username}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="contact-note">
              <p>
                💡 <strong>Note:</strong> I'm particularly interested in discussing:
              </p>
              <ul className="interest-list">
                <li>AI/ML Projects & Research</li>
                <li>Web Development Opportunities</li>
                <li>Open Source Contributions</li>
                <li>Tech Innovation Ideas</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-wrapper cosmic-card">
            <h3 className="contact-subtitle">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input cosmic-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input cosmic-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input cosmic-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message... What would you like to discuss?"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea cosmic-input"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn cosmic-btn submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
            
            <div className="response-note">
              <p>📬 I typically respond within 24-48 hours.</p>
            </div>
          </div>
        </div>
        
        <div className="contact-cta">
          <h3>Open to Opportunities</h3>
          <p>
            I'm actively seeking internships, collaborative projects, and learning opportunities 
            in software development, especially in AI/ML and web technologies.
          </p>
          <div className="cta-buttons">
            <a href="mailto:bp623989@gmail.com?subject=Opportunity%20Discussion" className="btn cosmic-btn">
              Discuss Opportunity
            </a>
            <a href="#projects" className="btn btn-outline">
              View My Work First
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;