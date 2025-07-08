import { motion } from "framer-motion";
import aboutImage from "../assets/about.svg";
import RotatingText from "../components/RotatingText";
import LetterGlitch from "../components/LetterGlitch";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="w-full h-screen flex flex-col lg:flex-row overflow-hidden bg-base-100">
      
      {/* Left - SVG Illustration */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex w-1/2 h-screen items-center justify-center relative overflow-hidden"
      >
        {/* Glitch background on Right Half */}
        <div className="absolute inset-0 z-0">
          <LetterGlitch glitchSpeed={80} opacity={40} />
        </div>

        <motion.img
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          src={aboutImage}
          alt="About illustration"
          className="w-full h-full object-contain opacity-80 z-10"
        />
      </motion.div>

      {/* Right - Text Content */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 lg:px-16 space-y-6 relative"
          >
        
        {/* Mobile SVG background image */}
        <div className="absolute inset-0 lg:hidden opacity-20 pointer-events-none">
            <img
                src={aboutImage}
                alt="Background Illustration"
                className="w-full h-full object-contain"
            />
        </div>
              
        <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-8">
          About{" "}
          <span className="text-primary inline-flex overflow-hidden">
            <RotatingText
              texts={["SyncroSoft", "Future-Ready"]}
              splitBy="characters"
              transition={{ duration: 0.5, ease: "easeOut" }}
              rotationInterval={2500}
              staggerDuration={0.03}
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "100%", opacity: 0 }}
              exit={{ y: "-100%", opacity: 0 }}
            />
          </span>
        </h2>

        <p className="text-lg text-base-content/80">
          At <span className="text-secondary font-bold">SyncroSoft</span>, we specialize in developing{" "}
          <span className="text-secondary font-bold">secure, scalable</span>, and{" "}
          <span className="text-secondary font-bold">high-performance software solutions</span>. We help businesses digitally transform with innovation.
        </p>

        <p className="text-lg text-base-content/80">
          From <span className="text-secondary font-bold">enterprise systems</span> to{" "}
          <span className="text-secondary font-bold">AI-driven platforms</span>, our expert teams deliver custom applications tailored to your goals.
        </p>

        <Link to="/contact" className="mt-6 inline-block">
        <button className="btn btn-primary rounded-full text-base px-8 mt-4">
          Get In Touch
        </button>
      </Link>
      </motion.div>
    </section>
  );
};

export default About;
