import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/brightbunhu" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/brightbunhu3266" },
    { icon: <FaWhatsapp />, href: "https://wa.me/263737757995" },
    { icon: <FaEnvelope />, href: "mailto:brightbunhu4@gmail.com" },
  ];

  return (
    <footer className="bg-dark-bg pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
             <Link to="/" className="text-2xl font-extrabold font-heading text-white tracking-tighter mb-6 block">
               Bright <span className="text-primary">Tavonga.</span>
             </Link>
             <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-light">
               Architecting the intersection of data science and modern web experiences. Zimbabwean based developer focused on building intelligent ecosystems.
             </p>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6">Navigation</h4>
             <ul className="space-y-4">
               {footerLinks.map(link => (
                 <li key={link.name}>
                   <Link to={link.path} className="text-gray-500 text-sm hover:text-primary transition-colors font-medium">{link.name}</Link>
                 </li>
               ))}
             </ul>
          </div>

          {/* Social Connect */}
          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6">Connect</h4>
             <div className="flex gap-4">
               {socialLinks.map((link, idx) => (
                 <a 
                   key={idx} 
                   href={link.href} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all"
                 >
                   {link.icon}
                 </a>
               ))}
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
            &copy; {currentYear} Bright Tavonga Bunhu. All systems operational.
          </p>
          <div className="flex gap-8">
             <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700">Digital Portfolio v2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
