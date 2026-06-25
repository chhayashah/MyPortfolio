import React from "react";
import "./experience.css";

const experiences = [
  {
    role: "Software Development Engineer 1",
    company: "Innovestigia",
    location: "Jabalpur, MP",
    period: "Jun 2025 – Present",
    current: true,
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
    bullets: [
      "Developed frontend UI with HTML, CSS, and JavaScript for educational web platforms.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="experience-section">
    <div className="exp-inner">
      <div className="section-header">
        <span className="section-eyebrow">Career timeline</span>
        <h2 className="section-title">Experience</h2>
      </div>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`timeline-item${exp.current ? " current" : ""}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-card">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
