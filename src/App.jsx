import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import AdditionalSkills from './components/AdditionalSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <AdditionalSkills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
