import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <nav className="footer-nav">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </nav>

      <div className="footer-icons">
        <a href="https://linkedin.com/in/chhaya-shah-2418b3239" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/chhayashah" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://x.com/ChhayaS98601123" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>

      <p>© {new Date().getFullYear()} Chhaya Shah</p>
    </footer>
  );
};

export default Footer;
