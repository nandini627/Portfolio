import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiC, SiPostman } from 'react-icons/si';
import { RiNodejsLine } from 'react-icons/ri';
import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  useScrollReveal();
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
      ]
    },
    {
      title: 'Backend & Programming',
      skills: [
        { name: 'Node.js', icon: <RiNodejsLine />, color: '#339933' },
        { name: 'C Language', icon: <SiC />, color: '#A8B9CC' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">
          <span className="section-title-bg">Technical Skills</span>
        </h2>
        
        <div className="skills-container">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-section">
              <h3 className="category-title reveal-on-scroll">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={skill.name} 
                    className="skill-card attractive-card reveal-on-scroll"
                    style={{ 
                      '--skill-color': skill.color,
                      transitionDelay: `${sIdx * 0.1}s`
                    }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <div className="skill-hover-effect"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="learning-next attractive-learning reveal-on-scroll">
          <h3 className="learning-title">Innovating With</h3>
          <div className="learning-tags">
            <span className="tech-tag pink-tag">AI / ML</span>
            <span className="tech-tag white-tag">Deep Learning</span>
            <span className="tech-tag purple-tag">Cloud Tech</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;