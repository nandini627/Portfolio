import React from 'react';
import './App.css';
import './component/UniverseBackground.jsx';
import Navbar from './component/Navbar.jsx';
import Hero from './component/Hero.jsx';
import About from './component/About.jsx';
import Skills from './component/Skills.jsx';
import Projects from './component/projects.jsx';
import Education from './component/Education.jsx';
import Contact from './component/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;