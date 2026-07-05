import React from "react";
import Reveal from "../../components/common/Reveal";
import "./Experience.css";

const experiences = [
  {
    role: "Software Development Engineer ",
    company: "Innovestigia",
    location: "Jabalpur, MP",
    period: "Jun 2025 – Present",
    current: true,
    tech: ["React", "Redux", "JWT", "RBAC"],
    bullets: [
      "Designing secure, high-performance frontend for a role-based Gate Entry Management System using ReactJS + Redux; reduced component re-renders by 30% through optimised state architecture.",
      "Implemented JWT + RBAC authentication flows across all UI components, meeting industry-standard security practices.",
      "Led structured code reviews and enforced best practices across 3 concurrent Agile sprints, delivering production-ready dashboards.",
    ],
  },
  {
    role: "Java Developer Intern",
    company: "Anudip Foundation",
    location: "Jabalpur, MP",
    period: "Jul 2024 – Sep 2024",
    current: false,
    tech: ["Java", "JDBC", "SQL", "DAO"],
    bullets: [
      "Built Java modules using JDBC, SQL, and the DAO design pattern with robust input validation and exception handling.",
      "Applied OOP principles throughout the Course Monitoring System, collaborating directly with mentor for structured reviews.",
    ],
  },
  {
    role: "React Web Development Intern",
    company: "Robotronix India Pvt. Ltd.",
    location: "Remote",
    period: "Jun 2023",
    current: false,
    tech: ["React"],
    bullets: [
      "Built dynamic components using ReactJS; improved UI responsiveness in production applications.",
    ],
  },
  {
    role: "Frontend Intern",
    company: "Vishal Education Academy",
    location: "Remote",
    period: "May 2023",
    current: false,
    tech: ["HTML", "CSS", "JavaScript"],
    bullets: [
      "Developed frontend UI with HTML, CSS, and JavaScript for educational web platforms.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="experience-section section">
    <div className="container exp-inner">
      <Reveal>
        <div className="section-header">
          <span className="section-eyebrow">Career timeline</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Four roles, one throughline: shipping secure, well-architected
            products and getting better with every sprint.
          </p>
        </div>
      </Reveal>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <Reveal
            key={i}
            delay={i * 0.06}
            className={`timeline-item${exp.current ? " current" : ""}`}
          >
            <div className="timeline-rail" aria-hidden="true">
              <span className="timeline-dot"></span>
            </div>
            <div className="timeline-card card">
              <div className="exp-top">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-company">
                    {exp.company} · {exp.location}
                  </span>
                </div>
                <span className={`exp-badge${exp.current ? " active" : ""}`}>
                  {exp.period}
                </span>
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="exp-tech">
                {exp.tech.map((t) => (
                  <span key={t} className="exp-tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
