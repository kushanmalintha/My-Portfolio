import "../styles/Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // icons

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Left Column */}
        <div className="hero-text">
          <h1>Hi, I’m <span className="highlight">Kushan ,alintha</span></h1>
          <p>
            I’m a passionate <strong>Computer Engineer</strong> who loves building 
            applications and exploring new technologies.
          </p>

          <div className="hero-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <FaGithub className="icon" /> GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <FaLinkedin className="icon" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="hero-image">
          <div className="image-wrapper">
            <img src="/src/assets/profile.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
