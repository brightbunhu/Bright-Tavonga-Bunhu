import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiFileText } from "react-icons/fi";

const MellisaCV = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 flex flex-col items-center justify-center t-bg">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-10">
          <span
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: "var(--primary)" }}
          >
            Curriculum Vitae
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold t-text mt-3 mb-4 tracking-tight">
            Mellisa Mukaro CV
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Click the button below to download the CV for Mellisa Mukaro.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
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
              background: "rgba(59, 130, 246, 0.1)",
              color: "var(--primary)",
            }}
          >
            <FiFileText size={32} />
          </div>

          <h2 className="font-heading text-2xl font-bold t-text mb-6">
            Ready to Download
          </h2>

          <a
            href="/Mellisa_Mukaro_CV.pdf"
            download="Mellisa_Mukaro_CV.pdf"
            className="w-full flex items-center justify-center gap-2 py-4 text-white font-semibold rounded-xl transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ background: "var(--primary)" }}
          >
            <FiDownload size={18} />
            Download Mellisa CV
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MellisaCV;
