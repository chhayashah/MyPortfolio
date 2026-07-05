import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiPostman,
  SiGithub,
} from "react-icons/si";
import Reveal from "../../components/common/Reveal";
import "./Skills.css";

const skillCategories = [
  {
    label: "Languages",
    skills: [
      { icon: <FaJsSquare />, name: "JavaScript (ES6+)", color: "#f0db4f" },
      { icon: <FaPython />, name: "Python", color: "#3776AB" },
      { icon: <FaJava />, name: "Java", color: "#f89820" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { icon: <FaReact />, name: "ReactJS", color: "#61dbfb" },
      { icon: <SiRedux />, name: "Redux", color: "#764abc" },
      { icon: <FaHtml5 />, name: "HTML5", color: "#e34c26" },
      { icon: <FaCss3Alt />, name: "CSS3", color: "#2965f1" },
    ],
  },
  {
    label: "Backend & Databases",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js", color: "#68a063" },
      { icon: <SiExpress />, name: "Express.js", color: "#b0b3ba" },
      { icon: <SiMysql />, name: "MySQL", color: "#00758f" },
      { icon: <SiMongodb />, name: "MongoDB", color: "#4DB33D" },
    ],
  },
  {
    label: "Tools & Practices",
    skills: [
      { icon: <FaGitAlt />, name: "Git", color: "#f05032" },
      { icon: <SiGithub />, name: "GitHub", color: "#b0b3ba" },
      { icon: <SiPostman />, name: "Postman", color: "#ef5b25" },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="skills-section section">
    <div className="container">
      <Reveal>
        <div className="section-header">
          <span className="section-eyebrow">What I work with</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A focused toolkit for building secure, scalable full-stack products
            — from pixel-perfect UI to resilient APIs and data layers.
          </p>
        </div>
      </Reveal>

      <div className="skills-categories">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.label} delay={i * 0.08} className="skill-category">
            <h3 className="category-label">{cat.label}</h3>
            <div className="skill-grid">
              {cat.skills.map(({ icon, name, color }) => (
                <div key={name} className="skill-chip">
                  <span className="skill-icon" style={{ color }}>
                    {icon}
                  </span>
                  <span className="skill-name">{name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
