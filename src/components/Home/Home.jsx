import Hero from "./Hero";
import ProjectsAndCertificates from "./Project";
import AboutMe from "./Aboutme";

const Home = () => {
  return (
    <div className="bg-dark-bg min-h-screen">
      <Hero />
      <AboutMe />
      <ProjectsAndCertificates />
    </div>
  );
};
export default Home;
