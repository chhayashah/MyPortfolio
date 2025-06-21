import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">

        <div className="experience-item">
          <h3>SDE Intern at Innovestigia Consulting</h3>
          <span className="date">June 2025 – Present</span>
          <p>Working as a Software Development Intern focusing on full-stack development tasks and feature enhancement.</p>
        </div>

        <div className="experience-item">
          <h3>Java Developer Intern at Anudip Foundation</h3>
          <span className="date">July 2024 – September 2024</span>
          <p>Developed a Course Monitoring System using Java, JDBC, and MySQL, applying core concepts of object-oriented programming.</p>
        </div>

        <div className="experience-item">
          <h3>React Web Development Intern at Robotronix India Pvt. Ltd.</h3>
          <span className="date">1 June 2023 – 15 June 2023</span>
          <p>Built dynamic components using ReactJS and improved UI responsiveness in real-world applications.</p>
        </div>

        <div className="experience-item">
          <h3>Frontend Intern at Vishal Education Academy</h3>
          <span className="date">1 May 2023 – 15 May 2023</span>
          <p>Worked on frontend UI using HTML, CSS, and JavaScript for educational web platforms.</p>
        </div>

      </div>
    </section>
  );
};

export default Experience;
