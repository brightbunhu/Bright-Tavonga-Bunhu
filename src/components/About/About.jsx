import { motion } from "framer-motion";
import {
  FaPython,
  FaJs,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaTable,
} from "react-icons/fa";
import {
  SiPandas,
  SiScikitlearn,
  SiNumpy,
  SiDjango,
  SiExpress,
} from "react-icons/si";

import course1 from "../../static/intropy.jpg";
import course2 from "../../static/Stats.jpg";
import course3 from "../../static/DW.jpg";
import course4 from "../../static/EDA.jpg";
import cert1 from "../../static/IBM.jpg";
import cert2 from "../../static/AIbDC.png";

const courses = [
  {
    id: 1,
    title: "Introduction To Python",
    description: "Python Course",
    image: course1,
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a3af5d90c553b79900b724c3988da2fc78c4a3ef",
  },
  {
    id: 2,
    title: "Statistcis",
    description: "Introduction to Statistcs",
    image: course2,
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/6f49731e17419443356ecd485a91b89d3dd5f5dc",
  },
  {
    id: 3,
    title: "Data warehouse",
    description: "Data Warehousing",
    image: course3,
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/f4f6b9336110c2793f4a53539b1aaf10b51a9497",
  },
  {
    id: 4,
    title: "Explaratory Data Anaylsis",
    description: "EDA",
    image: course4,
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/cb41f52d3b6ee517410418502dd5503b58005303",
  },
];

const certificates = [
  {
    id: 1,
    title: "IBM",
    description:
      "The data analytics concepts, methodologies and applications of data science certificate",
    image: cert1,
    link: "https://www.credly.com/badges/7acde6b2-fc38-44e6-9bb2-a884ade2a17f/public_url",
  },
  {
    id: 2,
    title: "IBM",
    description:
      "The data analytics concepts, methodologies and applications of data science certificate",
    image: cert2,
    link: "https://www.datacamp.com/skill-verification/AIF0024960948320",
  },
];

const About = () => {
  return (
    <div className="bg-gray-900 text-white p-6 sm:p-10 min-h-screen">
      {/* === About Section === */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {/* === Career Goals & Education === */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold mb-3 text-blue-400">Career Goals</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm passionate about becoming a skilled Data Analyst and Web
            Developer, leveraging my expertise in data science and informatics
            to drive business growth and improve people’s lives.
          </p>

          <h2 className="text-xl font-bold mb-3 text-blue-400">
            Education Level
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I'm currently studying towards a degree in Data Science and
            Informatics at Midlands State University.
          </p>
        </motion.div>

        {/* === Tech Stack === */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold mb-4 text-blue-400">Tech Stacks</h2>
          <div className="flex flex-col gap-4">
            {/* Python */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <div className="flex items-center gap-2">
                <FaPython size={24} className="text-yellow-400" />
                <span className="font-semibold">Python</span>
              </div>
              <ul className="ml-6 text-sm text-gray-300">
                <li className="flex items-center gap-1">
                  <SiPandas size={16} /> Pandas
                </li>
                <li className="flex items-center gap-1">
                  <SiScikitlearn size={16} /> Scikit-learn
                </li>
                <li className="flex items-center gap-1">
                  <SiNumpy size={16} /> NumPy
                </li>
                <li className="flex items-center gap-1">
                  <SiDjango size={16} /> Django
                </li>
              </ul>
            </div>

            {/* JavaScript */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <div className="flex items-center gap-2">
                <FaJs size={24} className="text-yellow-500" />
                <span className="font-semibold">JavaScript</span>
              </div>
              <ul className="ml-6 text-sm text-gray-300">
                <li className="flex items-center gap-1">
                  <FaReact size={16} /> React.js
                </li>
                <li className="flex items-center gap-1">
                  <SiExpress size={16} /> Express
                </li>
                <li className="flex items-center gap-1">
                  <FaNodeJs size={16} /> Node.js
                </li>
              </ul>
            </div>

            {/* Databases & Tools */}
            <div className="flex items-center gap-2">
              <FaDatabase size={24} className="text-blue-300" />
              <span>SQL Server</span>
            </div>

            <div className="flex items-center gap-2">
              {/* No icon available for Power BI */}
              <span>Power BI</span>
            </div>

            <div className="flex items-center gap-2">
              <FaTable size={24} className="text-green-300" />
              <span>Excel</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* === Courses === */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400">
        Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: course.id * 0.1 }}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{course.description}</p>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                View Course
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === Certificates === */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4 mt-10 text-blue-400">
        Certificates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <motion.div
            key={certificate.id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: certificate.id * 0.1 }}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                {certificate.title}
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                {certificate.description}
              </p>
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
