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

const TechnologyIcon = ({ tech, className = "text-2xl", size = "md" }) => {
  const getIcon = () => {
    switch (tech) {
      case "React":
        return <FaReact className={className} style={{ color: "#61DAFB" }} />;
      case "Node.js":
        return <SiNodedotjs className={className} style={{ color: "#339933" }} />;
      case "MongoDB":
        return <SiMongodb className={className} style={{ color: "#47A248" }} />;
      case "HTML":
        return <FaHtml5 className={className} style={{ color: "#E34F26" }} />;
      case "CSS":
        return <FaCss3Alt className={className} style={{ color: "#1572B6" }} />;
      case "JS":
        return <FaJs className={className} style={{ color: "#F7DF1E" }} />;
      case "Django":
        return <SiDjango className={className} style={{ color: "#092E20" }} />;
      case "TensorFLow":
      case "TensorFlow":
        return <SiTensorflow className={className} style={{ color: "#FF6F00" }} />;
      case "Python":
        return <FaPython className={className} style={{ color: "#3776AB" }} />;
      case "Streamlit":
        return <SiStreamlit className={className} style={{ color: "#FF4B4B" }} />;
      case "Pandas":
        return <SiPandas className={className} style={{ color: "#150458" }} />;
      case "Numpy":
        return <SiNumpy className={className} style={{ color: "#013243" }} />;
      case "Plotly":
        return <SiPlotly className={className} style={{ color: "#3F4F75" }} />;
      case "Power BI":
      case "PowerBI":
        return <FaChartBar className={className} style={{ color: "#F2C811" }} />;
      default:
        return null;
    }
  };

  const icon = getIcon();

  if (!icon) {
    return (
      <span
        className="bg-gray-700 text-white px-2 py-1 rounded-lg text-xs"
        title={tech}
      >
        {tech}
      </span>
    );
  }

  // Determine container size based on size prop
  const containerSize =
    size === "lg" ? "w-14 h-14" : size === "xl" ? "w-16 h-16" : "w-10 h-10";

  return (
    <div
      className={`flex items-center justify-center ${containerSize} bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300`}
      title={tech}
    >
      {icon}
    </div>
  );
};

export default TechnologyIcon;

