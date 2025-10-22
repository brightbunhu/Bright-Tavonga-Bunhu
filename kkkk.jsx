import { motion } from "framer-motion";
import homeimage from "../../static/profile.jpg";

const AboutMe = () => {
  const words = [
    "Data Scientist",
    "Web Developer",
    "Machine Learning Engineer",
    "Full Stack Developer",
  ];

  return (
    <div className="bg-gray-900 text-white p-8 flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
          <img
            src={homeimage}
            alt="Profile Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-8">
          I'm a passionate Data Scientist and Web Developer with expertise in
          Machine Learning and Full Stack Development.
        </p>
        <div className="flex flex-wrap justify-center">
          {words.map((word, index) => (
            <motion.div
              key={index}
              className="text-lg font-bold mx-2 my-1 px-2 py-1 bg-blue-500 rounded-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {word}
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            I have experience in building scalable web applications and machine
            learning models.
          </motion.p>
          <motion.p
            className="text-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            I'm proficient in languages such as Python, JavaScript, and R.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
