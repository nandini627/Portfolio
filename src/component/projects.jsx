import React from 'react';
import { FaGithub, FaYoutube, FaPlayCircle, FaRocket, FaGem, FaCloudMoon } from 'react-icons/fa';
import { FaUserAstronaut } from 'react-icons/fa6';
import useScrollReveal from '../hooks/useScrollReveal';

const Projects = () => {
  useScrollReveal();
  const projects = [
    {
      title: "NASA Website Clone",
      technologies: ['HTML5', 'CSS3', 'Cosmic UI'],
      github: "https://github.com/nandini627/website2",
      youtube: "https://www.youtube.com/watch?v=m0Wa5p8lX-8",
      icon: <FaUserAstronaut className="cosmic-icon" style={{ fontSize: '1.8rem' }} />,
      accentColor: "#0B3D91",
      accentColorRgb: "11, 61, 145",
    },
    {
      title: "Giva Website Clone",
      technologies: ['HTML5', 'CSS3', 'JS'],
      github: "https://github.com/nandini627/website-4",
      youtube: "https://www.youtube.com/watch?v=PQOFuMWsulU",
      icon: <FaGem className="cosmic-icon" style={{ fontSize: '1.8rem' }} />,
      accentColor: "#D4AF37",
      accentColorRgb: "212, 175, 55",
    },
    {
      title: "Vanta Website Clone",
      technologies: ['HTML5', 'CSS3', 'UI/UX'],
      github: "https://github.com/nandini627/website-6",
      youtube: "https://www.youtube.com/watch?v=r4KhJcI5zMg",
      icon: <FaCloudMoon className="cosmic-icon" style={{ fontSize: '1.8rem' }} />,
      accentColor: "#8B5CF6",
      accentColorRgb: "139, 92, 246",
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">
          <span className="section-title-bg">My Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card-wrapper reveal-on-scroll ${index % 3 === 0 ? 'reveal-left' : index % 3 === 2 ? 'reveal-right' : ''}`}
              style={{
                '--accent-color': project.accentColor,
                '--accent-color-rgb': project.accentColorRgb,
                '--float-delay': `${index * -1.2}s`,
                transitionDelay: `${index * 0.15}s`
              }}
            >
              <div className="project-card">

                {/* Thumbnail */}
                <div className="project-video-preview">
                  <img
                    src={`https://img.youtube.com/vi/${project.youtube.split('v=')[1]?.split('&')[0]}/hqdefault.jpg`}
                    alt={project.title}
                  />
                  <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="play-button-overlay">
                    <FaPlayCircle className="cosmic-icon" style={{ color: 'white' }} />
                  </a>
                </div>

                {/* Title row */}
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                  <h3 className="project-title-text">{project.title}</h3>
                </div>

                {/* Tech tags */}
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                    <FaGithub className="cosmic-icon-sm" style={{ color: 'inherit' }} /> Code
                  </a>
                  <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="project-link yt-link" style={{ border: '1.5px solid #FF0000', color: '#FF0000', background: 'rgba(255,0,0,0.05)' }}>
                    <FaYoutube className="cosmic-icon-sm" style={{ color: 'inherit' }} /> Demo
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

export default Projects;