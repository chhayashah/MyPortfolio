import React from "react";
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
  SiFirebase,
} from "react-icons/si";
import Reveal from "../../components/common/Reveal";
import "./Project.css";

const featured = [
  {
    title: "DataSphere",
    subtitle: "Real-Time Data Analytics Platform",
    stack: ["MERN", "Socket.io", "JWT", "RBAC", "MongoDB"],
    problem:
      "Teams needed a way to ingest large CSV datasets and see analytics update live, without a slow, single-user dashboard.",
    solution:
      "Built a full-stack MVC platform with Socket.io-powered live dashboards and a resilient CSV ingestion pipeline.",
    description:
      "Full-stack analytics platform with MVC architecture, real-time Socket.io dashboards, and a CSV ingestion pipeline. MongoDB aggregation reduced query time by ~40%.",
    metrics: [
      { icon: <FaBolt />, value: "~40%", label: "faster queries" },
      { icon: <FaDatabase />, value: "100%", label: "CSV success rate" },
      { icon: <FaUsers />, value: "Multi", label: "user JWT sessions" },
    ],
    github: "https://github.com/chhayashah/DataSpheree",
    live: false,
    color: "#6e6bfa",
  },
  {
    title: "JobSpark",
    subtitle: "AI-Powered Job Portal",
    stack: ["ReactJS", "Node.js", "MongoDB", "MySQL", "Socket.io", "JWT"],
    problem:
      "Recruiters were manually screening resumes with no signal on fit, and candidates had no visibility into match quality.",
    solution:
      "Shipped a TF-IDF + cosine-similarity matching engine with a dual-database architecture and live recruiter analytics.",
    description:
      "AI resume matching with TF-IDF + cosine similarity, dual-database architecture, real-time Socket.io notifications, and recruiter analytics via Recharts.",
    metrics: [
      { icon: <FaBrain />, value: "TF-IDF", label: "AI matching" },
      { icon: <FaDatabase />, value: "Dual DB", label: "MongoDB + MySQL" },
      { icon: <FaStream />, value: "Live", label: "recruiter analytics" },
    ],
    github: "https://github.com/chhayashah/jobspark_job-portal",
    live: false,
    color: "#3ecf8e",
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
  <section id="projects" className="project-section section">
    <div className="container proj-inner">
      <Reveal>
        <div className="section-header">
          <span className="section-eyebrow">What I've built</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Selected work spanning real-time systems, AI-assisted matching, and
            developer tooling.
          </p>
        </div>
      </Reveal>

      <div className="featured-grid">
        {featured.map((p, i) => (
          <Reveal
            key={i}
            delay={i * 0.1}
            className="feat-card card"
            as="article"
            style={{ "--accent": p.color }}
          >
            <div>
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
                    aria-label={`${p.title} source on GitHub`}
                  >
                    <FaGithub />
                  </a>
                  {p.live && (
                    <a href="#projects" aria-label={`${p.title} live demo`}>
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <p className="feat-desc">{p.description}</p>

              <div className="feat-case">
                <div>
                  <span className="feat-case-label">Problem</span>
                  <p>{p.problem}</p>
                </div>
                <div>
                  <span className="feat-case-label">Solution</span>
                  <p>{p.solution}</p>
                </div>
              </div>

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
          </Reveal>
        ))}
      </div>

      <Reveal className="other-header">
        <span className="section-eyebrow">More work</span>
      </Reveal>
      <div className="other-grid">
        {others.map((p, i) => (
          <Reveal
            key={i}
            delay={i * 0.05}
            className="other-card card"
            as="article"
          >
            <div className="other-top">
              <span className="other-icon">{p.icon}</span>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="other-gh"
                aria-label={`${p.title} source on GitHub`}
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
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Project;
