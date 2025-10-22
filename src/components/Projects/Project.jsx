import React from "react";
import { motion } from "framer-motion";
import image1 from "../../static/Clubspic.png";
import image2 from "../../static/Catholic.png";
import image3 from "../../static/BizNest.jpg";

const projects = [
  {
    id: 1,
    title: "MSU CLUBS AND SOCITIES",
    description:
      "A React Clubs Projects Midlands State Univeristy Clubs and socities",
    image: image1,
    technologies: ["React", "Node.js", "MongoDB"],
    link: "reactclubs.vercel.app",
  },
  {
    id: 2,
    title: "MSU CATHSOC WEBSITE ",
    description:
      "A website for updates by the Cathsoc Executive and payment of Subscriptions tool",
    image: image2,
    technologies: ["HTML", "CSS", "JS"],
    link: "https://brightbunhu.github.io/CathsocMSU.github.io/",
  },
  {
    id: 3,
    title: "BIZNEST APP",
    description:
      "A Language translation App that translates languages during Calls and chats",
    image: image3,
    technologies: ["Django", "CSS", "JS", "TensorFLow"],
    link: "https://github.com/brightbunhu/level2.2-project.git",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-900 text-white p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 sm:h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={
                project.link.startsWith("http")
                  ? project.link
                  : `https://${project.link}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 underline cursor-pointer"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
