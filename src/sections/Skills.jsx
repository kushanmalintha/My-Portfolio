import "../styles/Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiPython, SiCplusplus } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <FaHtml5 className="skill-icon html" />
          <p>HTML</p>
        </div>
        <div className="skill-card">
          <FaCss3Alt className="skill-icon css" />
          <p>CSS</p>
        </div>
        <div className="skill-card">
          <FaJs className="skill-icon js" />
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <FaReact className="skill-icon react" />
          <p>React</p>
        </div>
        <div className="skill-card">
          <FaNodeJs className="skill-icon node" />
          <p>Node.js</p>
        </div>
        <div className="skill-card">
          <SiMongodb className="skill-icon mongo" />
          <p>MongoDB</p>
        </div>
        <div className="skill-card">
          <SiFirebase className="skill-icon firebase" />
          <p>Firebase</p>
        </div>
        <div className="skill-card">
          <SiPython className="skill-icon python" />
          <p>Python</p>
        </div>
        <div className="skill-card">
          <SiCplusplus className="skill-icon cpp" />
          <p>C++</p>
        </div>
        <div className="skill-card">
          <FaGitAlt className="skill-icon git" />
          <p>Git</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
