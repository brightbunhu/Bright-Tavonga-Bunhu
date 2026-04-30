import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend, FiDownload, FiCheckCircle, FiLoader, FiAlertCircle, FiUser, FiClock } from "react-icons/fi";
import emailjs from "emailjs-com";
import cvFile from "../CV/cv.pdf";
import profileImg from "../../static/profile.jpg";

// --- KNOWLEDGE BASE ---
const PROJECT_DETAILS = `
1. BizNest Translation App: A language translation app for real-time multilingual communication during calls/chats. Built with Django, TensorFlow, and JS.
2. MSU Clubs Platform: React-based management system for university clubs at Midlands State University.
3. Loan Default Dashboard: Power BI dashboard for BizNest Microfinance analyzing portfolio risk.
4. Instacart Analysis: Power BI & Streamlit project uncovering retail behavior patterns.
5. Expol Security: Responsive website for a security firm with WhatsApp integration.
6. AfriDestiny: Consultancy platform for business registration in Zimbabwe (Next.js/MongoDB).
`;

const BIO_DETAILS = `
Bright Tavonga Bunhu (Captain Nyuchi / Captain 3266) is an ML Engineer and Full-Stack Developer from Zimbabwe. 
He studies Data Science at Midlands State University (MSU). He has 2+ years of experience.
Contact: brightbunhu4@gmail.com, WhatsApp: +263737757995.
`;

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_KEY; 

