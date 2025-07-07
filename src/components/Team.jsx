import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, FolderOpen } from "lucide-react";

import member1 from "../assets/team/ajay.jpeg";
import RotatingText from "./RotatingText";

const teamMembers = [
  {
    name: "Ajay Kandhare",
    role: "Full Stack Developer",
    photo: member1,
    email: "mailto:ajaysyncrosoft@gmail.com",
    phone: "tel:+917559394187",
    github: "https://github.com/ajaysyncrosoft",
    portfolio: "https://portfolio-0-sigma.vercel.app",
  },
];

const Team = () => {
  return (
    <section id="team" className="w-full min-h-screen flex flex-col justify-center px-6 md:px-16 py-20 bg-base-100">
      
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-base-content"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content">
                    Meet Our{" "}
                    <span className="text-primary inline-flex overflow-hidden">
                      <RotatingText
                        texts={["Team", "Team",]}
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
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card bg-base-200 shadow-xl overflow-hidden relative group hover:scale-[1.03] transition-all duration-300"
          >
            {/* Profile Image */}
            <div className="relative">
              <img src={member.photo} alt={member.name} className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">
                <a href={member.email} className="btn btn-sm btn-primary btn-circle" title="Email">
                  <Mail size={18} />
                </a>
                <a href={member.phone} className="btn btn-sm btn-primary btn-circle" title="Call">
                  <Phone size={18} />
                </a>
              </div>
              <h2 className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-white bg-primary px-4 py-1 rounded-full text-lg font-semibold shadow">
                {member.name}
              </h2>
            </div>

            {/* Body */}
            <div className="card-body items-center text-center mt-8">
              <p className="text-primary text-sm font-medium">{member.role}</p>

              <div className="card-actions mt-4 flex gap-2">
                <a href={member.github} target="_blank" rel="noreferrer" className="btn btn-sm btn-circle btn-outline btn-primary" title="GitHub">
                  <Github size={18} />
                </a>
                <a href={member.portfolio} target="_blank" rel="noreferrer" className="btn btn-sm btn-circle btn-outline btn-primary" title="Portfolio">
                  <FolderOpen size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
