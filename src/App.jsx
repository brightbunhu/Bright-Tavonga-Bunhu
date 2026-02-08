import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="page-transition"
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/project/:id" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/cv" element={<PageWrapper><Cv /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Analytics />
      <Footer />
    </>
  );
}

export default App;
