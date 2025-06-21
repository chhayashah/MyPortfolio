import React from 'react';
import './Navbar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const PortfolioNavbar = () => {
  return (
    <Navbar expand="lg" className="portfolio-navbar">
      <Container>
        <Navbar.Brand className="portfolio-brand">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar-nav" />
        <Navbar.Collapse id="portfolio-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#about">About</Nav.Link> */}
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#footer">Footer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
