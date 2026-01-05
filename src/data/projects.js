import image1 from "../static/Clubspic.png";
import image2 from "../static/Catholic.png";
import image3 from "../static/BizNest.jpg";
import image4 from "../static/main.png";
import image5 from "../static/stream.png";
import image6 from "../static/bird1.png";
import image7 from "../static/Expol.png"; // Replace with your actual website screenshot

export const projects = [
  {
    id: 1,
    title: "MSU Clubs and Societies Platform",
    description: `
A comprehensive web-based platform designed for Midlands State University clubs and societies.

Key Features:
• Club registration and management
• Event creation and announcements
• Member directory
• Real-time updates and notifications

The system is built using a modern React architecture to ensure a seamless user experience, scalability, and efficient data management for student organizations.
`.trim(),
    image: image1,
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://reactclubs.vercel.app",
    github: "https://github.com/brightbunhu/reactclubs",
  },

  {
    id: 2,
    title: "MSU Catholic Society (CATHSOC) Website",
    description: `
An official website developed for the Midlands State University Catholic Society (CATHSOC).

Key Features:
• Executive announcements and updates
• Event listings and notices
• Subscription payment information
• Community resources and engagement tools

The platform provides a clean and intuitive interface to improve communication and engagement among members.
`.trim(),
    image: image2,
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://brightbunhu.github.io/CathsocMSU.github.io/",
    github: "https://github.com/brightbunhu/CathsocMSU.github.io",
  },

  {
    id: 3,
    title: "BizNest Translation Application",
    description: `
BizNest is an advanced language translation application that enables real-time multilingual communication during phone calls and chat conversations.

Project Background:
This application was developed as a Level 2.2 group project to address language barriers in business communication.

Problem Addressed:
Small businesses and entrepreneurs often struggle to communicate with international clients due to language differences. Hiring translators can be costly and time-consuming.

Solution:
BizNest allows users to communicate in their native languages (e.g., Shona, Ndebele, Tonga) while translating conversations into the client’s preferred language (e.g., English, Chinese, Zulu, French) in real time.

Impact:
• Reduces communication costs
• Improves accessibility for small businesses
• Enables seamless global business interactions
`.trim(),
    image: image3,
    technologies: ["Django", "CSS", "JavaScript", "TensorFlow"],
    github: "https://github.com/brightbunhu/level2.2-project.git",
  },

  {
    id: 4,
    title: "Instacart Sales & Customer Behavior Analysis (Power BI)",
    description: `
This Power BI project analyzes Instacart’s grocery order data to uncover customer purchasing behavior, peak demand periods, and top-performing products and departments.

Situation:
Instacart processes millions of orders, but raw transactional data does not clearly show when customers order, what they buy most, or how demand changes over time—making inventory planning, staffing, and marketing decisions more challenging.

Task:
The goal was to build an interactive Power BI dashboard that answers key business questions around customer ordering patterns, peak demand periods, product and department performance, and customer loyalty, while keeping insights easy to understand for non-technical stakeholders.

Action:
The data was cleaned and modeled by creating relationships between orders, customers, products, departments, and time. Key measures such as total orders, average orders per customer, reorder rate, and time-based order metrics were developed. Interactive visuals were designed to analyze orders by day and time, department and product performance, and repeat customer behavior, with filters for deeper exploration.

Result:
The analysis revealed that Sundays generate the highest order volumes, afternoons account for nearly half of all orders, and produce contributes over 40% of total demand, with organic products leading. Customers place an average of 16 orders, and a 65% reorder rate highlights strong customer loyalty. These insights support better inventory planning, workforce scheduling, and targeted marketing strategies.
  `.trim(),
    image: image4,
    technologies: ["Power BI"],
    link: "https://github.com/brightbunhu/Instacart-Sales-EDA-and-Dashboard/blob/main/instacart_dashboard.pdf",
    github: "https://github.com/brightbunhu/Instacart-Sales-EDA-and-Dashboard",
  },
  {
    id: 5,
    title: "Instacart Analytics Dashboard (Streamlit)",
    description: `
This project uses the Instacart dataset to demonstrate practical data analysis and visualization skills using Python and Streamlit.

Objective:
Instead of building a machine learning model, the focus was on answering business-critical questions through interactive dashboards.

Key Questions Answered:
• Monthly order trends and comparisons
• Most frequently ordered products
• Order patterns by time of day
• Lowest-performing products

Business Value:
The dashboard allows shop owners to monitor cash flow, product performance, and customer behavior from a single interface. Its simplicity makes it accessible even to non-technical users.

Additional insights and findings are documented in the Power BI project description on my portfolio website.
`.trim(),
    image: image5,
    technologies: ["Python", "Streamlit", "Pandas", "Numpy", "Plotly"],
    link: "https://instacart-dashboardd.streamlit.app",
    github: "https://github.com/brightbunhu/Instacart-Sales-EDA-and-Dashboard",
  },

  {
    id: 6,
    title: "Loan Default Analytics Dashboard (Power BI)",
    description: `
Project Summary:
A Loan Default Analytics Dashboard built using Power BI and real microfinance loan data from BizNest Microfinance (Zimbabwe).

Purpose:
Many microfinance institutions rely heavily on spreadsheets, limiting visibility into portfolio risk and loan performance. This project demonstrates how analytics can improve monitoring and decision-making.

Problems Solved:
• Limited visibility of loan performance
• Poor identification of high-risk borrowers
• Slow and manual reporting processes
• Weak customer-level monitoring

Dashboard Pages:
• Executive Overview – Portfolio health, default rates, and risk segmentation
• Client Analysis – Individual borrower profiles and loan details
• Job Role Analysis – Risk patterns by profession

Business Value:
• Faster risk identification
• Improved lending decisions
• Enhanced transparency and reporting
• Better portfolio control in volatile environments

Tools Used:
Power BI, Python, Power Query, CSV datasets

Next Steps:
• Integrate predictive default modeling
• Develop a Streamlit dashboard
• Build a full MERN-stack loan management system with real-time analytics

This project highlights my ability to translate real-world business problems into actionable data solutions, not just visualizations.
`.trim(),
    image: image6,
    technologies: ["Power BI"],
    github: "https://github.com/brightbunhu/Loan-Default-Power-BI-Dashboard",
  },

  {
    id: 7,
    title: "Expol Electronic Security Website",
    description: `
Expolelectronicsecurity.co.zw is a modern, responsive website developed for Expo Electronic Security, a professional provider of CCTV installations, car alarm systems, and electronic security solutions.

Key Features:
• Home & About sections highlighting company values, mission, and expertise
• Services showcase detailing CCTV installations, car alarms, and custom security solutions
• Integrated contact forms with phone, email, and WhatsApp Business for direct inquiries
• Mobile-first responsive design for optimal experience on all devices
• SEO-friendly structure and fast-loading pages for better online visibility
• Secure and reliable deployment with professional email integration

Business Impact:
• Strengthens brand authority and professionalism online
• Enhances lead generation through direct client contact options
• Demonstrates previous work to increase trust and conversion
• Improves client communication and operational efficiency

Technologies & Tools:
React.js, GitHub Pages, Zoho Mail

This project showcases my ability to create professional, client-focused websites that combine design, functionality, and business value.
`.trim(),
    image: image7,
    technologies: ["React", "HTML", "CSS", "JS"],
    link: "https://expolelectronicsecurity.co.zw",
    github: "",
  },
];
