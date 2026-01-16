import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { certificates } from "../../data/certificates";
import { truncateWords } from "../../utils/helpers";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

const ProjectsAndCertificates = () => {
  const navigate = useNavigate();

  // Get top 3 recent projects
  const recentProjects = [...projects]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-secondary rounded-full" />
                <h2 className="text-xl font-bold uppercase tracking-wider text-secondary">Portfolio</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white">
              Recent <span className="text-gray-600">Masterpieces</span>
            </h3>
          </div>
          
          <a href="/projects" className="group flex items-center gap-2 text-white font-medium hover:text-secondary transition-colors">
            View All Projects 
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card-bg rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <div
                onClick={() => navigate(`/project/${project.id}`)}
                className="relative overflow-hidden cursor-pointer h-64"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {truncateWords(project.description, 20)}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 border-t border-gray-800 pt-6">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                    >
                      <FiGithub /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Certificates Section */}
        <div className="mt-24">
             <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <h2 className="text-xl font-bold uppercase tracking-wider text-primary">Certifications</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.slice(0, 3).map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 bg-card-bg p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition-all hover:-translate-y-1"
                    >
                        <img src={cert.image} alt={cert.title} className="w-20 h-20 object-contain rounded-lg bg-white/5 p-2" />
                        <div>
                            <h3 className="text-lg font-bold text-white leading-tight mb-2">{cert.title}</h3>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-medium">Verify Credential &rarr;</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        <div className="mt-16 text-center">
            <Link to="/projects" className="inline-block px-8 py-3 rounded-full border border-gray-700 text-white font-medium hover:bg-white/5 hover:border-primary transition-all">
                View All Projects
            </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsAndCertificates;
