import { motion } from "framer-motion";
import { FaPython, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiR, SiTailwindcss, SiJavascript } from "react-icons/si";
import { projects } from "../../data/projects";

const skills = [
  { name: "Python",      icon: <FaPython />,     color: "#60a5fa" },
  { name: "React",       icon: <FaReact />,      color: "#22d3ee" },
  { name: "TensorFlow",  icon: <SiTensorflow />, color: "#f97316" },
  { name: "Node.js",     icon: <FaNodeJs />,     color: "#4ade80" },
  { name: "R Language",  icon: <SiR />,          color: "#818cf8" },
  { name: "SQL/NoSQL",   icon: <FaDatabase />,   color: "#94a3b8" },
  { name: "Tailwind",    icon: <SiTailwindcss />,color: "#2dd4bf" },
  { name: "JavaScript",  icon: <SiJavascript />, color: "#facc15" },
];

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Built",   value: `${projects.length}+` },
  { label: "Technologies",     value: "15+" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const AboutMe = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden t-bg">
      {/* Top divider */}
      <div className="t-divider mb-0" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--primary)" }}>
            About Me
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold t-text mt-3 mb-4 tracking-tight">
            Who I Am
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            I am a <strong className="t-text font-semibold">Machine Learning Engineer</strong> and{" "}
            <strong className="t-text font-semibold">Full‑Stack Developer</strong> who builds intelligent,
            fast digital systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Stats + Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, i) => (
                <div key={i} className="glass p-5 rounded-2xl text-center">
                  <p className="font-heading text-3xl font-bold t-text mb-1">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider" style={{ color: "var(--text-faint)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bio */}
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <p>
                I enjoy building systems that are smart and easy to use — from training machine learning
                models to building modern web apps.
              </p>
              <p>
                My approach combines <span className="t-text font-medium">data analysis</span> with{" "}
                <span className="t-text font-medium">creative development</span>, always focused on making
                things that work well and look great.
              </p>
              <p>
                Currently finishing my degree in{" "}
                <span className="t-text font-medium">Data Science &amp; Informatics</span> at Midlands
                State University, Zimbabwe.
              </p>
            </div>
          </motion.div>

          {/* Right — Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.03 }}
                className="glass-card p-5 rounded-2xl flex flex-col items-center gap-3 cursor-default"
              >
                <span className="text-2xl" style={{ color: skill.color }}>{skill.icon}</span>
                <span className="text-xs font-medium text-center" style={{ color: "var(--text-muted)" }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
