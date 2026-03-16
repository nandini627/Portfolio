// import React from 'react';
// import { FaGithub, FaLinkedin, FaTwitter, FaRocket } from 'react-icons/fa';
// import { SiSpacex } from 'react-icons/si';

// const Hero = () => {
//   return (
//     <section id="home" className="hero cosmic-bg">
//       <div className="stars"></div>
//       <div className="twinkling"></div>
//       <div className="container">
//         <div className="hero-content">
//           {/* <div className="hero-badge">
//             <FaRocket /> Aspiring Software Developer
//           </div> */}
//           <h1 className="hero-title cosmic-text">
//             Hello, I'm <span className="gradient-text">Nandini Prajapati</span>
//           </h1>
//           <h2 className="hero-subtitle">
//             Passionate about <span className="highlight-ai">AI/ML</span> & <span className="highlight-space">Innovative Technology</span>
//           </h2>
//           <p className="hero-description">
//             First-year B.E. Computer Science student from Gandhinagar, Gujarat. 
//             Eager to contribute to the evolving tech landscape with creativity and innovation.
//           </p>
//           <div className="hero-buttons">
//             <a href="#projects" className="btn cosmic-btn">
//               <SiSpacex /> View My Projects
//             </a>
//             <a 
//               href="#contact" 
//               className="btn btn-outline"
//             >
//               Let's Connect
//             </a>
//           </div>
//           <div className="hero-stats">
//             <div className="stat-item">
//               <div className="stat-number">2+</div>
//               <div className="stat-label">Projects</div>
//             </div>
//             <div className="stat-divider"></div>
//             <div className="stat-item">
//               <div className="stat-number">8+</div>
//               <div className="stat-label">Skills</div>
//             </div>
//             <div className="stat-divider"></div>
//             <div className="stat-item">
//               <div className="stat-number">100%</div>
//               <div className="stat-label">Passionate</div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="hero-image">
//           <div className="cosmic-orb">
//             <div className="orb-inner">
//               <div className="orb-content">
//                 <div className="tech-icons">
//                   <span className="icon-ai">🤖</span>
//                   <span className="icon-space">🚀</span>
//                   <span className="icon-code">💻</span>
//                 </div>
//               </div>
//             </div>
//             <div className="orb-ring"></div>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaRocket } from 'react-icons/fa';
import { SiSpacex } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="hero cosmic-bg">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="container">
        <div className="hero-wrapper">
          {/* Left side - Original Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <FaRocket /> Aspiring Software Developer
            </div>
            <h1 className="hero-title cosmic-text">
              Hello, I'm <span className="gradient-text">Nandini Prajapati</span>
            </h1>
            <h2 className="hero-subtitle">
              Passionate about <span className="highlight-ai">AI/ML</span> & <span className="highlight-space">Innovative Technology</span>
            </h2>
            <p className="hero-description">
              First-year B.E. Computer Science student from Gandhinagar, Gujarat. 
              Eager to contribute to the evolving tech landscape with creativity and innovation.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn cosmic-btn">
                <SiSpacex /> View My Projects
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline"
              >
                Let's Connect
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">8+</div>
                <div className="stat-label">Skills</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Passionate</div>
              </div>
            </div>
          </div>

          {/* Right side - Photo Section (ADDED) */}
          {/* Right side - Photo Section (ADDED) */}
<div className="hero-photo-side">
  <div className="photo-frame">
    {/* Option 1: Placeholder - Remove this when adding your photo */}
    <div className="photo-placeholder">
      <div className="initial">NP</div>
      <img 
        src="https://res.cloudinary.com/dxnsg3spg/image/upload/v1770363089/Screenshot_2026-02-06_125845_dwc6nw.png" 
        alt="Nandini Prajapati" 
      />
    </div>
    
    {/* Corner Glow Spots */}
    <div className="corner-glow top-left-glow"></div>
    <div className="corner-glow top-right-glow"></div>
    <div className="corner-glow bottom-left-glow"></div>
    <div className="corner-glow bottom-right-glow"></div>
    
    <div className="photo-orbits">
      <div className="orbit orbit-1"></div>
      <div className="orbit orbit-2"></div>
      <div className="orbit orbit-3"></div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;