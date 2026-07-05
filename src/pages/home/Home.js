import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import "./Home.css";

const stack = ["ReactJS", "Node.js", "MongoDB", "MySQL", "JWT / RBAC", "REST APIs"];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-bg-grid" aria-hidden="true"></div>
      <div className="home-bg-glow" aria-hidden="true"></div>

      <div className="home-content container">
        <div className="home-text">
          <motion.div className="home-badge" custom={0} initial="hidden" animate="show" variants={fadeUp}>
            <span className="badge-dot"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1 className="home-name" custom={1} initial="hidden" animate="show" variants={fadeUp}>
            Chhaya Shah
          </motion.h1>

          <motion.h2 className="home-title" custom={2} initial="hidden" animate="show" variants={fadeUp}>
            Software Development Engineer
          </motion.h2>

          <motion.p className="home-bio" custom={3} initial="hidden" animate="show" variants={fadeUp}>
            Full-stack engineer building scalable, production-grade systems.
            Specialising in ReactJS, Node.js, and secure API design — currently
            shipping a role-based Gate Entry Management System at Innovestigia.
          </motion.p>

          <motion.div className="home-tags" custom={4} initial="hidden" animate="show" variants={fadeUp}>
            {stack.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div className="home-cta" custom={5} initial="hidden" animate="show" variants={fadeUp}>
            <a
              href="./images/ChhayaShah_page-0001.jpg"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload /> Resume
            </a>
            <a href="#projects" className="btn btn-ghost">
              View Projects <FiArrowRight />
            </a>
          </motion.div>

          <motion.div className="social-icons" custom={6} initial="hidden" animate="show" variants={fadeUp}>
            <a
              href="https://linkedin.com/in/chhaya-shah-2418b3239"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </a>
            
              <a href="https://github.com/chhayashah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
            
              <a href="https://x.com/ChhayaS98601123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X profile"
            >
              <FaTwitter />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="home-image"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div className="avatar-ring">
            <img src="./images/chhayashah.jpg" alt="Portrait of Chhaya Shah" width="280" height="280" />
          </div>
          <div className="avatar-glow" aria-hidden="true"></div>
        </motion.div>
      </div>

      <motion.a
        href="#skills"
        className="scroll-hint"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span>scroll</span>
        <div className="scroll-line"></div>
      </motion.a>
    </section>
  ); 
};

export default Home;