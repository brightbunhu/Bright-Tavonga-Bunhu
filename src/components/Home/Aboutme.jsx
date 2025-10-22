import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import homeimage from "../../static/profile.jpg";

const AboutMe = () => {
  const words = [
    "Data Scientist",
    "Web Developer",
    "Machine Learning Engineer",
    "Full Stack Developer",
  ];
  const [animation, setAnimation] = useState("upDown");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation((prevAnimation) => {
        switch (prevAnimation) {
          case "upDown":
            return "downUp";
          case "downUp":
            return "blink";
          case "blink":
            return "leftRight";
          case "leftRight":
            return "upDown";
          default:
            return "upDown";
        }
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getVariants = () => {
    switch (animation) {
      case "upDown":
        return {
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        };
      case "downUp":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
      case "blink":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "leftRight":
        return {
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 },
        };
      default:
        return {
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4 sm:p-8 flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500">
          <img
            src={homeimage}
            alt="Profile Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          About Me
        </h1>
        <p className="text-sm sm:text-lg mb-8">
          I'm a passionate Data Scientist and Web Developer with expertise in
          Machine Learning and Full Stack Development.
        </p>
        <div className="flex flex-wrap justify-center">
          {words.map((word, index) => (
            <motion.div
              key={index}
              className="text-xs sm:text-sm md:text-lg font-bold mx-1 sm:mx-2 my-1 px-1 sm:px-2 py-1 bg-blue-500 rounded-md"
              variants={getVariants()}
              initial="hidden"
              animate="visible"
              transition={{
                delay: index * 0.2,
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {word}
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <motion.p
            className="text-xs sm:text-sm md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            I have experience in building scalable web applications and machine
            learning models.
          </motion.p>
          <motion.p
            className="text-xs sm:text-sm md:text-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            I'm proficient in languages such as Python, JavaScript, and R.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
