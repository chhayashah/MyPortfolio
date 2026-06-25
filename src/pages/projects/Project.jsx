import React from "react";
import "./Project.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDatabase,
  FaBolt,
  FaBrain,
  FaCode,
  FaUsers,
  FaStream,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiSocketdotio,
  SiReact,
  SiExpress,
  SiFirebase,
} from "react-icons/si";

const featured = [
  {
    title: "DataSphere",
    subtitle: "Real-Time Data Analytics Platform",
    stack: ["MERN", "Socket.io", "JWT", "RBAC", "MongoDB"],
    description:
      "Full-stack analytics platform with MVC architecture, real-time Socket.io dashboards, and a CSV ingestion pipeline. MongoDB aggregation reduced query time by ~40%.",
    metrics: [
      { icon: <FaBolt />, value: "~40%", label: "faster queries" },
      { icon: <FaDatabase />, value: "100%", label: "CSV success rate" },
      { icon: <FaUsers />, value: "Multi", label: "user JWT sessions" },
    ],
    github: "https://github.com/chhayashah/DataSpheree",
    live: true,
    color: "#6366f1",
  },
  {
    title: "JobSpark",
    subtitle: "AI-Powered Job Portal",
    stack: ["ReactJS", "Node.js", "MongoDB", "MySQL", "Socket.io", "JWT"],
    description:
      "AI resume matching with TF-IDF + cosine similarity, dual-database architecture, real-time Socket.io notifications, and recruiter analytics via Recharts.",
    metrics: [
      { icon: <FaBrain />, value: "TF-IDF", label: "AI matching" },
      { icon: <FaDatabase />, value: "Dual DB", label: "MongoDB + MySQL" },
      { icon: <FaStream />, value: "Live", label: "recruiter analytics" },
    ],
    github: "https://github.com/chhayashah/jobspark_job-portal",
    live: false,
    color: "#8b5cf6",
  },
];

const others = [
  {
    title: "Code Editor",
    subtitle: "Browser-Based IDE",
    stack: ["React", "Firebase"],
    icon: <FaCode />,
    desc: "Real-time HTML/CSS/JS preview with Firebase auth.",
    github: "https://github.com/chhayashah/code-editior",
  },
  {
    title: "LinkedIn Clone",
    subtitle: "Social Platform",
    stack: ["React", "Firebase"],
    icon: <SiFirebase />,
    desc: "Post sharing, user feeds, Firebase-backed auth.",
    github: "https://github.com/chhayashah/linkedin",
  },
  {
    title: "Resume Generator",
    subtitle: "Interactive Builder",
    stack: ["HTML", "CSS", "JS"],
    icon: <FaCode />,
    desc: "Generates downloadable professional resumes.",
    github: "https://github.com/chhayashah/resume-generator",
  },
  {
    title: "Course Monitoring",
    subtitle: "Java Console App",
    stack: ["Java", "JDBC", "MySQL"],
    icon: <SiMysql />,
    desc: "Manages courses, batches, and faculty with DAO pattern.",
    github:
      "https://github.com/chhayashah/ANPClasses/tree/main/courseMonitoringSystem",
  },
];

const stackIconMap = {
  MongoDB: <SiMongodb style={{ color: "#4DB33D" }} />,
  MySQL: <SiMysql style={{ color: "#00758f" }} />,
  "Socket.io": <SiSocketdotio />,
  ReactJS: <SiReact style={{ color: "#61dbfb" }} />,
  React: <SiReact style={{ color: "#61dbfb" }} />,
};

const Project = () => (
  <section id="projects" className="project-section">
    <div className="proj-inner">
      <div className="section-header">
        <span className="section-eyebrow">What I've built</span>
        <h2 className="section-title">Projects</h2>
      </div>

      {/* Featured Cards */}
      <div className="featured-grid">
        {featured.map((p, i) => (
          <div key={i} className="feat-card" style={{ "--accent": p.color }}>
            <div className="feat-top">
              <div>
                <span className="feat-badge">Featured Project</span>
                <h3 className="feat-title">{p.title}</h3>
                <p className="feat-subtitle">{p.subtitle}</p>
              </div>
              <div className="feat-links">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                {p.live && (
                  <a href="#projects" title="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>

            <p className="feat-desc">{p.description}</p>

            <div className="feat-metrics">
              {p.metrics.map((m, j) => (
                <div key={j} className="metric">
                  <span className="metric-icon">{m.icon}</span>
                  <span className="metric-value">{m.value}</span>
                  <span className="metric-label">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="feat-stack">
              {p.stack.map((t) => (
                <span key={t} className="stack-tag">
                  {stackIconMap[t] && (
                    <span className="stack-icon">{stackIconMap[t]}</span>
                  )}
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects */}
      <div className="other-header">
        <span className="section-eyebrow">More work</span>
      </div>
      <div className="other-grid">
        {others.map((p, i) => (
          <div key={i} className="other-card">
            <div className="other-top">
              <span className="other-icon">{p.icon}</span>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="other-gh"
              >
                <FaGithub />
              </a>
            </div>
            <h3 className="other-title">{p.title}</h3>
            <p className="other-sub">{p.subtitle}</p>
            <p className="other-desc">{p.desc}</p>
            <div className="other-stack">
              {p.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Project;
