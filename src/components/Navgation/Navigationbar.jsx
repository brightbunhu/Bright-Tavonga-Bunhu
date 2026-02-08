import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../../static/profile.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "CV", path: "/cv" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group group-hover:scale-105 transition-transform">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/20 shadow-lg"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-lg font-bold font-heading text-white leading-tight">
              Bright Bunhu
            </span>
            <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
              ML Engineer & Full Stack Dev
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 px-2 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-full hover:text-white ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-gray-400 hover:bg-white/5"
              }`}
            >
              {location.pathname === link.path && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full -z-10 shadow-lg shadow-primary/20"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-2xl text-white glass rounded-lg focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full glass border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-bold font-heading tracking-tight ${
                      location.pathname === link.path ? "text-primary" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-10 py-3 bg-primary text-white font-bold rounded-xl"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
