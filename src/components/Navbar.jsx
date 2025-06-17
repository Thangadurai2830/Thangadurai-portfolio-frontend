import React from "react";
// import "../styles/Navbar.css"; // make sure path is correct
import "../css/Navbar.css"; // Adjust the path as necessary
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-inner">
        <h1 className="navbar-title">Thangadurai</h1>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
