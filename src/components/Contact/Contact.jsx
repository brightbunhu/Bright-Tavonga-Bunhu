import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaPhoneAlt, FaEnvelope, FaFacebookF } from "react-icons/fa";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const socialLinks = [
  { icon: <FaGithub size={18} />,     href: "https://github.com/brightbunhu",                    label: "GitHub" },
  { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/in/brightbunhu3266",       label: "LinkedIn" },
  { icon: <FaWhatsapp size={18} />,   href: "https://wa.me/263737757995",                        label: "WhatsApp" },
  { icon: <FaFacebookF size={18} />,  href: "https://www.facebook.com/bright.bunhu.3",           label: "Facebook" },
];

const Contact = () => {
  const form   = useRef();
  const [status,  setStatus]  = useState("");   // "success" | "error" | ""
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    emailjs
      .sendForm("service_jjilpvh", "template_jatvkov", form.current, "Y9Duuum9HslUIsGYQ")
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(""), 5000);
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <div className="min-h-screen pt-28 pb-20 t-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--primary)" }}>
            Contact
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold t-text mt-3 mb-4 tracking-tight">
            Let's Work Together
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Have a project in mind? Want to hire me? Just send me a message and I'll get back
            to you as soon as I can.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Email */}
            <a
              href="mailto:brightbunhu4@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl border transition-all group"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--primary-bg)", color: "var(--primary)" }}
              >
                <FaEnvelope size={17} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-faint)" }}>
                  Email
                </p>
                <p className="text-sm font-medium t-text">brightbunhu4@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+263783234270"
              className="flex items-center gap-4 p-5 rounded-2xl border transition-all group"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--secondary-bg)", color: "var(--secondary)" }}
              >
                <FaPhoneAlt size={15} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-faint)" }}>
                  Phone
                </p>
                <p className="text-sm font-medium t-text">+263 783 234 270</p>
              </div>
            </a>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-faint)" }}>
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    aria-label={link.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
              className="p-5 rounded-2xl border"
              style={{
                background: "rgba(5, 150, 105, 0.06)",
                borderColor: "rgba(5, 150, 105, 0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "var(--success)" }}
                />
                <p className="text-sm font-semibold" style={{ color: "var(--success)" }}>
                  Available for work
                </p>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Open to freelance and full-time roles. I usually reply within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 p-8 md:p-10 rounded-2xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)", boxShadow: "var(--shadow)" }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                  Your Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-3.5" size={15} style={{ color: "var(--text-faint)" }} />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. John Smith"
                    className="themed-input"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                  Your Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3.5 top-3.5" size={15} style={{ color: "var(--text-faint)" }} />
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="you@example.com"
                    className="themed-input"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                  Your Message
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3.5 top-3.5" size={15} style={{ color: "var(--text-faint)" }} />
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Tell me about your project or idea..."
                    className="themed-input resize-none"
                    style={{ paddingTop: "0.75rem" }}
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-3.5 text-white font-semibold rounded-xl transition-opacity duration-200 disabled:opacity-60"
                style={{ background: "var(--primary)" }}
              >
                {sending ? "Sending…" : "Send Message"}
                {!sending && <FiSend size={15} />}
              </button>

              {/* Status */}
              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-medium"
                  style={{ color: status === "success" ? "var(--success)" : "#ef4444" }}
                >
                  {status === "success"
                    ? "✓ Message sent! I'll get back to you soon."
                    : "✗ Something went wrong. Please try again."}
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
