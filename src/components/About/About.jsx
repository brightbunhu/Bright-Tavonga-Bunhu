import { motion } from "framer-motion";
import { FaPython, FaJs, FaDatabase, FaChartLine } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

import course1 from "../../static/intropy.jpg";
import course2 from "../../static/Stats.jpg";
import course3 from "../../static/DW.jpg";
import course4 from "../../static/EDA.jpg";
import cert1 from "../../static/IBM.jpg";
import cert2 from "../../static/AIbDC.png";

const courses = [
  { id: 1, title: "Introduction To Python",   image: course1, link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a3af5d90c553b79900b724c3988da2fc78c4a3ef" },
  { id: 2, title: "Statistics",               image: course2, link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/6f49731e17419443356ecd485a91b89d3dd5f5dc" },
  { id: 3, title: "Data Warehouse",           image: course3, link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/f4f6b9336110c2793f4a53539b1aaf10b51a9497" },
  { id: 4, title: "Exploratory Data Analysis",image: course4, link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/cb41f52d3b6ee517410418502dd5503b58005303" },
];

const certificates = [
  { id: 1, title: "IBM Data Science",    description: "Covers data analytics, visualisation and IBM cloud tools.",                image: cert1, link: "https://www.credly.com/badges/7acde6b2-fc38-44e6-9bb2-a884ade2a17f/public_url" },
  { id: 2, title: "IBM AI Engineering", description: "Covers applied AI, deep learning and machine learning engineering.", image: cert2, link: "https://www.datacamp.com/skill-verification/AIF0024960948320" },
];

const techStack = [
  { label: "Data & Analysis",  icon: <FaPython  className="text-blue-400" size={20} />, tags: ["Pandas", "NumPy", "Scikit-learn", "Django"] },
  { label: "Web Development",  icon: <FaJs      size={20} style={{ color: "#facc15" }} />, tags: ["React", "Node.js", "Vite", "Tailwind CSS"] },
  { label: "Databases & BI",   icon: <FaDatabase className="text-indigo-400" size={20} />, tags: ["SQL Server", "Power BI", "Tableau"] },
];

const SectionLabel = ({ accent, label, title }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-10"
  >
    <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: accent }}>{label}</span>
    <h2 className="font-heading text-3xl md:text-4xl font-bold t-text mt-2 tracking-tight">{title}</h2>
  </motion.div>
);

const About = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 t-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* Page Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--primary)" }}>
            About Me
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold t-text mt-3 mb-5 tracking-tight leading-tight">
            Turning Data into <br />
            <span className="text-gradient">Real Results</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            I build intelligent systems at the crossroads of machine learning and modern web development.
            Always learning, always shipping.
          </p>
        </motion.div>

        {/* Story + Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">

          {/* Career Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="p-7 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "var(--border)", boxShadow: "var(--shadow)" }}>
              <div className="flex items-center gap-3 mb-4">
                <FaChartLine size={18} style={{ color: "var(--primary)" }} />
                <h2 className="font-heading text-lg font-semibold t-text">My Goal</h2>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                My aim is to build <strong className="t-text">smart digital products</strong> that solve
                real problems. I combine machine learning with full-stack development to create systems
                that are useful, fast, and beautiful.
              </p>
            </div>

            <div className="p-7 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "var(--border)", boxShadow: "var(--shadow)" }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg">🎓</span>
                <h2 className="font-heading text-lg font-semibold t-text">Education</h2>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Finishing a degree in{" "}
                <strong className="t-text">Data Science and Informatics</strong> at Midlands State
                University, Zimbabwe.
              </p>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: "var(--text-faint)" }}>
              Tools &amp; Technologies
            </p>
            {techStack.map((stack, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border transition-all"
                style={{ background: "var(--surface)", borderColor: "var(--border)", boxShadow: "var(--shadow)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {stack.icon}
                  <h3 className="font-heading text-base font-semibold t-text">{stack.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-lg border"
                      style={{ color: "var(--text-muted)", borderColor: "var(--border)", background: "var(--surface-2)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Courses */}
        <div className="mb-20">
          <SectionLabel accent="var(--primary)" label="Learning" title="Completed Courses" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((course, idx) => (
              <motion.a
                key={course.id}
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="rounded-2xl overflow-hidden border transition-all group"
                style={{ background: "var(--surface)", borderColor: "var(--border)", boxShadow: "var(--shadow)" }}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold t-text mb-2">{course.title}</h3>
                  <span
                    className="text-xs px-2.5 py-1 rounded-lg font-medium"
                    style={{ color: "var(--primary)", background: "var(--primary-bg)" }}
                  >
                    Verified ✓
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <SectionLabel accent="var(--secondary)" label="Credentials" title="IBM Certifications" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-7 rounded-2xl border transition-all"
                style={{ background: "var(--surface)", borderColor: "var(--border)", boxShadow: "var(--shadow)" }}
              >
                <div
                  className="w-20 h-20 flex-shrink-0 rounded-2xl p-3"
                  style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                >
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold t-text mb-2">{cert.title}</h3>
                  <p className="text-sm mb-3 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {cert.description}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold transition-colors"
                    style={{ color: "var(--secondary)" }}
                  >
                    View Certificate →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
