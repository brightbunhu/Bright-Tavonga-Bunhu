import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaChartBar } from "react-icons/fa";
import { 
  SiNodedotjs, 
  SiMongodb, 
  SiDjango, 
  SiTensorflow, 
  SiPandas, 
  SiNumpy, 
  SiStreamlit, 
  SiPlotly
} from "react-icons/si";

const TechnologyIcon = ({ tech, className = "", size = "md" }) => {
  const getIcon = (iconClass) => {
    switch (tech) {
      case "React":
        return <FaReact className={iconClass} style={{ color: "#61DAFB" }} />;
      case "Node.js":
        return <SiNodedotjs className={iconClass} style={{ color: "#339933" }} />;
      case "MongoDB":
        return <SiMongodb className={iconClass} style={{ color: "#47A248" }} />;
      case "HTML":
        return <FaHtml5 className={iconClass} style={{ color: "#E34F26" }} />;
      case "CSS":
        return <FaCss3Alt className={iconClass} style={{ color: "#1572B6" }} />;
      case "JS":
        return <FaJs className={iconClass} style={{ color: "#F7DF1E" }} />;
      case "Django":
        return <SiDjango className={iconClass} style={{ color: "#092E20" }} />;
      case "TensorFLow":
      case "TensorFlow":
        return <SiTensorflow className={iconClass} style={{ color: "#FF6F00" }} />;
      case "Python":
        return <FaPython className={iconClass} style={{ color: "#3776AB" }} />;
      case "Streamlit":
        return <SiStreamlit className={iconClass} style={{ color: "#FF4B4B" }} />;
      case "Pandas":
        return <SiPandas className={iconClass} style={{ color: "#150458" }} />;
      case "Numpy":
        return <SiNumpy className={iconClass} style={{ color: "#013243" }} />;
      case "Plotly":
        return <SiPlotly className={iconClass} style={{ color: "#3F4F75" }} />;
      case "Power BI":
      case "PowerBI":
        return <FaChartBar className={iconClass} style={{ color: "#F2C811" }} />;
      default:
        return null;
    }
  };

  const iconClass = size === "lg" ? "text-2xl" : size === "xl" ? "text-3xl" : "text-xl";
  const icon = getIcon(iconClass);

  if (!icon) {
    return (
      <span
        className="px-3 py-1.5 glass rounded-lg text-[10px] font-bold uppercase tracking-widest text-gray-400 border-white/5"
        title={tech}
      >
        {tech}
      </span>
    );
  }

  const containerSize =
    size === "lg" ? "w-14 h-14" : size === "xl" ? "w-16 h-16" : "w-10 h-10";

  return (
    <div
      className={`flex items-center justify-center ${containerSize} glass rounded-xl hover:border-primary/50 transition-all duration-300 group relative`}
      title={tech}
    >
      <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
    </div>
  );
};

export default TechnologyIcon;