const CHAT_STATES = {
  IDLE: "IDLE",
  AWAITING_EMAIL: "AWAITING_EMAIL"
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Bright's personal AI. I can guide you through his work, projects, or share his CV. What would you like to know?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [currentState, setCurrentState] = useState(CHAT_STATES.IDLE);
  const [isTyping, setIsTyping] = useState(false);
  const [activeModel, setActiveModel] = useState(null);
  const messagesEndRef = useRef(null);

  // AUTO-DISCOVERY: Finds the best model and handles prioritization
  useEffect(() => {
    const discoverModel = async () => {
      try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`);
        const data = await res.json();
        
        if (data.models) {
          // Prioritize 'flash' models because they have a much higher free-tier quota (15 RPM)
          const flash = data.models.find(m => m.name.includes("gemini-1.5-flash"));
          const pro = data.models.find(m => m.name.includes("gemini-pro") || m.name.includes("gemini-1.5-pro"));
          
          const bestModel = flash || pro;
          if (bestModel) {
            console.log("SUCCESS: Using model with best quota:", bestModel.name);
            setActiveModel(bestModel.name);
          }
        }
      } catch (e) {
        console.error("Discovery failed", e);
      }
    };
    if (GEMINI_API_KEY) discoverModel();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;

    const userMsg = { id: Date.now(), text, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const lowerText = text.toLowerCase();

    // 1. CV FLOW
    if (currentState === CHAT_STATES.AWAITING_EMAIL) {
      const emailMatch = lowerText.match(/[^\s@]+@[^\s@]+\.[^\s@]+/);
      if (emailMatch) {
        const email = emailMatch[0];
        try {
          await emailjs.send(
            "service_jjilpvh",
            "template_mx4duam",
            { user_email: email, message: `CV Requested via Chatbot by ${email}` },
            "Y9Duuum9HslUIsGYQ"
          );
          setMessages(prev => [...prev, { id: Date.now() + 1, text: `Email received! You can download the CV below.`, isBot: true, isDownload: true }]);
        } catch (error) {
          setMessages(prev => [...prev, { id: Date.now() + 1, text: `Done! You can get the CV here:`, isBot: true, isDownload: true }]);
        }
        setCurrentState(CHAT_STATES.IDLE);
      } else {
        setMessages(prev => [...prev, { id: Date.now() + 1, text: "Please provide a valid email.", isBot: true }]);
      }
      setIsTyping(false);
      return;
    }

    if (lowerText.includes("cv") || lowerText.includes("resume")) {
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now() + 2, text: "I'd be happy to share Bright's CV! May I have your email address first?", isBot: true }]);
        setCurrentState(CHAT_STATES.AWAITING_EMAIL);
        setIsTyping(false);
      }, 600);
      return;
    }

    // 2. AI RESPONSE
    try {
      const modelToUse = activeModel || "models/gemini-1.5-flash";
      
      const prompt = `You are Bright AI, assistant for Bright Tavonga Bunhu. 
      Bio: ${BIO_DETAILS} 
      Projects: ${PROJECT_DETAILS} 
      Answer the user's question concisely: ${text}`;

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/${modelToUse}:generateContent?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });

      const data = await res.json();
      
      if (data.candidates && data.candidates[0].content.parts[0].text) {
        const responseText = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { id: Date.now() + 3, text: responseText, isBot: true }]);
      } else if (data.error && data.error.code === 429) {
        // Quota error handling
        setMessages(prev => [...prev, { 
          id: Date.now() + 4, 
          text: "I'm currently resting because I've hit my free-tier limit. Please try again in about 20 seconds, or ask about something else!", 
          isBot: true,
          isError: true
        }]);
      } else {
        throw new Error(data.error?.message || "Invalid response");
      }
    } catch (e) {
      setMessages(prev => [...prev, { id: Date.now() + 5, text: "I'm having a slight sync issue. Let's try again in a moment!", isBot: true }]);
    }
    setIsTyping(false);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[1000]">
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9, y: "-50%" }}
              animate={{ opacity: 1, x: 0, scale: 1, y: "-50%" }}
              exit={{ opacity: 0, x: 100, scale: 0.9, y: "-50%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-8 top-1/2 w-[360px] md:w-[420px] h-[600px] flex flex-col overflow-hidden rounded-[2.5rem] border shadow-2xl backdrop-blur-3xl pointer-events-auto"
              style={{ background: "var(--glass-nav-bg)", borderColor: "var(--border-strong)", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
            >
              <div className="p-6 pb-4 flex items-center justify-between border-b" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden border-2" style={{ borderColor: "var(--primary)" }}>
                      <img src={profileImg} alt="Bright" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white bg-green-500 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg leading-tight t-text">Bright AI</h3>
                    <p className="text-[11px] font-medium tracking-wide uppercase opacity-60 t-text">Personal Assistant</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-2 hover:bg-surface transition-colors t-text" style={{ background: "var(--surface-2)" }}>
                  <FiX size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 scrollbar-hide">
                {messages.map((m) => (
                  <motion.div key={m.id} initial={{ opacity: 0, x: m.isBot ? -10 : 10, y: 5 }} animate={{ opacity: 1, x: 0, y: 0 }} className={`flex ${m.isBot ? "justify-start" : "justify-end"}`}>
                    <div className={`max-w-[85%] p-4 rounded-2xl text-[14px] leading-relaxed relative ${m.isBot ? "t-surface t-text shadow-sm" : "text-white shadow-lg"}`} style={{ background: m.isError ? "rgba(239, 68, 68, 0.1)" : m.isBot ? "var(--surface)" : "linear-gradient(135deg, var(--primary), var(--secondary))", color: m.isError ? "#ef4444" : "inherit", borderRadius: m.isBot ? "0 20px 20px 20px" : "20px 0 20px 20px", border: m.isError ? "1px solid #ef4444" : m.isBot ? "1px solid var(--border)" : "none" }}>
                      {m.isError && <FiClock className="inline mr-2" />}
                      {m.text}
                      {m.isDownload && (
                        <div className="mt-4 p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
                          <a href={cvFile} download className="flex items-center justify-center gap-2 py-2.5 text-white font-bold text-xs uppercase tracking-wider">
                            <FiDownload size={14} /> Download CV
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="p-4 rounded-2xl t-surface flex gap-1.5 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-40 animate-bounce" />
                      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-40 animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-40 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-6 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="relative group">
                  <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()} placeholder={currentState === CHAT_STATES.AWAITING_EMAIL ? "Type email address..." : "Ask me anything..."} className="w-full pl-5 pr-14 py-4 rounded-2xl border transition-all t-bg t-text focus:ring-2 focus:ring-primary/20 outline-none" style={{ background: "var(--surface-2)", borderColor: "var(--border-strong)" }} />
                  <button onClick={handleSend} disabled={!input.trim()} className="absolute right-2 top-2 w-10 h-10 flex items-center justify-center rounded-xl text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-50" style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }}>
                    <FiSend size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 right-8 pointer-events-auto">
        <motion.button whileHover={{ scale: 1.08, rotate: 5 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(!isOpen)} className="w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-2xl relative group overflow-hidden border-4 border-white/10" style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }}>
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">{isOpen ? <FiX size={32} /> : <FiMessageSquare size={32} />}</div>
          <div className="absolute inset-0 bg-white opacity-20 blur-2xl -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </motion.button>
      </div>
    </div>
  );
};

export default Chatbot;
