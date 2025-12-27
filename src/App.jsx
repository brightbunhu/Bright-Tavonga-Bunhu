import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navgation/Navigationbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Project";
import ProjectDetail from "./components/Projects/ProjectDetail";
import About from "./components/About/About";
import Footer from "./components/Footer/FOoter";
import Contact from "./components/Contact/Contact";
import Cv from "./components/CV/Cv";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
