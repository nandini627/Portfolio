import React from 'react';
import { FaGraduationCap, FaSchool, FaUniversity, FaBook, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      period: "2023 - Present",
      degree: "Bachelor of Engineering (B.E.) in Computer Science",
      institution: "CodingGita x Swaminarayan University",
      location: "Gandhinagar, Gujarat",
      status: "Currently Pursuing",
      icon: "🎓",
      description: "Building a strong foundation in computer science fundamentals, programming, and software development.",
      tags: ["Programming", "Data Structures", "Web Development", "Mathematics for CS"]
    },
    {
      period: "Completed",
      degree: "Primary & Secondary Education",
      institution: "Amrit Lal Nihalchand Mangal Mandir Vidhyalaya",
      location: "Gujarat",
      status: "Completed",
      icon: "🏫",
      description: "Completed schooling with focus on science and mathematics, laying the groundwork for technical education.",
      tags: ["Science Stream", "Mathematics", "Computer Basics"]
    }
  ];

  return (
    <section id="education" className="education" style={{ background: 'transparent' }}>
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-bg">Education Journey</span>
        </h2>

        <div className="edu-cards-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="edu-card">
              <div className="edu-card-top">
                <span className="edu-icon">{edu.icon}</span>
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
                  <span key={i} className="edu-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="extra-learning-grid">
          {[
            { icon: '🌐', title: 'Online Courses', desc: 'Supplementing university education with platforms like Coursera, Udemy, and YouTube.' },
            { icon: '💻', title: 'Self-Study Projects', desc: 'Building real projects to apply theoretical knowledge practically.' },
            { icon: '🤝', title: 'Tech Communities', desc: 'Engaging with developer communities for growth and networking.' }
          ].map((item, i) => (
            <div key={i} className="extra-card">
              <div className="extra-card-icon">{item.icon}</div>
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