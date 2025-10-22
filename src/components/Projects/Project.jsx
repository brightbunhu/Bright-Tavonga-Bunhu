import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "MSU CLUBS AND SOCITIES",
    description:
      "A React Clubs Projects Midlands State Univeristy Clubs and socities",
    image: "project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "reactclubs.vercel.app",
  },
  {
    id: 2,
    title: "MSU CATHSOC WEBSITE ",
    description:
      "A website for updates by the Cathsoc Executive and payment of Subscriptions tool",
    image: "project2.jpg",
    technologies: ["HTML", "CSS", "JS"],
    link: "cathsoc.vercel.app",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A mobile application built with React Native and Firebase",
    image: "project3.jpg",
    technologies: ["React Native", "Firebase", "Redux"],
    link: "https://project3.com",
  },
  {
    id: 4,
    title: "Project 4",
    description: "A web application built with Angular and .NET Core",
    image: "project4.jpg",
    technologies: ["Angular", ".NET Core", "SQL Server"],
    link: "https://project4.com",
  },
  {
    id: 5,
    title: "Project 5",
    description: "A data analytics dashboard built with Tableau and Python",
    image: "project5.jpg",
    technologies: ["Tableau", "Python", "Pandas"],
    link: "https://project5.com",
  },
  {
    id: 6,
    title: "Project 6",
    description: "A web application built with Vue.js and Django",
    image: "project6.jpg",
    technologies: ["Vue.js", "Django", "PostgreSQL"],
    link: "https://project6.com",
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
              href={project.link}
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
