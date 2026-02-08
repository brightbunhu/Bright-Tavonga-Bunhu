import { motion } from "framer-motion";
import {
  FaPython, FaJs, FaDatabase, FaReact, FaNodeJs, FaChartLine,
} from "react-icons/fa";
import {
  SiPandas, SiScikitlearn, SiNumpy, SiDjango, SiExpress, SiPowerbi, SiTableau
} from "react-icons/si";

import course1 from "../../static/intropy.jpg";
import course2 from "../../static/Stats.jpg";
import course3 from "../../static/DW.jpg";
import course4 from "../../static/EDA.jpg";
import cert1 from "../../static/IBM.jpg";
import cert2 from "../../static/AIbDC.png";

const courses = [
  { id: 1, title: "Introduction To Python", image: course1, link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a3af5d90c553b79900b724c3988da2fc78c4a3ef" },
  { id: 2, title: "Statistics", image: course2, link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/6f49731e17419443356ecd485a91b89d3dd5f5dc" },
  { id: 3, title: "Data Warehouse", image: course3, link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/f4f6b9336110c2793f4a53539b1aaf10b51a9497" },
  { id: 4, title: "Exploratory Data Analysis", image: course4, link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/cb41f52d3b6ee517410418502dd5503b58005303" },
];

const certificates = [
  { id: 1, title: "IBM Data Science", description: "Comprehensive mastery of data analytics concepts & IBM's cloud methodologies.", image: cert1, link: "https://www.credly.com/badges/7acde6b2-fc38-44e6-9bb2-a884ade2a17f/public_url" },
  { id: 2, title: "IBM AI Engineering", description: "Deep dive into Applied AI principles and advanced engineering concepts.", image: cert2, link: "https://www.datacamp.com/skill-verification/AIF0024960948320" },
];

const About = () => {
  return (
    <div className="bg-dark-bg text-white min-h-screen pt-32 pb-20 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
        >
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border-white/5 mb-6"
            >
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">The Narrative</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-extrabold font-heading mb-6 tracking-tighter">
                Evolving <span className="text-gradient">Potential.</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                Engineering intelligent ecosystems through the fusion of machine learning and full-stack development.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
            {/* Career Goals & Education */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-12 rounded-[40px] border-white/5 space-y-12"
            >
                <div>
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary shadow-xl">
                         <FaChartLine size={24} />
                      </div>
                      <h2 className="text-2xl font-bold font-heading tracking-tight">Career Architecture</h2>
                   </div>
                   <p className="text-gray-400 leading-relaxed text-lg font-light">
                      My mission is to architect <span className="text-white font-bold">Intelligent Digital Solutions</span>. I blend the intelligence of Machine Learning with the agility of modern Web Development to create systems that don't just work—they inspire.
                   </p>
                </div>

                <div className="pt-12 border-t border-white/5">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-secondary shadow-xl">
                         <span className="text-2xl">🎓</span>
                      </div>
                      <h2 className="text-2xl font-bold font-heading tracking-tight">Academic Foundation</h2>
                   </div>
                   <p className="text-gray-400 leading-relaxed text-lg font-light">
                      Currently finalizing a degree in <span className="text-white font-bold">Data Science and Informatics</span> at Midlands State University, where research meets implementation.
                   </p>
                </div>
            </motion.div>

            {/* Specialized Stack */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                 <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Core Technologies</h2>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-card p-8 rounded-3xl border-white/5 group hover:border-primary/50 transition-all">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                <FaPython size={24} />
                            </div>
                            <h3 className="font-bold text-lg font-heading tracking-tight">Analytical Engine</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["Pandas", "NumPy", "Scikit", "Django"].map(tech => (
                               <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-3 py-1.5 rounded-lg">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-3xl border-white/5 group hover:border-yellow-500/50 transition-all">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                                <FaJs size={24} />
                            </div>
                            <h3 className="font-bold text-lg font-heading tracking-tight">Deployment Web</h3>
                        </div>
                         <div className="flex flex-wrap gap-2">
                            {["React", "Node", "Vite", "Tailwind"].map(tech => (
                               <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-3 py-1.5 rounded-lg">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-3xl border-white/5 group hover:border-blue-300/50 transition-all col-span-full">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                <FaDatabase size={24} />
                            </div>
                            <h3 className="font-bold text-lg font-heading tracking-tight">Data Integrity</h3>
                        </div>
                         <div className="flex flex-wrap gap-4">
                            {[
                                { name: "SQL Server", icon: <FaDatabase size={14} /> },
                                { name: "Power BI", icon: <SiPowerbi size={14} /> },
                                { name: "Tableau", icon: <SiTableau size={14} /> }
                            ].map(tool => (
                               <div key={tool.name} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                                  <span className="text-gray-400">{tool.icon}</span>
                                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">{tool.name}</span>
                               </div>
                            ))}
                        </div>
                    </div>
                 </div>
            </motion.div>
        </div>

        {/* Courses & Certificates */}
        <div className="space-y-32">
            <section>
                <div className="flex items-center justify-between mb-12">
                   <div>
                      <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">Skill Acquisition</h2>
                      <h3 className="text-4xl font-extrabold font-heading text-white tracking-tight">Certified Courses</h3>
                   </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((course, idx) => (
                        <motion.a
                            key={course.id}
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group block glass-card rounded-3xl overflow-hidden border-white/5 hover:border-primary/50 transition-all h-full"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors font-heading leading-tight">{course.title}</h3>
                                <div className="text-[10px] text-primary font-black uppercase tracking-widest bg-primary/10 inline-block px-3 py-1 rounded-lg">Verified</div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

             <section>
                <div className="flex items-center justify-between mb-12">
                   <div>
                      <h2 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-3">Professional Credentials</h2>
                      <h3 className="text-4xl font-extrabold font-heading text-white tracking-tight">IBM Certifications</h3>
                   </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certificates.map((cert, idx) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row items-center gap-8 glass-card p-10 rounded-[32px] border-white/5 hover:border-secondary/50 transition-all group"
                        >
                            <div className="w-32 h-32 flex-shrink-0 relative">
                               <div className="absolute inset-0 bg-secondary/10 rounded-3xl blur-2xl group-hover:bg-secondary/20 transition-all" />
                               <img src={cert.image} alt={cert.title} className="w-full h-full object-contain rounded-3xl bg-white/5 p-4 relative z-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4 font-heading text-white">{cert.title}</h3>
                                <p className="text-sm text-gray-400 mb-6 font-light leading-relaxed">{cert.description}</p>
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary hover:text-white transition-colors">Verify Credentials &rarr;</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>

      </div>
    </div>
  );
};

export default About;
