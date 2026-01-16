import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-black/90 text-gray-400 py-6 border-t border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <motion.p
          className="text-base"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &copy; {currentYear} Bright Tavonga Bunhu. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
