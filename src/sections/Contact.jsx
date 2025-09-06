import "../styles/Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" disabled>Send Message</button>
        </form>

        {/* Contact Links */}
        <div className="contact-links">
          <p>Or reach me via:</p>
          <div className="links-container">
            <a href="mailto:your-email@example.com" target="_blank" rel="noreferrer">
              <FaEnvelope /> Email
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
