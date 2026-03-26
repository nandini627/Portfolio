import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaCode, FaYoutube, FaPlayCircle } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const Projects = () => {
  useScrollReveal();
  const projects = [
    {
      title: "NASA Website Clone",
      description: "A high-fidelity clone of the NASA official website, demonstrating advanced HTML5 and CSS3 layouts with a focus on cosmic aesthetics and responsive design.",
      technologies: ['HTML5', 'CSS3', 'Responsive Design', 'Cosmic UI'],
      github: "https://github.com/nandini627/website2",
      demo: "#", 
      youtube: "https://www.youtube.com/watch?v=m0Wa5p8lX-8",
      icon: "🚀",
      accentColor: "#0B3D91",
      features: [
        "Interactive space-themed UI",
        "Modern CSS Flexbox/Grid",
        "Optimized image handling",
        "Fully responsive layout"
      ]
    },
    {
      title: "Vanta Website Clone",
      description: "A sleek, professional clone of the Vanta landing page. Features a clean, dark-themed design with smooth transitions and modern web standards.",
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
      github: "https://github.com/nandini627/website-6",
      demo: "#",
      youtube: "https://www.youtube.com/watch?v=r4KhJcI5zMg",
      icon: "🌌",
      accentColor: "#FF00FF",
      features: [
        "Dark mode aesthetics",
        "Clean semantic markup",
        "Smooth scroll effects",
        "Premium professional look"
      ]
    },
    {
      title: "Giva Website Clone",
      description: "An elegant jewelry e-commerce frontend clone. Showcases product grids, hover effects, and a sophisticated design language for luxury brands.",
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: "http://github.com/nandini627/website-4",
      demo: "#",
      youtube: "https://www.youtube.com/watch?v=PQOFuMWsulU",
      icon: "💎",
      accentColor: "#D4AF37",
      features: [
        "Product showcasing layout",
        "Elegant hover interactions",
        "Luxury branding UI",
        "Mobile-first responsive design"
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">
          <span className="section-title-bg">My Projects</span>
        </h2>

        <div className="project-intro reveal-on-scroll">
          <p className="intro-text">
            Check out some of my key projects with live demos and video walkthroughs!
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card reveal-on-scroll"
              style={{ 
                '--accent-color': project.accentColor,
                transitionDelay: `${index * 0.15}s`
              }}
            >
              {/* Optional: Video Thumbnail Preview */}
              <div className="project-video-preview" style={{ marginBottom: '20px', borderRadius: '15px', overflow: 'hidden', position: 'relative', height: '180px', background: '#000' }}>
                <img 
                  src={`https://img.youtube.com/vi/${new URLSearchParams(new URL(project.youtube.replace('watch?v=', '?v=')).search).get('v')}/mqdefault.jpg`} 
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                />
                <a href={project.youtube} target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '3rem' }}>
                  <FaPlayCircle />
                </a>
              </div>

              <div className="project-header">
                <div className="project-icon" style={{ color: project.accentColor }}>
                  {project.icon}
                </div>
                <div className="project-title-wrapper">
                  <h3>{project.title}</h3>
                  <div className="project-badge">
                    <FaCode /> Personal Project
                  </div>
                </div>
              </div>
              
              <p className="project-description text-sm opacity-80">{project.description}</p>
              
              <div className="project-technologies" style={{ margin: '15px 0' }}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link" title="Source Code">
                  <FaGithub /> Source
                </a>
                
                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link" style={{ background: 'var(--theme-pink)', borderColor: 'var(--theme-pink)' }}>
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}

                <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="project-link yt-link" style={{ border: '1.5px solid #FF0000', color: '#FF0000', background: 'rgba(255,0,0,0.05)' }}>
                  <FaYoutube /> Demo Video
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="upcoming-projects reveal-on-scroll">
          <h3 className="upcoming-title">
            <FaRocket /> Upcoming & In Progress
          </h3>
          <div className="upcoming-list">
            <div className="upcoming-item">
              <div className="upcoming-dot"></div>
              <span>AI/ML Project using Python</span>
            </div>
            <div className="upcoming-item">
              <div className="upcoming-dot"></div>
              <span>Full-Stack E-commerce Website</span>
            </div>
            <div className="upcoming-item">
              <div className="upcoming-dot"></div>
              <span>React Native Mobile App</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;