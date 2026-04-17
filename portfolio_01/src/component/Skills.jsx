import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiC, SiPostman, SiCplusplus, SiTailwindcss, SiRender, SiVercel, SiNetlify } from 'react-icons/si';
import { RiNodejsLine } from 'react-icons/ri';
import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  useScrollReveal();
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5',      icon: <FaHtml5 />,       color: '#E34F26' },
        { name: 'CSS3',       icon: <FaCss3Alt />,     color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />,          color: '#F7DF1E' },
        { name: 'React.js',   icon: <FaReact />,       color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
      ]
    },
    {
      title: 'Backend & Programming',
      skills: [
        { name: 'Node.js',    icon: <RiNodejsLine />,  color: '#339933' },
        { name: 'C Language', icon: <SiC />,           color: '#A8B9CC' },
        { name: 'C++',        icon: <SiCplusplus />,   color: '#00599C' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', icon: <FaGitAlt />,   color: '#F05032' },
        { name: 'Postman',      icon: <SiPostman />,  color: '#FF6C37' },
        { name: 'Render',       icon: <SiRender />,   color: '#000000' },
        { name: 'Vercel',       icon: <SiVercel />,   color: '#FFFFFF' },
        { name: 'Netlify',      icon: <SiNetlify />,  color: '#00C7B7' },
      ]
    }
  ];

  // Unique float profiles so every card bobs independently
  const floatProfiles = [
    { dur: '3.2s', delay: '0s',    height: '12px' },
    { dur: '4.1s', delay: '-1.3s', height: '16px' },
    { dur: '3.7s', delay: '-2.6s', height: '10px' },
    { dur: '4.5s', delay: '-0.8s', height: '14px' },
    { dur: '3.4s', delay: '-3.1s', height: '18px' },
    { dur: '5.0s', delay: '-1.9s', height: '11px' },
    { dur: '3.9s', delay: '-0.5s', height: '15px' },
    { dur: '4.3s', delay: '-2.2s', height: '13px' },
  ];

  let globalIdx = 0;

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
                {category.skills.map((skill, sIdx) => {
                  const profile = floatProfiles[globalIdx % floatProfiles.length];
                  globalIdx++;
                  return (
                    /* Outer div handles the scroll-reveal transform */
                    <div
                      key={skill.name}
                      className="reveal-on-scroll"
                      style={{ transitionDelay: `${sIdx * 0.1}s` }}
                    >
                      {/* Inner div handles the float animation — separate layer */}
                      <div
                        className="skill-card attractive-card"
                        style={{
                          '--skill-color': skill.color,
                          '--float-dur':   profile.dur,
                          '--float-delay': profile.delay,
                          '--float-h':     profile.height,
                        }}
                      >
                        {/* Ambient glow blob behind icon */}
                        <div className="skill-glow-blob" style={{ background: skill.color }} />

                        <div className="skill-icon" style={{ color: skill.color }}>
                          {skill.icon}
                        </div>
                        <h4 className="skill-name">{skill.name}</h4>
                      </div>
                    </div>
                  );
                })}
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