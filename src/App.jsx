import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navgation/Navigationbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Project";
import About from "./components/About/About";
import Footer from "./components/Footer/FOoter";
import Contact from "./components/Contact/Contact";
import Cv from "./components/CV/Cv";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
