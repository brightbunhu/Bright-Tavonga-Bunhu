import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-4  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <motion.p
          className="text-lg font-bold"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          &copy; {currentYear} Bright Tavonga Bunhu
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
