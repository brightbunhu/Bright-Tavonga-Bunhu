import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { truncateWords } from "../../utils/helpers";
import TechnologyIcon from "./TechnologyIcon";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const navigate = useNavigate();
  const sortedProjects = Array.isArray(projects)
    ? [...projects].sort((a, b) => Number(b.id) - Number(a.id))
    : [];

  return (
    <div className="min-h-screen pt-28 pb-20 t-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--primary)" }}>
            Portfolio
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold t-text mt-3 mb-4 tracking-tight">
            My Projects
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            A collection of things I've built — from data dashboards to full-stack web apps.
            Click on any card to see more details.
          </p>
        </motion.div>

        {/* Grid */}
        {sortedProjects.length === 0 ? (
          <div className="p-16 rounded-2xl border text-center" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="text-lg" style={{ color: "var(--text-faint)" }}>No projects yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project, index) => (
              <motion.article
                key={project.id ?? index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-2xl overflow-hidden flex flex-col group border transition-all"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                {/* Image */}
                <div
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="relative h-52 overflow-hidden cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: "rgba(0,0,0,0.45)" }}
                  >
                    <span
                      className="text-white text-sm font-medium px-4 py-2 rounded-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                      style={{ background: "var(--primary)" }}
                    >
                      View Details
                    </span>
                  </div>

                  {/* Tech icons */}
                  <div className="absolute top-3 right-3 flex gap-1.5 z-10">
                    {project.technologies?.slice(0, 2).map((tech) => (
                      <div
                        key={tech}
                        className="w-7 h-7 rounded-lg flex items-center justify-center p-1"
                        style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.1)" }}
                      >
                        <TechnologyIcon tech={tech} size="sm" className="w-full h-full" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="font-heading text-lg font-semibold t-text mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-5 flex-grow line-clamp-3" style={{ color: "var(--text-muted)" }}>
                    {truncateWords(project.description, 20)}
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                    {project.link && (
                      <a
                        href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                        style={{ color: "var(--primary)" }}
                      >
                        <FiExternalLink size={13} /> Live App
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
                        <FiGithub size={13} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
