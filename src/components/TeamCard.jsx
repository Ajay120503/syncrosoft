import React from "react";
import { Mail, Phone, Github, FolderOpen } from "lucide-react";

const TeamCard = ({ member, index, motion }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card bg-base-200 border-2 border-base-content/5 shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-300 relative"
    >
      {/* Profile Image */}
      <div className="relative overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-96 object-cover rounded-t-xl group-hover:scale-105 transition-all duration-500"
        />
        <h2 className="absolute top-3 left-3 text-white bg-primary px-3 py-1 rounded-lg text-sm font-semibold shadow">
          {member.name}
        </h2>
      </div>

      {/* Card Body */}
      <div className="card-body text-center space-y-3">
        <p className="text-primary font-medium text-base">{member.role}</p>

        {/* Action Buttons */}
        <div className="flex justify-center flex-wrap gap-3">
          <a
            href={member.email}
            className="btn btn-sm btn-primary btn-circle"
            title="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={member.phone}
            className="btn btn-sm btn-primary btn-circle"
            title="Call"
          >
            <Phone size={18} />
          </a>
          <a
            href={member.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary btn-circle"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={member.portfolio}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary btn-circle"
            title="Portfolio"
          >
            <FolderOpen size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
