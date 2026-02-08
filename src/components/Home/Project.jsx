import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { certificates } from "../../data/certificates";
import { truncateWords } from "../../utils/helpers";
import { FiGithub, FiExternalLink, FiArrowRight, FiAward } from "react-icons/fi";

const ProjectsAndCertificates = () => {
  const navigate = useNavigate();

  // Get top 3 recent projects
  const recentProjects = [...projects]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  return (
    <section id="projects" className="py-32 bg-dark-bg relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[2px] bg-primary rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Featured Work</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-white">
              Creative <span className="text-gray-500">Excellence.</span>
            </h2>
          </div>
          
          <Link to="/projects" className="group flex items-center gap-3 text-sm font-bold text-white hover:text-primary transition-colors py-2 px-6 glass rounded-full border-white/10 hover:border-primary/50">
            VIEW PORTFOLIO 
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {recentProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col group h-full"
            >
              <div
                onClick={() => navigate(`/project/${project.id}`)}
                className="relative overflow-hidden cursor-pointer aspect-video"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-6">
                   <span className="text-white text-xs font-bold uppercase tracking-wider bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">View Case Study</span>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors font-heading leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-base mb-8 line-clamp-3 leading-relaxed font-light">
                  {truncateWords(project.description, 25)}
                </p>

                <div className="mt-auto pt-6 flex gap-8 border-t border-white/5">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-white hover:text-primary transition-colors uppercase tracking-widest"
                    >
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
                    >
                      Github
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Certificates Section */}
        <div className="relative">
             <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-secondary/5 rounded-full blur-[80px] -z-10" />
             
             <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                <div>
                   <div className="flex items-center gap-3 mb-4">
                      <FiAward className="text-secondary" size={24} />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Verified Education</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">Trust & Credibility.</h2>
                </div>
             </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.slice(0, 3).map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass flex items-center gap-5 p-6 rounded-2xl border-white/5 hover:border-secondary transition-all hover:-translate-y-2 group"
                    >
                        <div className="relative w-20 h-20 flex-shrink-0">
                           <div className="absolute inset-0 bg-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                           <img src={cert.image} alt={cert.title} className="w-full h-full object-contain rounded-xl bg-white/5 p-3 relative z-10" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white leading-tight mb-2 font-heading">{cert.title}</h3>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-secondary hover:text-white font-bold transition-colors">Verify Credentials &rarr;</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsAndCertificates;
