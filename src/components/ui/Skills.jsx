import './Skills.css';
import { skills } from '../../data/personalInfo';

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Mis <span>Habilidades</span></h2>
      <div className="skills__grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-icon">
            <span className="skill-icon__logo">{skill.icon}</span>
            <span className="skill-icon__name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
