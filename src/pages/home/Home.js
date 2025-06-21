import React from 'react';
import './Home.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h2>Chhaya Shah</h2>
          <h4>SDE Intern at Innovestigia Consulting</h4>
          <p>I’m a passionate Full Stack Developer with expertise in building responsive web applications using React and Java. I love solving problems and learning new technologies.</p>

          <div className="social-icons">
            <a href="https://linkedin.com/in/chhaya-shah-2418b3239" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/chhayashah" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://x.com/ChhayaS98601123" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>

          <a
            href="./../../images/CHHAYASHAHd.pdf"
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>

        <div className="home-image">
          <img src="./../images/chhayashah.jpg" alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
