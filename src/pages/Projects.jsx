import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import project1 from "../assets/projects/FUNCHAT.png";
import project2 from "../assets/projects/CWF.png";

const projects = [
  {
    name: "Fun Chat",
    image: project1,
    tech: "MERN Stack, Vite, Tailwind CSS, DaisyUI, REST API",
    description: "A modern MERN-based chat platform with real-time WebSockets, authentication and private routes.",
    github: "https://github.com/Ajay120503/fun-chat.git",
    live: "https://chat-app-q8ci.onrender.com",
  },
  {
    name: "CWF",
    image: project2,
    tech: "MERN Stack, Vite, Tailwind CSS, DaisyUI, REST API",
    description: "A real-time MERN chat app with secure authentication, protected routes, and active user tracking.",
    github: "https://github.com/Ajay120503/chat-app",
    live: "https://chat-app-q8ci.onrender.com/",
  },
];

const badgeColors = ["primary", "secondary", "accent", "info", "success", "warning", "error"];

const Projects = () => {
  return (
    <section id="projects" className="w-full min-h-screen flex flex-col justify-start px-6 md:px-16 py-20 bg-base-100 overflow-hidden">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-base-content"
      >
        Our{" "}
        <span className="text-primary inline-flex overflow-hidden">
          Team Work
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
            className="card bg-base-200 shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-300 relative border-2 border-base-content/5"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover group-hover:scale-105 group-hover:brightness-90 transition-all duration-500"
              />
              <h2 className="absolute top-4 left-4 text-white bg-secondary px-3 py-1 rounded-lg text-base font-semibold shadow">
                {project.name}
              </h2>
            </div>

            {/* Card Body */}
            <div className="card-body text-start space-y-3">
              <p className="text-base-content/90 text-[1rem] leading-relaxed font-medium">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="card-actions justify-center flex-wrap mt-2 gap-2">
                {project.tech.split(",").map((stack, i) => (
                  <div
                    key={i}
                    className={`badge badge-${badgeColors[i % badgeColors.length]} badge-outline`}
                  >
                    {stack.trim()}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="card-actions justify-center mt-4 gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline btn-primary"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline btn-primary"
                  title="Live"
                >
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
