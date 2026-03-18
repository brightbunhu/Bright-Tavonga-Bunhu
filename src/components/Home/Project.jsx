import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { certificates } from "../../data/certificates";
import { truncateWords } from "../../utils/helpers";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

const ProjectsAndCertificates = () => {
  const navigate = useNavigate();
  const recentProjects = [...projects].sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <section id="projects" className="py-24 t-bg">
      <div className="t-divider mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-8">

        {/* Projects header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
        >
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--primary)" }}>
              Featured Work
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold t-text mt-2 tracking-tight">
              Recent Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            View all <FiArrowRight />
          </Link>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {recentProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Image */}
              <div
                onClick={() => navigate(`/project/${project.id}`)}
                className="relative overflow-hidden cursor-pointer aspect-video"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                     style={{ background: "rgba(0,0,0,0.45)" }}>
                  <span className="text-white text-sm font-medium px-4 py-2 rounded-lg"
                        style={{ background: "var(--primary)" }}>
                    View Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-md border"
                      style={{ color: "var(--text-faint)", borderColor: "var(--border)", background: "var(--surface)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3
                  className="font-heading text-lg font-semibold mb-2 t-text group-hover:transition-colors"
                  style={{ "--hover-color": "var(--primary)" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5 flex-grow" style={{ color: "var(--text-muted)" }}>
                  {truncateWords(project.description, 20)}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                      style={{ color: "var(--primary)" }}
                    >
                      <FiExternalLink size={13} /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                      style={{ color: "var(--text-faint)" }}
                    >
                      <FiGithub size={13} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--secondary)" }}>
            Credentials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold t-text mt-2 tracking-tight">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.slice(0, 3).map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glass-card flex items-center gap-4 p-5 rounded-2xl transition-all group"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-14 h-14 object-contain rounded-xl p-2 flex-shrink-0"
                style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
              />
              <div>
                <h3 className="text-sm font-semibold t-text mb-1">{cert.title}</h3>
                <span className="text-xs font-medium" style={{ color: "var(--secondary)" }}>
                  View Certificate →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsAndCertificates;
