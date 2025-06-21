import React from 'react';
import './Project.css';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Code Editor",
    tech: "React & Firebase",
    image: "./../../images/codeEditior.png",
    description: "A web-based code editor that allows users to write and preview HTML, CSS, and JavaScript in real time with Firebase auth.",
    github: "https://github.com/chhayashah/code-editior"
  },
  {
    title: "Todo List",
    tech: "React",
    image: "./../../images/todo.jpg",
    description: "A simple and intuitive todo app built with React.",
    github: "https://github.com/chhayashah/new-todo"
  },
  {
    title: "Resume Generator",
    tech: "HTML, CSS & JS",
    image: "./../../images/resume.png",
    description: "Interactive resume builder that generates professional resumes.",
    github: "https://github.com/chhayashah/resume-generator"
  },
  {
    title: "LinkedIn Clone",
    tech: "React & Firebase",
    image: "./../../images/linkedin.jpg",
    description: "LinkedIn-inspired social platform with post sharing.",
    github: "https://github.com/chhayashah/linkedin"
  },
  {
    title: "E-commerce Website",
    tech: "React",
    image: "./../../images/ecommerce.jpg",
    description: "Frontend e-commerce site with product browsing and cart.",
    github: "https://github.com/chhayashah/food-delivery-app"
  },
  {
    title: "Course Monitoring System",
    tech: "Java, JDBC, MySQL",
    image: "./../../images/course.jpg",
    description: "Java-based console app for managing courses, batches, and faculty.",
    github: "https://github.com/chhayashah/ANPClasses/tree/main/courseMonitoringSystem"
  },
];

const Project = () => {
  return (
    <section id="projects" className="project-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p className="tech">{project.tech}</p>
            <p className="description">{project.description}</p>
            <a
              href={project.github}
              className="github-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
