import React from "react";
import "./Home.css";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-bg-grid" aria-hidden="true"></div>
      <div className="home-content">
        <div className="home-text">
          <div className="home-badge">
            <span className="badge-dot"></span>
            Open to opportunities
          </div>
          <h1 className="home-name">Chhaya Shah</h1>
          <h2 className="home-title">Software Development Engineer</h2>
          <p className="home-bio">
            Full-stack engineer building scalable, production-grade systems.
            Specialising in ReactJS, Node.js, and secure API design — currently
            shipping a role-based Gate Entry Management System at Innovestigia.
          </p>

          <div className="home-tags">
            {[
              "ReactJS",
              "Node.js",
              "MongoDB",
              "MySQL",
              "JWT / RBAC",
              "REST APIs",
            ].map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="home-cta">
            <a
              href="./../../images/ChhayaShah_page-0001.jpg"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload /> Resume
            </a>
            <a href="#projects" className="btn-ghost">
              View Projects <FaArrowRight />
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://linkedin.com/in/chhaya-shah-2418b3239"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/chhayashah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/ChhayaS98601123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="home-image">
          <div className="avatar-ring">
            <img src="./../images/chhayashah.jpg" alt="Chhaya Shah" />
          </div>
          <div className="avatar-glow" aria-hidden="true"></div>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Home;
