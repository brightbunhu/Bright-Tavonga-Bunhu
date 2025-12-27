import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { truncateWords } from "../../utils/helpers";
import TechnologyIcon from "./TechnologyIcon";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
          >
            <div
              onClick={() => navigate(`/project/${project.id}`)}
              className="cursor-pointer"
            >
              <div className="w-full h-40 sm:h-56 mb-4 rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = "block";
                    }
                  }}
                />
                <div className="hidden text-gray-500 text-sm p-4">
                  Image not available
                </div>
              </div>
              <h2 className="text-lg sm:text-xl font-bold mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base mb-4">
                {truncateWords(project.description, 10)}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <TechnologyIcon key={tech} tech={tech} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {project.link && (
                <a
                  href={
                    project.link.startsWith("http")
                      ? project.link
                      : `https://${project.link}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 text-center"
                >
                  View Project →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 text-center"
                >
                  GitHub Repo →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
