import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const sections = ["home", "skills", "experience", "projects", "footer"];

const PortfolioNavbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find which section is currently in view
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`portfolio-navbar${scrolled ? " scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand className="portfolio-brand">CS</Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar-nav" />
        <Navbar.Collapse
          id="portfolio-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {sections
              .filter((s) => s !== "footer")
              .map((id) => (
                <Nav.Link
                  key={id}
                  href={`#${id}`}
                  className={active === id ? "nav-active" : ""}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Nav.Link>
              ))}
            <Nav.Link
              href="#footer"
              className={active === "footer" ? "nav-active" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
