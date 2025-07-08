import React from "react";
import { motion } from "framer-motion";
import HERO_SVG from "../assets/innovation.svg";
import RotatingText from "../components/RotatingText";
import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <section id="home" className="w-full h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left - Text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 h-full flex flex-col justify-center px-5 lg:px-16 space-y-6 bg-base-100 relative"
      >
        {/* Mobile SVG background image */}
        <div className="absolute inset-0 lg:hidden opacity-20 pointer-events-none">
          <img
            src={HERO_SVG}
            alt="Background Illustration"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content">
            Welcome to{" "}
            <span className="text-primary inline-flex overflow-hidden">
              <RotatingText
                texts={["syncrosoft", "syncrosoft",]}
                splitBy="characters"
                transition={{ duration: 0.5, ease: "easeOut" }}
                rotationInterval={2500}
                staggerDuration={0.03}
                splitLevelClassName=""
                elementLevelClassName="text-primary"
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: "100%", opacity: 0 }}
                exit={{ y: "-100%", opacity: 0 }}
              />
            </span>
          </h1>
          
          <p className="text-lg text-base-content/80 mt-4">
            We specialize in{" "}
            <span className="text-secondary font-bold">secure software development</span>,{" "}
            <span className="text-secondary font-bold">scalable solutions</span>,{" "}
            <span className="text-secondary font-bold">high-performance software</span>,{" "}
            <span className="text-secondary font-bold">web development</span>,{" "}
            <span className="text-secondary font-bold">mobile apps</span>,{" "}
            <span className="text-secondary font-bold">cloud infrastructure</span>, and{" "}
            <span className="text-secondary font-bold">AI-driven platforms</span>.
          </p><br/>
          <p className="text-lg text-base-content/80">
            We also build expert{" "}
            <span className="text-secondary font-bold">enterprise systems</span>,{" "}
            <span className="text-secondary font-bold">data-driven applications</span>,{" "}
            <span className="text-secondary font-bold">product designs</span> and{" "}
            <span className="text-secondary font-bold">reliable digital products</span> for businesses.
          </p>
          <Link to="/projects" className="mt-6 inline-block">
            <button className="btn btn-secondary text-base md:text-lg px-6 md:px-8">
              View Our Work
            </button>
          </Link>

        </div>
      </motion.div>

      {/* Right - SVG Full Half */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="hidden lg:flex w-1/2 h-screen items-center justify-center relative"
      >
        <div className="relative w-full h-full overflow-hidden">
          <motion.img
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            src={HERO_SVG}
            alt="Syncrosoft Illustration"
            className="w-full h-full object-contain py-20 opacity-90"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Home;
