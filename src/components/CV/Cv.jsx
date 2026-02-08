import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiMail, FiCheckCircle, FiLoader } from "react-icons/fi";
import cve from "./cv.pdf";

const Cv = () => {
  const [email, setEmail] = useState("");
  const [showDownload, setShowDownload] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Path to your actual CV file
  const cvLink = cve;

  // EmailJS credentials
  const SERVICE_ID = "service_jjilpvh";
  const TEMPLATE_ID = "template_mx4duam";
  const PUBLIC_KEY = "Y9Duuum9HslUIsGYQ";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please provide a valid digital address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { user_email: email },
        PUBLIC_KEY
      );

      setShowDownload(true);
      setLoading(false);
    } catch (err) {
      setError("Transmission interrupted. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full"
      >
        <div className="text-center mb-12">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border-white/5 mb-6"
          >
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Resume Access</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-extrabold font-heading text-white mb-6 tracking-tighter">
            Elevate Your <span className="text-gradient">Team.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Acquire my latest professional summary. A notification will be transmitted upon access.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!showDownload ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card p-10 md:p-12 rounded-[40px] border-white/5 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4">
                    Digital Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                    <input
                      type="email"
                      placeholder="e.g. recruit@innovation.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/5 text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-primary transition-all placeholder:text-gray-700"
                      required
                    />
                  </div>
                  {error && (
                    <motion.p 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       className="text-red-500 text-xs font-bold mt-4 uppercase tracking-widest"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-white text-white hover:text-black font-bold py-5 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 group overflow-hidden"
                >
                  {loading ? (
                    <FiLoader className="animate-spin" size={20} />
                  ) : (
                    <>
                      Unlock Credentials
                      <FiDownload size={18} className="group-hover:translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="download"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-12 rounded-[40px] border-white/5 shadow-2xl text-center"
            >
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20 shadow-2xl shadow-green-500/10">
                 <FiCheckCircle size={40} />
              </div>
              <p className="text-white text-2xl font-bold font-heading mb-8 leading-tight">
                Access Granted. <br /> <span className="text-gray-500">Ready for download.</span>
              </p>
              <a
                href={cvLink}
                download="Bright_Bunhu_CV.pdf"
                className="inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all hover:scale-105 active:scale-95 shadow-2xl"
              >
                <FiDownload size={20} />
                Download CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Cv;
