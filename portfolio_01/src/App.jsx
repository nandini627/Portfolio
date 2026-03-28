import React from 'react';
import './App.css';
import UniverseBackground from './component/UniverseBackground.jsx';
import Navbar from './component/Navbar.jsx';
import Hero from './component/Hero.jsx';
import About from './component/About.jsx';
import Skills from './component/Skills.jsx';
import Projects from './component/projects.jsx';
import Education from './component/Education.jsx';
import Certificates from './component/Certificates.jsx';
import Footer from './component/Footer.jsx';

function App() {
  return (
    <div className="App">
      <UniverseBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;