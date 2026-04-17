import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NameLogo from './NameLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'HOME', href: '/', id: 'home' },
    { name: 'ABOUT', href: '/about', id: 'about' },
    { name: 'SKILLS', href: '/skills', id: 'skills' },
    { name: 'PROJECTS', href: '/projects', id: 'projects' },
    { name: 'EDUCATION', href: '/education', id: 'education' },
    { name: 'CONTACT', href: '/contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <div className="logo">
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <NameLogo size={55} />
            </Link>
          </div>

          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;