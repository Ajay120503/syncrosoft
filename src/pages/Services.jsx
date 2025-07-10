import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Paintbrush,
  CloudCog,
  BarChart4,
  Users2,
  ShieldCheck,
  ServerCog,
  Globe2,
  MessageCircle,
} from "lucide-react";

const services = [
  { icon: Code2, title: "Web Development", description: "Custom, fast-loading, mobile-friendly MERN stack websites built with modern technologies." },
  { icon: Smartphone, title: "App Development", description: "Cross-platform, scalable, and efficient mobile apps tailored for your business goals." },
  { icon: Paintbrush, title: "UI/UX Design", description: "Beautiful, intuitive, and accessible interface designs for engaging user experiences." },
  { icon: CloudCog, title: "Cloud Integration", description: "Deploy, scale, and manage apps with modern cloud infrastructure solutions." },
  { icon: BarChart4, title: "Data Analytics", description: "Turn business data into actionable insights and optimize your strategies." },
  { icon: Users2, title: "IT Consulting", description: "Expert advice and scalable solutions for your business operations and tech stack." },
  { icon: ShieldCheck, title: "Cybersecurity", description: "Protect your systems and data with our advanced security solutions and audits." },
  { icon: ServerCog, title: "API Development", description: "Custom RESTful and GraphQL APIs for seamless integration and scalable services." },
  { icon: Globe2, title: "E-Commerce Solutions", description: "Build secure, fast, and user-friendly online stores with seamless payment gateways." },
  { icon: MessageCircle, title: "Customer Support Systems", description: "Integrate modern live chat, ticketing, and CRM systems for better customer experience." },
];

const Services = () => {
  return (
    <section id="services" className="h-screen w-full bg-base-100 overflow-hidden">
  <div className="w-full h-screen overflow-y-auto px-6 md:px-16 py-10 pt-20">

    {/* Heading */}
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 text-base-content"
    >
      Our{" "}
          <span className="text-primary inline-flex overflow-hidden">
            Services
      </span>
    </motion.h1>

    {/* Services Grid */}
    <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
          viewport={{ once: true }}
          className="card bg-base-200 shadow-lg p-5 rounded-2xl group hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
            {React.createElement(service.icon, { className: "w-9 h-9 text-primary" })}
          </div>

          <h2 className="text-lg font-semibold text-center text-base-content">
            {service.title}
          </h2>
          <p className="text-sm text-center text-base-content/80 mt-2 leading-relaxed">
            {service.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Services;
