import "../styles/Experience.css";
import { FaGraduationCap } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {/* First Item - Left Side */}
        <div className="timeline-item left">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-content">
            <h3>BSc.(Hons) Computer Engineering (Undergraduate)</h3>
            <h4>University of Peradeniya</h4>
            <span className="date">2022 – 2026</span>
            <p>
              Currently pursuing a Bachelor of Science in Computer Engineering, 
              focusing on software development, embedded systems, and emerging 
              technologies.
            </p>
          </div>
        </div>

        {/* Second Item - Right Side */}

        {/* Third Item - Left Side */}

      </div>
    </section>
  );
}

export default Experience;
