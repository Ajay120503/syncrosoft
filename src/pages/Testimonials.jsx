import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ajay Kandhare",
    feedback: "SyncroSoft delivered exactly what we needed — fast, scalable, and beautifully built.",
  },
  {
    id: 2,
    name: "Rutika Ekshinge",
    feedback: "Their support and execution is unmatched. A brilliant team to work with.",
  },
  {
    id: 3,
    name: "Sohan Kendre",
    feedback: "Professional, responsive, and technically outstanding. Highly recommended!",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

const iconPulse = {
  animate: {
    scale: [1, 1.15, 1],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="lg:w-1/2 w-full h-screen py-20 bg-base-200">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center text-base-content mb-12"
        >
          What Our <span className="text-primary">Clients Say</span>
        </motion.h2>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, rotateX: 1, rotateY: 1 }}
              className="p-6 bg-base-100 rounded-xl shadow-xl border border-base-300 flex flex-col items-center space-y-4 text-center cursor-default"
            >
              <motion.div {...iconPulse}>
                <Quote className="w-9 h-9 text-primary drop-shadow-lg" />
              </motion.div>
              <p className="text-base-content/80 text-lg leading-relaxed">{item.feedback}</p>
              <h4 className="text-lg font-semibold text-primary">{item.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
