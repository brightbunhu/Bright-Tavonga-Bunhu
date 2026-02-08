import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { truncateWords } from "../../utils/helpers";
import TechnologyIcon from "./TechnologyIcon";

const Projects = () => {
  const navigate = useNavigate();

  // Sorted projects by ID descending
  const sortedProjects = Array.isArray(projects)
    ? [...projects].sort((a, b) => Number(b.id) - Number(a.id))
    : [];

  return (
    <div className="bg-dark-bg text-white min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
             <div className="w-12 h-[2px] bg-primary rounded-full" />
             <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Our Portfolio</span>
             <div className="w-12 h-[2px] bg-primary rounded-full" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold font-heading text-white mb-6 tracking-tighter"
          >
            Digital <span className="text-gradient">Innovations.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-light leading-relaxed"
          >
            A collection of intelligent solutions, from advanced data analytics to full-stack ecosystems. Each project represents a unique challenge solved with modern technology.
          </motion.p>
        </div>

        {/* Projects Grid */}
        {sortedProjects.length === 0 ? (
          <div className="glass p-20 rounded-3xl text-center border-white/5 shadow-2xl">
             <p className="text-gray-500 text-xl italic font-light tracking-wide">No projects discovered yet...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
            {sortedProjects.map((project, index) => (
              <motion.article
                key={project.id ?? index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-[32px] overflow-hidden flex flex-col group h-full border-white/5 hover:border-primary/30"
              >
                {/* Image Section */}
                <div
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="relative h-64 overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-8">
                     <span className="text-white text-[10px] font-black uppercase tracking-widest bg-primary/90 px-4 py-2 rounded-xl">View Details</span>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                  />
                  {/* Technology Overlay */}
                  <div className="absolute top-6 right-6 flex flex-col gap-2 z-20">
                    {project.technologies?.slice(0, 2).map((tech) => (
                      <div key={tech} className="w-8 h-8 rounded-lg glass flex items-center justify-center p-1.5 backdrop-blur-xl border-white/10 group-hover:border-primary/40 transition-colors">
                        <TechnologyIcon tech={tech} size="sm" className="w-full h-full" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                   <h2 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 text-base mb-8 line-clamp-3 leading-relaxed font-light">
                    {truncateWords(project.description, 18)}
                  </p>

                  <div className="mt-auto flex gap-4">
                    {project.link && (
                      <a
                        href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 glass py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white text-center hover:bg-white/10 transition-all border-white/10 hover:border-primary/50"
                      >
                        Launch App
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 glass flex items-center justify-center rounded-2xl hover:bg-white/5 transition-all text-gray-400 hover:text-white border-white/10 hover:border-secondary/50 group/github"
                      >
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/github:rotate-12"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
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
