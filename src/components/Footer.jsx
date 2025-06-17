import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.from(".tg-footer-container", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".tg-footer-container",
        start: "top bottom",
      },
    });
  }, []);

  return (
    <footer className="tg-footer-container bg-gray-900 text-white px-6 py-8 md:px-20">
      {/* Dropdown Toggle for Mobile */}
      <div className="tg-footer-toggle md:hidden flex justify-between items-center mb-4">
        <h2 className="tg-footer-title text-xl font-bold">Connect with Me</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="tg-footer-toggle-btn text-white border p-2 rounded hover:bg-gray-700"
        >
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>

      <div className={`tg-footer-grid grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ${isOpen ? "block" : "hidden md:grid"}`}>
        {/* About Section */}
        <div className="tg-footer-about">
          <h3 className="tg-footer-subheading text-lg font-semibold mb-2">About Me</h3>
          <p className="tg-footer-text text-gray-400 text-sm leading-relaxed">
            Passionate full stack developer with experience in MERN and Python-based web systems.
            Building smart, responsive, animated portfolios and apps.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="tg-footer-links">
          <h3 className="tg-footer-subheading text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="tg-footer-list text-sm text-gray-400 space-y-1">
            <li><a href="#home" className="tg-footer-link hover:text-white">Home</a></li>
            <li><a href="#skills" className="tg-footer-link hover:text-white">Skills</a></li>
            <li><a href="#projects" className="tg-footer-link hover:text-white">Projects</a></li>
            <li><a href="#certifications" className="tg-footer-link hover:text-white">Certifications</a></li>
            <li><a href="#contact" className="tg-footer-link hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="tg-footer-social">
          <h3 className="tg-footer-subheading text-lg font-semibold mb-2">Follow Me</h3>
          <div className="tg-footer-icons flex space-x-4 text-2xl text-gray-300 mt-2">
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="tg-icon hover:text-white transition-all duration-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="tg-icon hover:text-white transition-all duration-300">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/your-profile" target="_blank" rel="noreferrer" className="tg-icon hover:text-white transition-all duration-300">
              <FaInstagram />
            </a>
            <a href="mailto:your@email.com" className="tg-icon hover:text-white transition-all duration-300">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="tg-footer-bottom mt-8 border-t border-gray-700 pt-4 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Thangadurai. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
