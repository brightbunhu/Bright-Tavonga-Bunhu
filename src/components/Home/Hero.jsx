import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import profileImg from "../../static/profile.jpg";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 overflow-hidden t-bg">

      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--primary-bg)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--secondary-bg)" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          {/* Available badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border text-xs font-medium"
            style={{ color: "var(--success)", borderColor: "var(--success)", background: "rgba(16, 185, 129, 0.08)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: "var(--success)" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--success)" }} />
            </span>
            Available for opportunities
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold t-text leading-tight mb-6 tracking-tight">
            Hi, I'm <br />
            <span className="text-gradient">Bright Tavonga Bunhu</span>
          </h1>

          <div className="text-xl mb-6 flex items-center gap-2 justify-center lg:justify-start" style={{ color: "var(--text-muted)" }}>
            <span>I build</span>
            <span className="font-semibold t-text border-b-2" style={{ borderColor: "var(--primary)" }}>
              <Typewriter
                words={["Machine Learning Models", "Full Stack Apps", "Data Pipelines", "Intelligent Systems"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={45}
                delaySpeed={2200}
              />
            </span>
          </div>

          <p className="text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10" style={{ color: "var(--text-muted)" }}>
            ML Engineer &amp; Full‑Stack Developer from Zimbabwe. I turn complex data into
            clean, high‑performance web experiences.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-md"
              style={{ background: "var(--primary)" }}
            >
              View My Work <FiArrowRight />
            </Link>
            <Link
              to="/cv"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 border glass"
              style={{ color: "var(--text)", borderColor: "var(--border)" }}
            >
              <FiDownload size={16} /> Resume
            </Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start">
            <a
              href="https://github.com/brightbunhu"
              target="_blank" rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "var(--text-faint)" }}
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/brightbunhu3266"
              target="_blank" rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "var(--text-faint)" }}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right — Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-20 pointer-events-none"
              style={{ background: "var(--primary)" }}
            />
            <div
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border"
              style={{ borderColor: "var(--border)" }}
            >
              <img
                src={profileImg}
                alt="Bright Tavonga Bunhu (Captain Nyuchi) — ML Engineer and Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating card — status */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 glass px-4 py-3 rounded-2xl shadow-lg hidden md:block"
            >
              <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>Status</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--success)" }} />
                <span className="font-semibold text-sm t-text">Open to Work</span>
              </div>
            </motion.div>

            {/* Floating card — experience */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 glass px-4 py-3 rounded-2xl shadow-lg hidden md:block"
            >
              <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>Experience</p>
              <p className="font-semibold text-sm t-text">2+ Years</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>scroll</span>
        <div className="w-5 h-8 border rounded-full flex justify-center pt-1.5" style={{ borderColor: "var(--border)" }}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-1 h-1 rounded-full"
            style={{ background: "var(--primary)" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
