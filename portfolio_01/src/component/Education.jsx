import React from 'react';
import { FaGraduationCap, FaSchool, FaUniversity, FaBook, FaCalendarAlt } from 'react-icons/fa';
import { GiDiploma } from 'react-icons/gi';

const Education = () => {
  const educationTimeline = [
    {
      period: "2023 - Present",
      degree: "Bachelor of Engineering (B.E.) in Computer Science",
      institution: "CodingGita x Swaminarayan University",
      location: "Gandhinagar, Gujarat",
      status: "Currently Pursuing (First Year)",
      icon: <FaUniversity />,
      description: "Building foundation in computer science fundamentals, programming, and software development.",
      courses: ["Programming Fundamentals", "Data Structures", "Web Development", "Mathematics for CS"]
    },
    {
      period: "Completed",
      degree: "Primary & Secondary Education",
      institution: "Amrit Lal Nihalchand Mangal Mandir Vidhyalaya",
      location: "Gujarat",
      status: "Completed",
      icon: <FaSchool />,
      description: "Completed schooling with focus on science and mathematics, laying groundwork for technical education.",
      achievements: ["Science Stream", "Mathematics Proficiency", "Computer Basics"]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-bg">Education Journey</span>
        </h2>
        
        <div className="education-intro">
          <p className="intro-text">
            My educational path reflects my growing passion for technology and 
            commitment to becoming a skilled software developer.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {educationTimeline.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-icon">
                  {edu.icon}
                </div>
                <div className="timeline-date">
                  <FaCalendarAlt /> {edu.period}
                </div>
              </div>
              
              <div className="timeline-content">
                <div className="content-header">
                  <h3>{edu.degree}</h3>
                  <span className={`status-badge ${edu.status === 'Currently Pursuing (First Year)' ? 'current' : 'completed'}`}>
                    {edu.status}
                  </span>
                </div>
                
                <div className="institution-info">
                  <div className="institution-name">
                    <FaGraduationCap /> {edu.institution}
                  </div>
                  <div className="institution-location">
                    📍 {edu.location}
                  </div>
                </div>
                
                <p className="education-description">{edu.description}</p>
                
                <div className="education-details">
                  <div className="details-section">
                    <h4>
                      <FaBook /> Key Focus Areas:
                    </h4>
                    <div className="skills-list">
                      {edu.courses ? (
                        edu.courses.map((course, i) => (
                          <span key={i} className="course-tag">{course}</span>
                        ))
                      ) : (
                        edu.achievements.map((achievement, i) => (
                          <span key={i} className="achievement-tag">{achievement}</span>
                        ))
                      )}
                    </div>
                  </div>
                </div>
                
                {edu.status === 'Currently Pursuing (First Year)' && (
                  <div className="current-focus">
                    <div className="focus-label">
                      <GiDiploma /> Current Focus:
                    </div>
                    <div className="focus-items">
                      <span>Building Programming Skills</span>
                      <span>Exploring AI/ML</span>
                      <span>Web Development Projects</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="education-extra">
          <div className="extra-card">
            <h3>Additional Learning</h3>
            <div className="learning-platforms">
              <div className="platform">
                <div className="platform-icon">🌐</div>
                <div className="platform-info">
                  <h4>Online Courses</h4>
                  <p>Supplementing university education with online resources</p>
                </div>
              </div>
              <div className="platform">
                <div className="platform-icon">💻</div>
                <div className="platform-info">
                  <h4>Self-Study Projects</h4>
                  <p>Building real projects to apply theoretical knowledge</p>
                </div>
              </div>
              <div className="platform">
                <div className="platform-icon">🤝</div>
                <div className="platform-info">
                  <h4>Tech Communities</h4>
                  <p>Engaging with developer communities for growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;