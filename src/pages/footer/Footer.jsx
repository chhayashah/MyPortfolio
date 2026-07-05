import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FiSend, FiCheck } from "react-icons/fi";
import Reveal from "../../components/common/Reveal";
import "./Footer.css";

const EMAIL = "chhayashah9754@gmail.com";

const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("success");
    }, 700);
  };

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <footer id="footer" className="footer">
      <div className="container footer-inner">
        <Reveal className="footer-intro">
          <span className="section-eyebrow">Get in touch</span>
          <h2 className="section-title">Let's build something great</h2>
          <p className="section-subtitle">
            Open to full-time SDE roles and interesting collaborations. The
            fastest way to reach me is the form, or drop a line directly.
          </p>

          <div className="footer-contact-links">
            <a href={`mailto:${EMAIL}`} className="footer-contact-link">
              <FaEnvelope /> {EMAIL}
            </a>
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
          </div>
        </Reveal>

        <Reveal delay={0.1} className="footer-form-wrap card">
          {status === "success" ? (
            <div className="form-success" role="status">
              <span className="form-success-icon">
                <FiCheck />
              </span>
              <h3>Message ready to send</h3>
              <p>
                Your email client should be open with the message pre-filled.
                Talk soon!
              </p>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setStatus("idle")}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Jane Doe"
                />
                {errors.name && (
                  <span className="form-error" id="name-error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="jane@company.com"
                />
                {errors.email && (
                  <span className="form-error" id="email-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  placeholder="Tell me a bit about the role or project..."
                />
                {errors.message && (
                  <span className="form-error" id="message-error">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  "Opening mail client…"
                ) : (
                  <>
                    Send message <FiSend />
                  </>
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>

      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Chhaya Shah. Built with React.</span>
        <span>Designed &amp; engineered for the details.</span>
      </div>
    </footer>
  );
};

export default Footer;
