import { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import { gsap } from 'gsap';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(".tg-navbar", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'certifications', label: 'Certifications' },
    { to: 'achievements', label: 'Achievements' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="tg-navbar fixed top-0 left-0 w-full z-50 bg-white shadow-lg px-6 md:px-20 py-4">
      <div className="tg-navbar-wrapper flex justify-between items-center">
        {/* Logo */}
        <h1 className="tg-logo text-2xl font-bold text-indigo-600">Thangadurai</h1>

        {/* Desktop Menu */}
        <ul className="tg-desktop-menu hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.to} className="tg-desktop-item">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="tg-desktop-link cursor-pointer hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="tg-menu-toggle md:hidden">
          <button onClick={toggleMenu} className="tg-toggle-icon text-3xl text-gray-800">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="tg-mobile-menu mt-4 flex flex-col md:hidden space-y-3 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.to} className="tg-mobile-item">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="tg-mobile-link block py-2 px-2 rounded hover:bg-indigo-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
