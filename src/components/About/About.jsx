import { motion } from "framer-motion";
import { FaPython, FaJs, FaDatabase } from "react-icons/fa";
import { SiPandas } from "react-icons/si";

const courses = [
  {
    id: 1,
    title: "Data Structures and Algorithms",
    description: "A course on data structures and algorithms",
    image: "/images/data-structures.jpg",
    link: "https://www.coursera.org/learn/data-structures",
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "A course on machine learning",
    image: "/images/machine-learning.jpg",
    link: "https://www.coursera.org/learn/machine-learning",
  },
  {
    id: 3,
    title: "Deep Learning",
    description: "A course on deep learning",
    image: "/images/deep-learning.jpg",
    link: "https://www.coursera.org/learn/deep-learning",
  },
];

const certificates = [
  {
    id: 1,
    title: "Certified Data Scientist (CDS)",
    description: "A certificate in data science",
    image: "/images/cds.jpg",
    link: "https://www.datasciencecertification.org/",
  },
  {
    id: 2,
    title: "Certified Machine Learning Engineer (CMLE)",
    description: "A certificate in machine learning",
    image: "/images/cmle.jpg",
    link: "https://www.machinelearningcertification.org/",
  },
  {
    id: 3,
    title: "AWS Certified Developer - Associate",
    description: "A certificate in AWS development",
    image: "/images/aws.jpg",
    link: "https://aws.amazon.com/certification/",
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
                <li>Scikit-learn</li>
                <li>NumPy</li>
                <li>Django</li>
              </ul>
            </div>

            {/* JavaScript */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <div className="flex items-center gap-2">
                <FaJs size={24} className="text-yellow-500" />
                <span className="font-semibold">JavaScript</span>
              </div>
              <ul className="ml-6 text-sm text-gray-300">
                <li>React.js</li>
                <li>Express</li>
                <li>Node.js</li>
              </ul>
            </div>

            {/* Databases & Tools */}
            <div className="flex items-center gap-2">
              <FaDatabase size={24} className="text-blue-300" />
              <span>SQL Server</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Power BI</span>
            </div>
            <div className="flex items-center gap-2">
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
