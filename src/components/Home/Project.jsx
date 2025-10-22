import React from "react";
import image1 from "../../static/profile.jpg";
import image2 from "../../static/profile.jpg";
import image3 from "../../static/profile.jpg";
import cert1 from "../../static/profile.jpg";
import cert2 from "../../static/profile.jpg";
import cert3 from "../../static/profile.jpg";

const ProjectsAndCertificates = () => {
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
      link: "cathsoc.vercel.app",
    },
    {
      id: 3,
      title: "BIZNEST APP",
      description:
        "A Language translation App that translates languages during Calls and chats",
      image: image3,
      technologies: ["Django", "CSS", "JS", "TensorFLow"],
      link: "link",
    },
  ];

  const certificates = [
    {
      id: 1,
      title: "Certificate A",
      description: "Description of Certificate A.",
      image: cert1,
    },
    {
      id: 2,
      title: "Certificate B",
      description: "Description of Certificate B.",
      image: cert2,
    },
    {
      id: 3,
      title: "Certificate C",
      description: "Description of Certificate C.",
      image: cert3,
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-8">
      <section id="work" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="meta">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ✅ This opens in a new tab safely */}
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
                <p className="text-gray-400">{certificate.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsAndCertificates;
