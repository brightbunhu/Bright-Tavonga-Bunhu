import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../../static/profile.jpg";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: "CV", path: "/cv" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "t-bg py-5 border-b t-border"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl overflow-hidden border t-border flex-shrink-0">
            <img src={profileImg} alt="Bright Bunhu" className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <p className="text-sm font-bold t-text leading-tight font-heading">Bright Bunhu</p>
            <p className="text-xs leading-tight" style={{ color: "var(--primary)" }}>
              ML Engineer &amp; Developer
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
              style={{
                color: location.pathname === link.path ? "var(--primary)" : "var(--text-muted)",
              }}
            >
              {location.pathname === link.path && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg -z-10"
                  style={{ background: "var(--primary-bg)" }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg glass flex items-center justify-center transition-colors hover:opacity-80"
            style={{ color: "var(--text-muted)" }}
          >
            {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          {/* CTA */}
          <Link
            to="/contact"
            className="px-5 py-2 text-sm font-semibold rounded-lg text-white transition-colors duration-200"
            style={{ background: "var(--primary)" }}
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg glass flex items-center justify-center"
            style={{ color: "var(--text-muted)" }}
          >
            {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-lg border t-border"
            style={{ color: "var(--text-muted)" }}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-nav border-t"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-4 py-3 text-sm font-medium rounded-lg transition-colors"
                  style={{
                    color: location.pathname === link.path ? "var(--primary)" : "var(--text-muted)",
                    background: location.pathname === link.path ? "var(--primary-bg)" : "transparent",
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 px-4 py-3 text-sm font-semibold rounded-lg text-center text-white"
                style={{ background: "var(--primary)" }}
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
