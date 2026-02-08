import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import TechnologyIcon from "./TechnologyIcon";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return (
      <div className="bg-dark-bg text-white min-h-screen flex items-center justify-center">
        <div className="text-center p-12 glass rounded-3xl border-white/10">
          <h1 className="text-4xl font-extrabold font-heading mb-6 tracking-tight">Project Discovered? Not quite.</h1>
          <button
            onClick={() => navigate("/projects")}
            className="px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-black transition-all shadow-2xl"
          >
            Back to Hub
          </button>
        </div>
      </div>
    );
  }

  const projectLink = project.link
    ? project.link.startsWith("http")
      ? project.link
      : `https://${project.link}`
    : null;

  const githubLink = project.github || null;

  return (
    <div className="bg-dark-bg text-white min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="group mb-12 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all"
        >
          <div className="w-10 h-10 glass rounded-full flex items-center justify-center transform group-hover:-translate-x-1 transition-transform">
             <FiArrowLeft size={18} />
          </div>
          Back to Projects
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-[40px] overflow-hidden flex flex-col border-white/5"
          >
            {/* Hero Image */}
            <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
              />
              <div className="absolute bottom-12 left-12 z-20 max-w-2xl">
                 <h1 className="text-4xl md:text-7xl font-extrabold font-heading text-white leading-tight tracking-tighter mb-4">
                  {project.title}
                </h1>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-10 md:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Left: Description */}
                <div className="lg:col-span-2">
                   <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-[2px] bg-primary rounded-full" />
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">Objective & Scope</span>
                   </div>
                   <div className="text-gray-400 text-lg md:text-xl leading-relaxed space-y-8 font-light italic">
                    {project.description
                      .split(/\n+/)
                      .filter(Boolean)
                      .map((line, index) => (
                        <p key={index} className="relative pl-6 before:absolute before:left-0 before:top-4 before:w-1.5 before:h-1.5 before:bg-primary/50 before:rounded-full">
                          {line.trim()}
                        </p>
                      ))}
                  </div>
                </div>

                {/* Right: Sidebar Info */}
                <div className="space-y-12">
                   {/* Technologies */}
                   <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 font-heading">Ecosystem</h3>
                      <div className="flex flex-wrap gap-4">
                        {project.technologies.map((tech) => (
                          <div key={tech} className="flex flex-col items-center gap-2 group">
                             <TechnologyIcon
                              tech={tech}
                              size="lg"
                            />
                            <span className="text-[10px] font-bold uppercase text-gray-600 group-hover:text-primary transition-colors tracking-tighter">{tech}</span>
                          </div>
                        ))}
                      </div>
                   </div>

                   {/* Actions */}
                   <div className="flex flex-col gap-4 pt-10 border-t border-white/5">
                      {projectLink && (
                        <a
                          href={projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded-2xl font-bold transition-all hover:bg-primary hover:text-white hover:scale-105 active:scale-95 shadow-2xl"
                        >
                          <FiExternalLink size={20} />
                          Live Experience
                        </a>
                      )}

                      {githubLink && (
                        <a
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 glass px-8 py-5 rounded-2xl font-bold text-white transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
                        >
                          <FiGithub size={20} />
                          Repository Context
                        </a>
                      )}
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
