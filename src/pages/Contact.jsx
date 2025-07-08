import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import contactImage from "../assets/contact.svg";
import RotatingText from "../components/RotatingText";

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

      {/* Right - Text & Card Form */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:w-1/2 h-full flex items-center justify-center px-5 lg:px-16 bg-base-100 relative"
      >
        {/* Mobile SVG background image */}
        <div className="absolute inset-0 lg:hidden opacity-20 pointer-events-none">
          <img
            src={contactImage}
            alt="Background Illustration"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative z-10 w-full max-w-xl">
          <div className="card bg-base-200 shadow-xl p-8 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-base-content">
              Get in{" "}
              <span className="text-primary inline-flex overflow-hidden">
                <RotatingText
                  texts={["Touch", "Touch"]}
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

            <p className="text-base-content/80">
              We'd love to hear about your project ideas, collaborations, or just a friendly hello.
              Fill out the form and we'll get back to you soon!
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                value={form.user_name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                value={form.user_email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="user_phone"
                placeholder="Your Phone"
                className="input input-bordered w-full"
                value={form.user_phone}
                onChange={handleChange}
              />
              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                className="textarea textarea-bordered w-full"
                value={form.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="btn btn-primary rounded-full px-8 text-base">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
