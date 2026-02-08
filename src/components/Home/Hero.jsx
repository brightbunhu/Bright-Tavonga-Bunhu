import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion, useMotionValue, useTransform } from "framer-motion";
import profileImg from "../../static/profile.jpg";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 lg:pt-0 overflow-hidden bg-dark-bg">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border-white/10 shadow-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-gray-300 font-bold tracking-wider text-[10px] uppercase">Available for Innovation</span>
          </motion.div>
          
          <h1 className="text-6xl lg:text-[100px] font-extrabold font-heading text-white leading-[0.9] mb-8 tracking-tighter">
            Architecting <br />
            <span className="text-gradient">The Future.</span>
          </h1>

          <div className="text-xl lg:text-3xl font-medium text-gray-400 mb-10 h-[40px] flex justify-center lg:justify-start items-center gap-3">
            <span>Specializing in</span>
            <span className="text-white border-b-2 border-primary/30">
              <Typewriter
                words={["Machine Learning", "ML Engineering", "Full Stack Dev", "Next.js & MongoDB"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>

          <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12 font-light">
            I am <span className="text-white font-bold">Bright Bunhu</span>, a visionary developer crafting high-performance, intelligent digital experiences that push the boundaries of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Link
              to="/projects"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold transition-all hover:bg-primary hover:text-white hover:scale-105 active:scale-95 shadow-2xl shadow-white/5"
            >
              Explore Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/cv"
              className="flex items-center justify-center gap-2 px-8 py-4 glass border-white/10 text-white rounded-full font-bold hover:bg-white/5 transition-all active:scale-95"
            >
              <FiDownload size={18} />
              Resume
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Profile & 3D Effect */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            style={{ x, y, rotateX, rotateY, perspective: 1000 }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] cursor-grab active:cursor-grabbing"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-[80px] -z-10" />
            
            {/* Main Image Container */}
            <div className="w-full h-full glass-card rounded-[40px] p-6 lg:p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
              <img
                src={profileImg}
                alt="Bright Bunhu"
                className="w-full h-full object-cover rounded-[32px] shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-10 right-10 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl transform rotate-12 group-hover:rotate-0 transition-all duration-500">
                <p className="text-white font-bold text-xs">TOP RATED</p>
              </div>

               {/* Stats Overlay */}
               <div className="absolute bottom-10 left-10 flex flex-col gap-2">
                 <div className="glass px-4 py-2 rounded-xl flex items-center gap-3 border-white/10">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-[10px] text-white font-bold tracking-widest uppercase">System Online</span>
                 </div>
               </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl border-white/20 shadow-2xl hidden md:block"
            >
              <span className="text-3xl">🚀</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 -left-8 glass p-4 rounded-2xl border-white/20 shadow-2xl hidden md:block"
            >
              <span className="text-3xl">💻</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Scroll Down</span>
        <div className="w-5 h-10 border-2 border-white/10 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
