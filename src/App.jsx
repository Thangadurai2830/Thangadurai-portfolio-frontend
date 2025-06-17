import React from "react";

// ✅ Import all components correctly
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
const App = () => {
  return (
    <div className="tg-app-container">
      {/* ✅ Navbar stays fixed at top */}
      <Navbar />

      {/* ✅ Hero already includes <section id="home"> inside it */}
      <Hero />

      {/* ✅ Other sections wrapped here */}
      <section id="about" className="tg-about-section">
        <About />
      </section>

      <section id="education">
         <Education />
      </section>


      <section id="skills" className="tg-skills-section">
        <Skills />
      </section>

      <section id="projects" className="tg-projects-section">
        <Projects />
      </section>

      <section id="certifications" className="tg-certifications-section">
        <Certifications />
      </section>

      <section id="achievements" className="tg-achievements-section">
        <Achievements />
      </section>

      <section id="contact" className="tg-contact-section">
        <Contact />
      </section>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default App;
