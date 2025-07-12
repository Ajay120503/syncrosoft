import React from "react";
import { Mail, Phone, Github, FolderOpen, Star } from "lucide-react";

const TeamCard = ({ member, motion }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="card bg-base-200 border-2 border-base-content/5 shadow-xl hover:shadow-2xl overflow-hidden group relative rounded-xl transition-all duration-100"
    >
      {/* Profile Image */}
      <div className="relative overflow-hidden group">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-96 object-cover rounded-t-xl transition-all duration-500 group-hover:scale-110"
        />

        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-60 transition-all duration-500 z-10 rounded-t-xl"></div>

        {/* Name Label */}
        <h2 className="absolute top-3 left-3 z-20 text-white bg-primary-content/70 px-3 py-1 rounded-lg text-sm font-semibold shadow">
          {member.name}
        </h2>

        {/* CEO Badge */}
        {member.id === 1 && (
          <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 text-xs font-semibold rounded shadow flex items-center gap-1 animate-pulse-glow">
            <Star size={14} /> CEO
          </div>
        )}

      </div>

      {/* Card Body */}
      <div className="card-body text-center space-y-4">
        <p className="text-primary font-bold text-lg">{member.role}</p>

        {/* Action Buttons */}
        <div className="flex justify-center flex-wrap gap-3 pt-2">
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            href={member.email}
            className="btn btn-sm btn-primary btn-circle"
            title="Email"
          >
            <Mail size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            href={member.phone}
            className="btn btn-sm btn-primary btn-circle"
            title="Call"
          >
            <Phone size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            href={member.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary btn-circle"
            title="GitHub"
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            href={member.portfolio}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary btn-circle"
            title="Portfolio"
          >
            <FolderOpen size={18} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
