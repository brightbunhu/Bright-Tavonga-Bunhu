import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiMail, FiCheckCircle, FiLoader } from "react-icons/fi";
import cve from "./cv.pdf";

const Cv = () => {
  const [email,        setEmail]        = useState("");
  const [showDownload, setShowDownload] = useState(false);
  const [error,        setError]        = useState("");
  const [loading,      setLoading]      = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    // Show download immediately — don't block on email
    // Try to send a notification in the background (best effort)
    emailjs
      .send(
        "service_jjilpvh",
        "template_mx4duam",
        { user_email: email },
        "Y9Duuum9HslUIsGYQ"
      )
      .catch(() => {
        // Email notification failed silently — download still works
      });

    // Small delay for visual feedback, then unlock download
    setTimeout(() => {
      setLoading(false);
      setShowDownload(true);
    }, 800);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 flex flex-col items-center justify-center t-bg">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: "var(--primary)" }}
          >
            Resume
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold t-text mt-3 mb-4 tracking-tight">
            Download My CV
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Enter your email below so I know who's downloading, then get my
            latest CV instantly.
          </p>
        </div>

        <AnimatePresence mode="wait">

          {/* Step 1 — Email form */}
          {!showDownload ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-8 rounded-2xl border"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="cv-email"
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <FiMail
                      className="absolute left-3.5 top-3.5"
                      size={15}
                      style={{ color: "var(--text-faint)" }}
                    />
                    <input
                      id="cv-email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      required
                      className="themed-input"
                    />
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs font-medium mt-2"
                      style={{ color: "#ef4444" }}
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-white font-semibold rounded-xl transition-all disabled:opacity-70"
                  style={{ background: "var(--primary)" }}
                >
                  {loading ? (
                    <>
                      <FiLoader className="animate-spin" size={16} />
                      Getting ready…
                    </>
                  ) : (
                    <>
                      <FiDownload size={16} />
                      Get My CV
                    </>
                  )}
                </button>
              </form>
            </motion.div>

          ) : (

            /* Step 2 — Download ready */
            <motion.div
              key="download"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="p-10 rounded-2xl border text-center"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "rgba(5, 150, 105, 0.1)",
                  color: "var(--success)",
                }}
              >
                <FiCheckCircle size={32} />
              </div>

              <h2 className="font-heading text-2xl font-bold t-text mb-2">
                Your CV is ready!
              </h2>
              <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
                Click the button below to download it.
              </p>

              <a
                href={cve}
                download="Bright_Bunhu_CV.pdf"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-xl transition-opacity hover:opacity-90"
                style={{ background: "var(--primary)" }}
              >
                <FiDownload size={18} />
                Download CV
              </a>

              <p className="text-xs mt-6" style={{ color: "var(--text-faint)" }}>
                Having trouble?{" "}
                <a
                  href={cve}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "var(--primary)" }}
                >
                  Open in browser
                </a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Cv;
