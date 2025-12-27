import image1 from "../static/Clubspic.png";
import image2 from "../static/Catholic.png";
import image3 from "../static/BizNest.jpg";
import image4 from "../static/main.png";
import image5 from "../static/stream.png";
import image6 from "../static/bird1.png";

export const projects = [
  {
    id: 1,
    title: "MSU CLUBS AND SOCITIES",
    description:
      "A comprehensive web platform for Midlands State University clubs and societies. Features club registration, event management, member directory, and real-time updates. Built with modern React architecture for seamless user experience and efficient data management.",
    image: image1,
    technologies: ["React", "Node.js", "MongoDB"],
    link: "reactclubs.vercel.app",
    github: "https://github.com/brightbunhu/reactclubs",
  },
  {
    id: 2,
    title: "MSU CATHSOC WEBSITE ",
    description:
      "An official website for the MSU Catholic Society (Cathsoc) providing executive updates, event announcements, subscription payment processing, and community resources. Streamlined interface for easy navigation and member engagement.",
    image: image2,
    technologies: ["HTML", "CSS", "JS"],
    link: "https://brightbunhu.github.io/CathsocMSU.github.io/",
    github: "https://github.com/brightbunhu/CathsocMSU.github.io",
  },
  {
    id: 3,
    title: "BIZNEST APP",
    description:
      "An advanced language translation application that provides real-time translation during phone calls and chat conversations. Leverages TensorFlow machine learning models for accurate multilingual communication, enabling seamless business interactions across language barriers.",
    image: image3,
    technologies: ["Django", "CSS", "JS", "TensorFLow"],
    github: "https://github.com/brightbunhu/level2.2-project.git",
  },
  {
    id: 4,
    title: "Instacart DashBoard PowerBI",
    description:
      "An interactive Power BI dashboard for Instacart sales analytics and data visualization. Provides comprehensive insights into sales performance, customer behavior, product trends, and revenue metrics. Features dynamic filtering and drill-down capabilities for detailed analysis.",
    image: image4,
    technologies: ["Power BI"],
    link: "https://github.com/brightbunhu/Instacart-Sales-EDA-and-Dashboard/blob/main/instacart_dashboard.pdft",
    github: "https://github.com/brightbunhu/Instacart-Sales-EDA-and-Dashboard",
  },
  {
    id: 5,
    title: "Instacart DashBoard Streamlit",
    description:
      "A web-based interactive dashboard for Instacart sales data analysis built with Streamlit. Features real-time data visualization, exploratory data analysis (EDA), interactive charts with Plotly, and comprehensive sales metrics. Enables users to explore sales patterns, customer segments, and product performance through an intuitive interface.",
    image: image5,
    technologies: ["Python", "Streamlit", "Pandas", "Numpy", "Plotly"],
    link: "https://instacart-dashboardd.streamlit.app",
    github: "https://github.com/brightbunhu/Instacart-Sales-EDA-and-Dashboard",
  },

  {
    id: 6,
    title: "Loan Default Power BI Dashboard",
    description: `Project Summary
This project is a Loan Default Analytics Dashboard built in Power BI using real microfinance loan data from BizNest Microfinance (Zimbabwe).
The dashboard transforms raw loan records into clear, actionable insights that support risk management and data-driven lending decisions.
________________________________________
Why I Built It
Many microfinance institutions rely on spreadsheets, which limits visibility into loan performance and borrower risk.
I built this dashboard to demonstrate how analytics and visualization can improve monitoring, reduce defaults, and support smarter loan approvals.
________________________________________
Problems Solved
✔ Limited visibility of loan performance
✔ Poor identification of high-risk customers
✔ Slow, manual reporting
✔ Weak customer-level loan monitoring
________________________________________
Dashboard Pages & Value
•	Executive Overview: Portfolio health, active vs defaulted loans, outstanding balances, and risk by age, gender, job role, and location.
•	Client Analysis: Individual borrower profiles with loan status, interest rates, repayment periods, and risk indicators.
•	Job Role Analysis: Risk patterns by profession to support better approval and pricing strategies.
________________________________________
Business Value
•	Faster risk identification
•	Better lending decisions
•	Improved transparency and reporting
•	Stronger portfolio control in volatile financial environments
________________________________________
Tools Used
Power BI, Python,Power Query, CSV datasets
________________________________________
Next Steps
•	Add predictive default modeling
•	Build a Python (Streamlit) dashboard
•	Develop a full MERN-stack loan management system with real-time analytics
________________________________________
Why This Matters
This project shows my ability to turn real business problems into practical data solutions, not just charts.
`,
    image: image6,
    technologies: ["Power BI"],
    link: "https://github.com/brightbunhu/Loan-Default-Power-BI-Dashboard",
    github: "https://github.com/brightbunhu/Loan-Default-Power-BI-Dashboard",
  },

  /*{
    id: 7,
    title: "Expol Electronic Security ",
    description:
      "A web-based interactive dashboard for Instacart sales data analysis built with Streamlit. Features real-time data visualization, exploratory data analysis (EDA), interactive charts with Plotly, and comprehensive sales metrics. Enables users to explore sales patterns, customer segments, and product performance through an intuitive interface.",
    image: image5,
    technologies: ["Python", "Streamlit", "Pandas", "Numpy", "Plotly"],
    link: "https://instacart-dashboardd.streamlit.app",
    github: "https://github.com/brightbunhu/Instacart-Sales-EDA-and-Dashboard",
  },*/

  ,
];
