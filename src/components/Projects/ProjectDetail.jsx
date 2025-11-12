import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import TechnologyIcon from "./TechnologyIcon";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/projects")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Go back to Projects
          </button>
        </div>
      </div>
    );
  }

  const projectLink = project.link
    ? project.link.startsWith("http")
      ? project.link
      : `https://${project.link}`
    : null;

  const githubLink = project.github || null;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 flex items-center gap-2"
        >
          ← Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-96 object-cover"
          />
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.technologies.map((tech) => (
                <TechnologyIcon key={tech} tech={tech} className="text-3xl" size="lg" />
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {projectLink && (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  View Project →
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  GitHub Repo →
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;

