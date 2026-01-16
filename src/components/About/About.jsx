import { motion } from "framer-motion";
import {
  FaPython, FaJs, FaDatabase, FaReact, FaNodeJs, FaTable,
} from "react-icons/fa";
import {
  SiPandas, SiScikitlearn, SiNumpy, SiDjango, SiExpress,
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
  { id: 1, title: "IBM Data Science", description: "Data analytics concepts & methodologies.", image: cert1, link: "https://www.credly.com/badges/7acde6b2-fc38-44e6-9bb2-a884ade2a17f/public_url" },
  { id: 2, title: "IBM AI Engineering", description: "Applied Data Science concepts.", image: cert2, link: "https://www.datacamp.com/skill-verification/AIF0024960948320" },
];

const About = () => {
  return (
    <div className="bg-dark-bg text-white min-h-screen pt-24 pb-12 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
                My journey from data to deployment.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Career Goals */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass p-8 rounded-2xl border border-gray-800"
            >
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">🚀</span>
                    <h2 className="text-2xl font-bold">Career Goals</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                    I'm passionate about becoming a skilled <span className="text-white font-medium">Data Analyst</span> and <span className="text-white font-medium">Web Developer</span>, leveraging my expertise in data science to drive business growth and improve lives through intelligent applications.
                </p>

                <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">🎓</span>
                    <h2 className="text-2xl font-bold">Education</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                    Currently studying towards a degree in <span className="text-secondary font-medium">Data Science and Informatics</span> at Midlands State University.
                </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
            >
                 <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-primary text-3xl">⚡</span> Tech Stack
                 </h2>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-card-bg p-5 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-3 text-yellow-500">
                            <FaPython size={24} />
                            <h3 className="font-bold text-white">Python Stack</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                            <span>Pandas</span> • <span>NumPy</span> • <span>Scikit-learn</span> • <span>Django</span>
                        </div>
                    </div>

                    <div className="bg-card-bg p-5 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-3 text-yellow-400">
                            <FaJs size={24} />
                            <h3 className="font-bold text-white">JavaScript Stack</h3>
                        </div>
                         <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                            <span>React</span> • <span>Node.js</span> • <span>Express</span>
                        </div>
                    </div>

                    <div className="bg-card-bg p-5 rounded-xl border border-gray-800 hover:border-blue-300/50 transition-colors col-span-full">
                        <div className="flex items-center gap-3 mb-3 text-blue-400">
                            <FaDatabase size={24} />
                            <h3 className="font-bold text-white">Data & Tools</h3>
                        </div>
                         <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                            <span>SQL Server</span> • <span>Power BI</span> • <span>Excel</span>
                        </div>
                    </div>
                 </div>
            </motion.div>
        </div>

        {/* Courses & Certificates */}
        <div className="space-y-16">
            <section>
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course, idx) => (
                        <motion.a
                            key={course.id}
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group block bg-card-bg rounded-xl overflow-hidden border border-gray-800 hover:border-gray-500 hover:-translate-y-1 transition-all"
                        >
                            <div className="h-40 overflow-hidden">
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{course.title}</h3>
                                <div className="text-xs text-secondary font-medium uppercase tracking-wide">Verified</div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

             <section>
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-secondary pl-4">Certificates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert, idx) => (
                        <motion.div
                             key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 bg-card-bg p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all"
                        >
                            <img src={cert.image} alt={cert.title} className="w-24 h-24 object-contain rounded-lg bg-white/5 p-2" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                                <p className="text-sm text-gray-400 mb-3">{cert.description}</p>
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-semibold">View Credential &rarr;</a>
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
