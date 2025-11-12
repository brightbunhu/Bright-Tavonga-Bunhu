import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";
import { truncateWords } from "../../utils/helpers";
import TechnologyIcon from "../Projects/TechnologyIcon";
import cert1 from "../../static/IBM.jpg";
import cert2 from "../../static/AIbDC.png";

const ProjectsAndCertificates = () => {
  const navigate = useNavigate();
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

  // Get top 3 recent projects (highest IDs, sorted in descending order)
  const recentProjects = [...projects]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  return (
    <div className="bg-gray-900 text-white p-8">
      <section id="work" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <article
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div
                onClick={() => navigate(`/project/${project.id}`)}
                className="cursor-pointer"
              >
                <div className="w-full h-56 mb-4 rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden text-gray-500 text-sm p-4">Image not available</div>
                </div>
                <div className="meta">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{truncateWords(project.description, 10)}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4 mt-4">
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
            </article>
          ))}
        </div>
      </section>

      <section id="certificates" className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-8">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="meta">
                <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                <p className="text-gray-400 mb-4">{certificate.description}</p>
                <a
                  href={
                    certificate.link.startsWith("http")
                      ? certificate.link
                      : `https://${certificate.link}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 text-center"
                >
                  View Certificate →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsAndCertificates;
