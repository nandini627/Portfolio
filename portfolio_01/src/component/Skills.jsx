import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiC, SiPostman } from 'react-icons/si';
import { RiNodejsLine } from 'react-icons/ri';

const Skills = () => {
  const skills = [
    { 
      name: 'HTML5', 
      icon: <FaHtml5 />, 
      // level: 90,
      category: 'Frontend',
      color: '#E34F26'
    },
    { 
      name: 'CSS3', 
      icon: <FaCss3Alt />, 
      // level: 85,
      category: 'Frontend',
      color: '#1572B6'
    },
    { 
      name: 'JavaScript', 
      icon: <FaJs />, 
      // level: 80,
      category: 'Full Stack',
      color: '#F7DF1E'
    },
    { 
      name: 'React.js', 
      icon: <FaReact />, 
      // level: 75,
      category: 'Frontend',
      color: '#61DAFB'
    },
    { 
      name: 'Node.js', 
      icon: <RiNodejsLine />, 
      // level: 70,
      category: 'Backend',
      color: '#339933'
    },
    { 
      name: 'C Language', 
      icon: <SiC />, 
      // level: 85,
      category: 'Programming',
      color: '#A8B9CC'
    },
    { 
      name: 'Git & GitHub', 
      icon: <FaGitAlt />, 
      // level: 80,
      category: 'Tools',
      color: '#F05032'
    },
    { 
      name: 'Postman API', 
      icon: <SiPostman />, 
      // level: 75,
      category: 'Tools',
      color: '#FF6C37'
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-bg">My Skills</span>
        </h2>
        
        <div className="skills-container">
          <div className="skills-grid">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="skill-card"
                style={{ '--skill-color': skill.color }}
              >
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <span className="skill-category">{skill.category}</span>
                {/* Optional: Add back level if needed
                <div className="skill-level">
                  <span className="skill-percentage">{skill.level}%</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`
                      }}
                    ></div>
                  </div>
                </div>
                */}
                <div className="skill-glow" style={{ backgroundColor: `${skill.color}20` }}></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="learning-next">
          <h3 className="learning-title">Currently Learning & Exploring</h3>
          <div className="learning-tags">
            <span className="tech-tag ai-tag">Artificial Intelligence</span>
            <span className="tech-tag ml-tag">Machine Learning</span>
            <span className="tech-tag api-tag">Advanced APIs</span>
            <span className="tech-tag ui-tag">UI/UX Design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;