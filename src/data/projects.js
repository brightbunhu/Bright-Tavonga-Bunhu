import image1 from "../static/Clubspic.png";
import image2 from "../static/Catholic.png";
import image3 from "../static/BizNest.jpg";
import image4 from "../static/main.png";
import image5 from "../static/stream.png";

export const projects = [
  {
    id: 1,
    title: "MSU CLUBS AND SOCITIES",
    description:
      "A comprehensive web platform for Midlands State University clubs and societies. Features club registration, event management, member directory, and real-time updates. Built with modern React architecture for seamless user experience and efficient data management.",
    image: image1,
    technologies: ["React", "Node.js", "MongoDB"],
    link: "reactclubs.vercel.app",
    github: "https://github.com/brightbunhu/reactclubs"
  },
  {
    id: 2,
    title: "MSU CATHSOC WEBSITE ",
    description:
      "An official website for the MSU Catholic Society (Cathsoc) providing executive updates, event announcements, subscription payment processing, and community resources. Streamlined interface for easy navigation and member engagement.",
    image: image2,
    technologies: ["HTML", "CSS", "JS"],
    link: "https://brightbunhu.github.io/CathsocMSU.github.io/",
    github: "https://github.com/brightbunhu/CathsocMSU.github.io"
  },
  {
    id: 3,
    title: "BIZNEST APP",
    description:
      "An advanced language translation application that provides real-time translation during phone calls and chat conversations. Leverages TensorFlow machine learning models for accurate multilingual communication, enabling seamless business interactions across language barriers.",
    image: image3,
    technologies: ["Django", "CSS", "JS", "TensorFLow"],
    github: "https://github.com/brightbunhu/level2.2-project.git"
  },
  {
    id: 4,
    title: "Instacart DashBoard PowerBI",
    description: "An interactive Power BI dashboard for Instacart sales analytics and data visualization. Provides comprehensive insights into sales performance, customer behavior, product trends, and revenue metrics. Features dynamic filtering and drill-down capabilities for detailed analysis.",
    image: image4,
    technologies: ["Power BI"],
    github: "https://github.com/brightbunhu/Instacart-Sales-EDA-and-Dashboard"
  },
  {
    id: 5,
    title: "Instacart DashBoard Streamlit",
    description: "A web-based interactive dashboard for Instacart sales data analysis built with Streamlit. Features real-time data visualization, exploratory data analysis (EDA), interactive charts with Plotly, and comprehensive sales metrics. Enables users to explore sales patterns, customer segments, and product performance through an intuitive interface.",
    image: image5,
    technologies: ["Python", "Streamlit", "Pandas", "Numpy", "Plotly"],
    link: "https://instacart-dashboardd.streamlit.app",
    github: "https://github.com/brightbunhu/Instacart-Sales-EDA-and-Dashboard"
  },
];
