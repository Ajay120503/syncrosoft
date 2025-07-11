import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import contactImage from "../assets/contact.svg";
import Footer from '../components/Footer';

const Contact = () => {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.user_name || !form.user_email || !form.user_phone || !form.message) {
      toast.error("Please fill out all fields!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.user_email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    emailjs
      .send("service_tslitio", "template_sf4lqi6", form, "juI-kUY0pvSq6XNDx")
      .then(() => {
        toast.success("Message sent successfully! 🚀");
        setForm({ user_name: "", user_email: "", user_phone: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Something went wrong. Try again later.");
      });
  };

  return (
    <section id="contact" className="w-full h-screen flex flex-col lg:flex-row overflow-hidden">
      
      {/* Left - Illustration */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex w-1/2 h-screen items-center justify-center relative"
      >
        <motion.img
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          src={contactImage}
          alt="Contact illustration"
          className="w-full h-full object-contain p-12 opacity-90"
        />
      </motion.div>

      {/* Right Form */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:w-1/2 h-full flex items-center justify-center px-5 lg:px-16 bg-base-100 relative"
      >
        <div className="absolute inset-0 lg:hidden opacity-20 pointer-events-none">
          <img src={contactImage} alt="Background" className="w-full h-full object-contain" />
        </div>

        <div className="relative z-10 w-full max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            className="card bg-base-200 shadow-xl p-8 space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-base-content"
            >
              Get in{" "}
              <span className="text-primary inline-flex overflow-hidden">Touch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
              className="text-base-content/80"
            >
              We'd love to hear about your project ideas, collaborations, or just a friendly hello.
              Fill out the form and we'll get back to you soon!
            </motion.p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {["user_name", "user_email", "user_phone"].map((field, i) => (
                <motion.input
                  key={field}
                  type={field.includes("email") ? "email" : "text"}
                  name={field}
                  placeholder={field === "user_name" ? "Your Name" : field === "user_email" ? "Your Email" : "Your Phone"}
                  className="input input-bordered w-full transition duration-300 focus:ring-2 focus:ring-primary"
                  value={form[field]}
                  onChange={handleChange}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 + i * 0.1 }}
                />
              ))}

              <motion.textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                className="textarea textarea-bordered w-full transition duration-300 focus:ring-2 focus:ring-primary"
                value={form.message}
                onChange={handleChange}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
              />

              <motion.button
                type="submit"
                className="btn btn-primary rounded-full px-8 text-base relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="relative z-10">Send Message</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"></span>
              </motion.button>
            </form>
          </motion.div>
        </div>
        <Footer />
      </motion.div>

    </section>
  );
};

export default Contact;
