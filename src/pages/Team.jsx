import React from "react";
import { motion } from "framer-motion";
import RotatingText from "../components/RotatingText";
import TeamCard from "../components/TeamCard.jsx";

import AJAY from "../assets/team/ajay.jpeg";
import SADHANA from "../assets/team/sadhana.jpeg";
import SOHAN from "../assets/team/sohan.jpeg";
import ABHISHEK from "../assets/team/abhishek.jpeg";

const teamMembers = [
  {
    name: "Ajay Kandhare",
    role: "Full Stack Developer",
    photo: AJAY,
    email: "mailto:ajaysyncrosoft@gmail.com",
    phone: "tel:+917559394187",
    github: "https://github.com/ajaysyncrosoft",
    portfolio: "https://portfolio-0-sigma.vercel.app",
  },
  {
    name: "Sadhana Jadhav",
    role: "Web Developer",
    photo: SADHANA,
    email: "mailto:sadhana.syncrosoft@gmail.com",
    phone: "tel:+919561082845",
    github: "https://github.com/Sadhanasyncro",
    portfolio: "https://demo.com",
  },
  {
    name: "Sohan Kendre",
    role: "Web Developer",
    photo: SOHAN,
    email: "mailto:sohan.syncrosoft@gmail.com",
    phone: "tel:+918530896645",
    github: "https://github.com/Sohansyncrosoft",
    portfolio: "https://demo.com",
  },
  {
    name: "Abhishek Jaiswar",
    role: "Full Stack Developer",
    photo: ABHISHEK,
    email: "mailto:abhishek.syncrosoft@gmail.com",
    phone: "tel:+918530896645",
    github: "https://github.com/SycroAbhi",
    portfolio: "https://demo.com",
  },
];

const Team = () => {
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

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} index={index} motion={motion} />
        ))}
      </div>
    </section>
  );
};

export default Team;
