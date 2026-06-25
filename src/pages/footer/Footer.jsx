import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="footer-inner">
      <div className="footer-left">
        <span className="footer-name">Chhaya Shah</span>
        <p className="footer-tag">
          SDE · Full-Stack Engineer · Open to opportunities
        </p>
      </div>
      <div className="footer-links">
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
        <a href="mailto:chhayashah9754@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Chhaya Shah. Built with ReactJS.</span>
    </div>
  </footer>
);

export default Footer;
