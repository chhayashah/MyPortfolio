import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava } from 'react-icons/fa';
import { SiMysql, SiJupyter, SiHibernate, SiBootstrap, SiMaterialdesign } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill"><FaHtml5 style={{ color: '#e34c26' }} className="icon" /><span>HTML</span></div>
        <div className="skill"><FaCss3Alt style={{ color: '#2965f1' }} className="icon" /><span>CSS</span></div>
        <div className="skill"><FaJsSquare style={{ color: '#f0db4f' }} className="icon" /><span>JavaScript</span></div>
        <div className="skill"><FaReact style={{ color: '#61dbfb' }} className="icon" /><span>React</span></div>
        <div className="skill"><FaJava style={{ color: '#f89820' }} className="icon" /><span>Java</span></div>
        <div className="skill"><SiMysql style={{ color: '#00758f' }} className="icon" /><span>MySQL</span></div>
        <div className="skill"><SiJupyter style={{ color: '#f37726' }} className="icon" /><span>JDBC</span></div>
        <div className="skill"><SiHibernate style={{ color: '#59666C' }} className="icon" /><span>Hibernate</span></div>
        <div className="skill"><SiBootstrap style={{ color: '#7952b3' }} className="icon" /><span>Bootstrap</span></div>
        <div className="skill"><SiMaterialdesign style={{ color: '#757575' }} className="icon" /><span>Material UI</span></div>
      </div>
    </section>
  );
};

export default Skills;
