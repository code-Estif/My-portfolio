import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <p className="skills-sub">
        Core Technologies I Use in Production Projects
      </p>

      <div className="skills-grid">
        <div className="skill-card">
          <FaHtml5 />
          <span>HTML</span>
        </div>

        <div className="skill-card">
          <FaCss3Alt />
          <span>CSS</span>
        </div>

        <div className="skill-card">
          <FaJs />
          <span>JavaScript</span>
        </div>

        <div className="skill-card">
          <FaReact />
          <span>React</span>
        </div>

        <div className="skill-card">
          <FaGitAlt />
          <span>Git</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;