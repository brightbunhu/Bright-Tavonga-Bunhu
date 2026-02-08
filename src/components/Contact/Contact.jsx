import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isFocused, setIsFocused] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_jjilpvh",
        "template_jatvkov",
        form.current,
        "Y9Duuum9HslUIsGYQ"
      )
      .then(
        (result) => {
          setStatus("✅ Success! Your message has been transmitted.");
          form.current.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          setStatus("❌ Transmission failed. Please try again.");
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  const socialLinks = [
    { icon: <FaWhatsapp size={20} />, href: "https://wa.me/263737757995", color: "hover:text-green-500", label: "WhatsApp" },
    { icon: <FaLinkedinIn size={20} />, href: "https://www.linkedin.com/in/brightbunhu3266", color: "hover:text-blue-500", label: "LinkedIn" },
    { icon: <FaGithub size={20} />, href: "https://github.com/brightbunhu", color: "hover:text-white", label: "GitHub" },
    { icon: <FaFacebookF size={20} />, href: "https://www.facebook.com/bright.bunhu.3", color: "hover:text-blue-600", label: "Facebook" },
    { icon: <FaPhoneAlt size={20} />, href: "tel:+263783234270", color: "hover:text-blue-400", label: "Phone" },
    { icon: <FaEnvelope size={20} />, href: "mailto:brightbunhu4@gmail.com", color: "hover:text-red-500", label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-dark-bg pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            
            {/* Left: Contact Info & Mission */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border-white/5 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Interlink</span>
               </div>
               <h1 className="text-6xl md:text-8xl font-extrabold font-heading text-white mb-10 tracking-tighter leading-none">
                  Let's <span className="text-gradient">Collaborate.</span>
               </h1>
               <p className="text-gray-400 text-xl font-light leading-relaxed mb-12 max-w-lg">
                  Ready to transform complex data into elegant solutions? Reach out for projects, partnerships, or just a coffee chat about AI.
               </p>

               <div className="space-y-8 mb-16">
                  <div className="flex items-center gap-6 group">
                     <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary border-white/5 transition-all group-hover:scale-110 group-hover:border-primary/50 shadow-xl">
                        <FaEnvelope size={22} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Direct Line</p>
                        <a href="mailto:brightbunhu4@gmail.com" className="text-xl font-bold text-white hover:text-primary transition-colors">brightbunhu4@gmail.com</a>
                     </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                     <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-secondary border-white/5 transition-all group-hover:scale-110 group-hover:border-secondary/50 shadow-xl">
                        <FaPhoneAlt size={22} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Office Hours</p>
                        <a href="tel:+263783234270" className="text-xl font-bold text-white hover:text-secondary transition-colors">+263 783 234 270</a>
                     </div>
                  </div>
               </div>

               {/* Social Matrix */}
               <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className={`w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-400 border-white/5 transition-all ${link.color} hover:border-current/50 shadow-lg`}
                      title={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
               </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="glass-card p-10 md:p-16 rounded-[40px] border-white/5 shadow-2xl relative"
            >
                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                    <div className="relative">
                        <label className={`block text-[10px] font-black uppercase tracking-widest mb-4 transition-colors ${isFocused === 'name' ? 'text-primary' : 'text-gray-500'}`}>Full Identity</label>
                        <div className="relative">
                           <FiUser className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isFocused === 'name' ? 'text-primary' : 'text-gray-600'}`} />
                           <input
                              type="text"
                              name="name"
                              required
                              onFocus={() => setIsFocused('name')}
                              onBlur={() => setIsFocused('')}
                              className="w-full bg-white/5 border border-white/5 text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-primary transition-all placeholder:text-gray-700"
                              placeholder="e.g. Nicola Tesla"
                           />
                        </div>
                    </div>

                    <div className="relative">
                        <label className={`block text-[10px] font-black uppercase tracking-widest mb-4 transition-colors ${isFocused === 'email' ? 'text-primary' : 'text-gray-500'}`}>Digital Address</label>
                        <div className="relative">
                           <FiMail className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isFocused === 'email' ? 'text-primary' : 'text-gray-600'}`} />
                           <input
                              type="email"
                              name="user_email"
                              required
                              onFocus={() => setIsFocused('email')}
                              onBlur={() => setIsFocused('')}
                              className="w-full bg-white/5 border border-white/5 text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-primary transition-all placeholder:text-gray-700"
                              placeholder="name@domain.com"
                           />
                        </div>
                    </div>

                    <div className="relative">
                        <label className={`block text-[10px] font-black uppercase tracking-widest mb-4 transition-colors ${isFocused === 'message' ? 'text-primary' : 'text-gray-500'}`}>The Inquiry</label>
                        <div className="relative">
                           <FiMessageSquare className={`absolute left-4 top-6 transition-colors ${isFocused === 'message' ? 'text-primary' : 'text-gray-600'}`} />
                           <textarea
                              name="message"
                              required
                              rows="5"
                              onFocus={() => setIsFocused('message')}
                              onBlur={() => setIsFocused('')}
                              className="w-full bg-white/5 border border-white/5 text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-primary transition-all placeholder:text-gray-700 resize-none"
                              placeholder="How can we advance the future?"
                           ></textarea>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-white text-white hover:text-black font-bold py-5 rounded-2xl transition-all shadow-xl group flex items-center justify-center gap-3 overflow-hidden relative"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                           Initialize Transmission
                           <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                    </button>

                    {status && (
                        <motion.p 
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           className={`text-center text-xs font-bold tracking-widest uppercase ${status.includes("Success") ? "text-green-500" : "text-red-500"}`}
                        >
                           {status}
                        </motion.p>
                    )}
                </form>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
