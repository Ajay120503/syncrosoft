import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import RotatingText from "../components/RotatingText";
import project1 from "../assets/projects/FUNCHAT.png";

const projects = [
  {
    name: "FunChat",
    image: project1,
    tech: "MERN Stack, Vite, Tailwind CSS, DaisyUI, REST API",
    description: "A modern MERN-based chat platform with real-time WebSockets, authentication and private routes.",
    github: "https://github.com/Ajay120503/fun-chat.git",
    live: "https://chat-app-q8ci.onrender.com",
  },
];

const badgeColors = ["primary", "secondary", "accent", "info", "success", "warning", "error"];

const Projects = () => {
  return (
    <section id="projects" className="w-full min-h-screen flex flex-col justify-center px-6 md:px-16 py-20 bg-base-100 overflow-hidden">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-base-content"
      >
        Our{" "}
        <span className="text-primary inline-flex overflow-hidden">
          <RotatingText
            texts={["Team Work", "Team Work"]}
            splitBy="characters"
            transition={{ duration: 0.5, ease: "easeOut" }}
            rotationInterval={2500}
            staggerDuration={0.03}
            elementLevelClassName="text-primary"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            exit={{ y: "-100%", opacity: 0 }}
          />
        </span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card bg-base-200 shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-300"
          >
            {/* Image with Project Name Overlay */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover"
              />
              <h2 className="absolute top-4 left-4 text-white bg-secondary px-3 py-1 rounded-lg text-base font-semibold shadow">
                {project.name}
              </h2>

            {/* Card Body */}
            <div className="card-body text-start space-y-3">
              <p className="text-base-content/90 text-[1rem] leading-relaxed font-medium">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="card-actions justify-center flex-wrap mt-2 gap-2">
                {project.tech.split(",").map((stack, i) => (
                  <div key={i} className={`badge badge-${badgeColors[i % badgeColors.length]}`}>
                    {stack.trim()}
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="card-actions justify-center mt-4 gap-2">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline btn-primary" title="GitHub">
                  <Github size={18} />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline btn-primary" title="Live">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
