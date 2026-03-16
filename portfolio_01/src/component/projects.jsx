import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaCode } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Pokémon API Explorer",
      description: "A web application that fetches Pokémon data from PokéAPI and displays it with an engaging user interface. Features search and filter capabilities.",
      technologies: ['JavaScript', 'API Integration', 'CSS3', 'Postman'],
      github: "https://github.com/nandini627/pokemon-api",
      demo: "#",
      icon: "📈",
      accentColor: "#FF0000",
      features: [
        "API data fetching & processing",
        "Interactive UI components",
        "Search and filter functionality",
        "Async JavaScript implementation"
      ]
    },
    {
      title: "NASA Website Clone",
      description: "A responsive clone of NASA's official website built with HTML and CSS to better understand UI design principles.",
      technologies: ['HTML5', 'CSS3', 'Responsive Design', 'UI/UX'],
      github: "#",
      demo: "#",
      icon: "🚀",
      accentColor: "#0B3D91",
      features: [
        "Fully responsive design",
        "Modern UI components",
        "Cross-browser compatible",
        "Clean and semantic code"
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-bg">My Projects</span>
        </h2>

        <div className="project-intro">
          <p className="intro-text">
            Here are some of my recent projects where I've applied my skills to solve 
            real-world problems and create engaging user experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{ '--accent-color': project.accentColor }}
            >
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
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <FaGithub /> View Code
                </a>
                {project.demo !== "#" && (
                  <a 
                    href={"https://github.com/nandini627/website2"}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link demo-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="upcoming-projects">
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