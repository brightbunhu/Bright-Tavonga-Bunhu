import { motion } from "framer-motion";
import { FaPython, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiR, SiTailwindcss, SiJavascript } from "react-icons/si";
import { projects } from "../../data/projects";

const AboutMe = () => {
  const skills = [
    { name: "Python", icon: <FaPython />, color: "text-blue-400", bg: "rgba(59, 130, 246, 0.1)" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400", bg: "rgba(34, 211, 238, 0.1)" },
    { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-500", bg: "rgba(249, 115, 22, 0.1)" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", bg: "rgba(34, 197, 94, 0.1)" },
    { name: "R Language", icon: <SiR />, color: "text-blue-600", bg: "rgba(37, 99, 235, 0.1)" },
    { name: "SQL/NoSQL", icon: <FaDatabase />, color: "text-gray-400", bg: "rgba(148, 163, 184, 0.1)" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400", bg: "rgba(20, 184, 166, 0.1)" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400", bg: "rgba(234, 179, 8, 0.1)" },
  ];

  const stats = [
    { label: "Years of Experience", value: "2+" },
    { label: "Completed Projects", value: `${projects.length}+` },
    { label: "Technologies Mastered", value: "15+" },
  ];

  return (
    <section id="about" className="py-32 bg-dark-bg relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[2px] bg-primary rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">The Visionary</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-white mb-10 leading-tight">
               Bridging Data <br /> <span className="text-gray-500">with Design.</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              As a <strong className="text-white font-semibold">Machine Learning Engineer</strong> and <strong className="text-white font-semibold">Full-Stack Developer</strong>, I specialize in transforming raw data into beautiful, actionable digital experiences. My approach blends analytical precision with creative development.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
              I thrive on building intelligent systems that scale. Whether it's training deep learning models or architecting modern web apps, my focus is always on delivering <span className="text-white font-medium italic underline decoration-primary/30">excellence and impact</span>.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-10 glass rounded-3xl border-white/5 shadow-2xl">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <h3 className="text-3xl font-extrabold text-white font-heading">{stat.value}</h3>
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center gap-6 group hover:border-primary/50"
              >
                <div 
                  className="text-4xl p-4 rounded-2xl transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundColor: skill.bg, color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
            
            {/* CTA Skill Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary/10 border border-primary/20 p-8 rounded-3xl flex flex-col items-center justify-center gap-2 group cursor-pointer"
            >
               <span className="text-2xl">⚡</span>
               <span className="text-primary font-bold text-[10px] uppercase tracking-widest text-center">Continuous Learning</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
