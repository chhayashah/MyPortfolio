import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import ThemeToggle from "../common/ThemeToggle";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "footer", label: "Contact" },
];

const PortfolioNavbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 12);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);

    let current = "home";
    for (const { id } of NAV_LINKS) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 140) current = id;
    }
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav-header${scrolled ? " scrolled" : ""}`}>
      <div className="nav-progress" style={{ width: `${progress}%` }} aria-hidden="true"></div>
      <nav className="nav-inner container" aria-label="Primary">
        <a
          href="#home"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
        >
          CS<span className="nav-brand-dot">.</span>
        </a>

        <ul className="nav-links">
          
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <a
            href="./images/ChhayaShah_page-0001.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-resume-btn"
          >
            Resume <FiArrowUpRight />
          </a>
          <button
            type="button"
            className="nav-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {NAV_LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="./images/ChhayaShah_page-0001.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Resume <FiArrowUpRight />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default PortfolioNavbar;