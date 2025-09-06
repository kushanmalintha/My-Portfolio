import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleLinkClick = () => setIsOpen(false); // close menu on link click

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#hero">MyPortfolio</a>
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
          {/* <li><a href="#achievements" onClick={handleLinkClick}>Achievements</a></li> */}
          <li><a href="#contact" onClick={handleLinkClick} className="contact-btn">Contact Me</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="nav-toggle" onClick={handleToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
