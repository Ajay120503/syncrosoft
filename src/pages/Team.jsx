import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard.jsx";

import SAMARTH from "../assets/team/samarth.jpeg";
import RUTIKA from "../assets/team/rutika.jpeg";
import AJAY from "../assets/team/ajay.jpeg";
import SADHANA from "../assets/team/sadhana.jpeg";
import SOHAN from "../assets/team/sohan.jpeg";
import ABHISHEK from "../assets/team/abhishek.jpeg";

const teamMembers = [
  {
    id: 1, name: "Samarth Kanthale", role: "Full Stack Developer", photo: SAMARTH},
  { id: 2, name: "Rutika Ekshinge", role: "Web Developer", photo: RUTIKA },
  { id: 3, name: "Ajay Kandhare", role: "Full Stack Developer", photo: AJAY },
  { id: 4, name: "Sadhana Jadhav", role: "Web Developer", photo: SADHANA },
  { id: 5, name: "Sohan Kendre", role: "Web Developer", photo: SOHAN },
  { id: 6, name: "Abhishek Jaiswar", role: "Full Stack Developer", photo: ABHISHEK },
];

const Team = () => {
  const [shuffledMembers, setShuffledMembers] = useState([]);

  const shuffleMembers = () => {
    const shuffled = [...teamMembers].sort(() => Math.random() - 0.5);
    setShuffledMembers(shuffled);
  };

  useEffect(() => {
    shuffleMembers();
    const interval = setInterval(() => {
      shuffleMembers();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="team"
      className="w-full min-h-screen flex flex-col justify-start px-6 md:px-16 py-20 bg-base-100"
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-base-content"
      >
        Meet Our{" "}
        <span className="text-primary inline-flex overflow-hidden">Team</span>
      </motion.h1>

      <motion.div
        layout
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
      >
        {shuffledMembers.map((member, index) => (
          <motion.div
            key={member.id}
            layout
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <TeamCard member={member} index={index} motion={motion} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
