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
  Camera,
  Globe2,
  DollarSign,
  MessageCircle,
} from "lucide-react";
import RotatingText from "../components/RotatingText";

const services = [
  {
    icon: <Code2 className="w-10 h-10 text-primary" />,
    title: "Web Development",
    description: "Custom, fast-loading, mobile-friendly MERN stack websites built with modern technologies.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "App Development",
    description: "Cross-platform, scalable, and efficient mobile apps tailored for your business goals.",
  },
  {
    icon: <Paintbrush className="w-10 h-10 text-primary" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive, and accessible interface designs for engaging user experiences.",
  },
  {
    icon: <CloudCog className="w-10 h-10 text-primary" />,
    title: "Cloud Integration",
    description: "Deploy, scale, and manage apps with modern cloud infrastructure solutions.",
  },
  {
    icon: <BarChart4 className="w-10 h-10 text-primary" />,
    title: "Data Analytics",
    description: "Turn business data into actionable insights and optimize your strategies.",
  },
  {
    icon: <Users2 className="w-10 h-10 text-primary" />,
    title: "IT Consulting",
    description: "Expert advice and scalable solutions for your business operations and tech stack.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Cybersecurity",
    description: "Protect your systems and data with our advanced security solutions and audits.",
  },
  {
    icon: <ServerCog className="w-10 h-10 text-primary" />,
    title: "API Development",
    description: "Custom RESTful and GraphQL APIs for seamless integration and scalable services.",
  },
  {
    icon: <Camera className="w-10 h-10 text-primary" />,
    title: "Digital Marketing",
    description: "Boost your brand visibility and engagement through SEO, ads, and social media campaigns.",
  },
  {
    icon: <Globe2 className="w-10 h-10 text-primary" />,
    title: "E-Commerce Solutions",
    description: "Build secure, fast, and user-friendly online stores with seamless payment gateways.",
  },
  {
    icon: <DollarSign className="w-10 h-10 text-primary" />,
    title: "Business Strategy",
    description: "Craft data-driven growth strategies and digital transformation roadmaps.",
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-primary" />,
    title: "Customer Support Systems",
    description: "Integrate modern live chat, ticketing, and CRM systems for better customer experience.",
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full min-h-screen flex flex-col justify-center px-6 md:px-16 py-20 bg-base-100 overflow-hidden">
      
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-base-content"
      >

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content">
                    Our{" "}
                    <span className="text-primary inline-flex overflow-hidden">
                      <RotatingText
                        texts={["Services", "Services",]}
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

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
            viewport={{ once: true }}
            className="card bg-base-200 shadow-xl p-6 space-y-4 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center justify-center">{service.icon}</div>
            <h2 className="text-xl font-semibold text-center text-base-content">
              {service.title}
            </h2>
            <p className="text-base text-base-content/80 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
