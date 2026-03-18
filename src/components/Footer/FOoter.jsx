import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home",     path: "/" },
    { name: "About",    path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact",  path: "/contact" },
    { name: "CV",       path: "/cv" },
  ];

  const socialLinks = [
    { icon: <FaGithub size={16} />,   href: "https://github.com/brightbunhu",                  label: "GitHub" },
    { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/brightbunhu3266",     label: "LinkedIn" },
    { icon: <FaWhatsapp size={16} />, href: "https://wa.me/263737757995",                      label: "WhatsApp" },
    { icon: <FaEnvelope size={16} />, href: "mailto:brightbunhu4@gmail.com",                   label: "Email" },
  ];

  return (
    <footer className="t-bg border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block font-heading text-xl font-bold t-text mb-3">
              Bright <span style={{ color: "var(--primary)" }}>Bunhu</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
              ML Engineer &amp; Full-Stack Developer from Zimbabwe. Building smart, useful digital products.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5 t-text">Navigation</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5 t-text">Connect</p>
            <div className="flex gap-3 mb-5">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:brightbunhu4@gmail.com"
              className="text-sm transition-colors"
              style={{ color: "var(--text-faint)" }}
            >
              brightbunhu4@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--text-faint)" }}>
            © {currentYear} Bright Tavonga Bunhu. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-faint)" }}>
            Built with React &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
