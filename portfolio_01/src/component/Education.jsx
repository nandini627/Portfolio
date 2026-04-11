import React from 'react';
import { FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaUserGraduate, FaVideo, FaLightbulb } from 'react-icons/fa';
import { FaUserGroup, FaBuildingColumns } from 'react-icons/fa6';
import useScrollReveal from '../hooks/useScrollReveal';

const Education = () => {
  useScrollReveal();
  const educationData = [
    {
      period: "2025 - Present",
      degree: "Bachelor of Engineering (B.E.) in Computer Science",
      institution: "CodingGita x Swaminarayan University",
      location: "Gandhinagar, Gujarat",
      status: "Currently Pursuing",
      icon: <FaUserGraduate className="cosmic-icon" />,
      description: "Building a strong foundation in computer science fundamentals, programming, and software development.",
      tags: ["Programming", "Data Structures", "Web Development", "Mathematics for CS"]
    },
    {
      period: "Completed",
      degree: "Primary & Secondary Education",
      institution: "Amrit Lal Nihalchand Mangal Mandir Vidhyalaya",
      location: "Gujarat",
      status: "Completed",
      icon: <FaBuildingColumns className="cosmic-icon" />,
      description: "Completed schooling with focus on science and mathematics, laying the groundwork for technical education.",
      tags: ["Science Stream", "Mathematics", "Computer Basics"]
    }
  ];

  return (
    <section id="education" className="education" style={{ background: 'transparent' }}>
      <div className="container">
        <h2 className="section-title reveal-on-scroll">
          <span className="section-title-bg">Education Journey</span>
        </h2>

        <div className="edu-cards-grid">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`edu-card reveal-on-scroll ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="edu-card-top">
                <span className="edu-icon">
                  {edu.icon}
                </span>
                <span className={`edu-badge ${edu.status === 'Currently Pursuing' ? 'badge-current' : 'badge-done'}`}>
                  {edu.status}
                </span>
              </div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">
                <FaUniversity style={{ marginRight: 8, color: 'var(--theme-pink)' }} />
                {edu.institution}
              </p>
              <p className="edu-meta">
                <FaMapMarkerAlt style={{ marginRight: 6, color: 'var(--theme-pink)' }} />
                {edu.location}
                &nbsp;&nbsp;
                <FaCalendarAlt style={{ marginRight: 6, color: 'var(--theme-pink)' }} />
                {edu.period}
              </p>
              <p className="edu-description">{edu.description}</p>
              <div className="edu-tags">
                {edu.tags.map((tag, i) => (
                  <span key={i} className="edu-tag shadow-glow">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="extra-learning-grid">
          {[
            { icon: <FaVideo className="cosmic-icon" />, title: 'Online Courses', desc: 'Supplementing university education with platforms like Coursera, Udemy, and YouTube.' },
            { icon: <FaLightbulb className="cosmic-icon" />, title: 'Self-Study Projects', desc: 'Building real projects to apply theoretical knowledge practically.' },
            { icon: <FaUserGroup className="cosmic-icon" />, title: 'Tech Communities', desc: 'Engaging with developer communities for growth and networking.' }
          ].map((item, i) => (
            <div 
              key={i} 
              className={`extra-card reveal-on-scroll ${i === 0 ? 'reveal-left' : i === 2 ? 'reveal-right' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="extra-card-icon">
                {item.icon}
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;