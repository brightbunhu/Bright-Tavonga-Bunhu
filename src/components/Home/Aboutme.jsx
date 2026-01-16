import { motion } from "framer-motion";
import { FaPython, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiR, SiTailwindcss, SiJavascript } from "react-icons/si";

import { projects } from "../../data/projects";

const AboutMe = () => {
  const skills = [
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "R", icon: <SiR className="text-blue-600" /> },
    { name: "SQL", icon: <FaDatabase className="text-gray-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  ];

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: `${projects.length}+` },
  ];

  return (
    <section id="about" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <h2 className="text-xl font-bold uppercase tracking-wider text-primary">About Me</h2>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
               Crafting Intelligence <br /> <span className="text-gray-500">into the Web.</span>
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a passionate <strong className="text-white">Data Scientist</strong> and <strong className="text-white">Web Developer</strong> dedicated to building AI-powered solutions that solve real-world problems. 
              My journey involves bridging the gap between complex machine learning models and intuitive web interfaces.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Based in Zimbabwe, I focus on creating scalable applications that tackle local challenges while maintaining global standards of performance and design.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 border-t border-gray-800 pt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-card-bg p-6 rounded-xl border border-gray-800 flex flex-col items-center justify-center gap-4 hover:border-gray-600 transition-all cursor-default group"
              >
                <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                  {skill.icon}
                </div>
                <span className="text-gray-500 font-medium text-sm group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
