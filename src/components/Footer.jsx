import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Navigation */}
        <nav className="footer-nav">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Kushan Malintha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
