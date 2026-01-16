import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion, useMotionValue, useTransform } from "framer-motion";
import profileImg from "../../static/profile.jpg";

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-dark-bg selection:bg-primary selection:text-white">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-primary/10"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-gray-300 font-medium tracking-wide text-xs uppercase">Available for new projects</span>
          </motion.div>
          
          <h1 className="text-5xl lg:text-8xl font-bold font-heading text-white leading-[1] mb-6 tracking-tight">
            Bright <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary relative">
              Bunhu
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 9.75074 52.0835 9.75026 82.5002 6.99996C125.688 3.09552 197.222 -3.73795 197.222 6.44976" stroke="currentColor" strokeWidth="3"></path></svg>
            </span>
          </h1>

          <div className="text-xl lg:text-3xl font-light text-gray-400 mb-8 h-[40px] flex justify-center lg:justify-start items-center gap-3">
            <span className="text-gray-500">I specialize in</span>
            <span className="font-semibold text-white">
              <Typewriter
                words={[
                  "Data Science",
                  "Artificial Intelligence",
                  "Full Stack Dev",
                  "Cloud Architectures",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
            Bridging the gap between <span className="text-white font-medium border-b border-primary/50">Complex Data</span> and <span className="text-white font-medium border-b border-secondary/50">User Experience</span>. 
            I build intelligent digital solutions that scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Link
              to="/projects"
              className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative z-10">View My Work</span>
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/30"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Unique Image Content - 3D Tilt Card */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          className="relative order-1 lg:order-2 flex justify-center perspective-1000 cursor-grab"
        >
          <div className="relative w-[320px] h-[480px] md:w-[400px] md:h-[550px] lg:w-[450px] lg:h-[600px] group">
            
            {/* Abstract Background Shapes */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10 transform translate-y-4 translate-x-4" />
            
            {/* The Image Card */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-md shadow-2xl">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
              <img
                src={profileImg}
                alt="Bright Bunhu"
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Floating Badges inside the card for uniqueness */}
              <div className="absolute bottom-6 left-6 z-20">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs text-gray-300 uppercase tracking-wider mb-1">Current Focus</p>
                    <p className="text-white font-bold text-lg">AI & Web 3.0</p>
                 </div>
              </div>
            </div>

            {/* Floating Elements outside */}
            <motion.div
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 z-30 bg-card-bg border border-gray-700 p-4 rounded-2xl shadow-xl hidden md:block"
            >
               <span className="text-4xl">🚀</span>
            </motion.div>

             <motion.div
              animate={{ y: [20, -20, 20] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-12 z-30 bg-card-bg border border-gray-700 p-4 rounded-2xl shadow-xl flex items-center gap-3 hidden md:flex"
            >
               <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
               <span className="text-white font-bold font-mono text-sm">System.Online</span>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
