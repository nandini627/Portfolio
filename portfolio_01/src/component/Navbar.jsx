import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <div className="logo">
            <a href="#home">
              <span className="logo-gradient">Nandini</span>
            </a>
          </div>
          
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/nandini-prajapati-3473493a1" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://github.com/nandini627" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://x.com/NandiniPraj4434" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
          </div>

          <button
            className="menu-btn cosmic-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;