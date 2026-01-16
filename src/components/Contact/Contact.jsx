import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Linkedin,
  Github,
  Phone,
  Mail,
  Facebook,
} from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

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
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  const socialLinks = [
    { icon: <MessageCircle size={24} />, href: "https://wa.me/263737757995", color: "text-green-500", label: "WhatsApp" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/brightbunhu3266", color: "text-blue-500", label: "LinkedIn" },
    { icon: <Github size={24} />, href: "https://github.com/brightbunhu", color: "text-white", label: "GitHub" },
    { icon: <Facebook size={24} />, href: "https://www.facebook.com/bright.bunhu.3", color: "text-blue-600", label: "Facebook" },
    { icon: <Phone size={24} />, href: "tel:+263783234270", color: "text-blue-400", label: "Phone" },
    { icon: <Mail size={24} />, href: "mailto:brightbunhu4@gmail.com", color: "text-red-500", label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-dark-bg pt-24 pb-12 px-6 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />
        </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center text-white mb-12">
            Get In <span className="text-gradient">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass p-8 rounded-2xl shadow-xl">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-semibold mb-2">Name</label>
                        <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-white/5 border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm font-semibold mb-2">Email</label>
                        <input
                        type="email"
                        name="user_email"
                        required
                        className="w-full bg-white/5 border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm font-semibold mb-2">Message</label>
                        <textarea
                        name="message"
                        required
                        rows="4"
                        className="w-full bg-white/5 border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="How can I help you?"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg hover:shadow-primary/30 text-white font-bold py-3 rounded-lg transition-all transform hover:-translate-y-1"
                    >
                        Send Message
                    </button>

                    {status && (
                        <p className={`text-center text-sm font-medium ${status.startsWith("✅") ? "text-green-400" : "text-red-400"}`}>
                        {status}
                        </p>
                    )}
                </form>
            </div>

            {/* Contact Info & Socials */}
            <div className="flex flex-col justify-center gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        I'm currently available for freelance work and open to new opportunities. 
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 glass rounded-xl hover:bg-white/5 transition-all group"
                        >
                            <span className={`${link.color} group-hover:scale-110 transition-transform`}>
                                {link.icon}
                            </span>
                            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                                {link.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
