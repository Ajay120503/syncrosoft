import React from "react";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 14,
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="w-screen absolute bottom-0 right-0 bg-base-200 text-base-content py-3 mt-auto shadow-inner"
    >
      <motion.div
        variants={footerVariants}
        className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6"
      >
        {/* Created by */}
        <motion.p variants={textVariants} className="text-sm">
          Created by{" "}
          <span className="text-primary font-semibold hover:animate-pulse cursor-pointer">
            SyncroSoft Solutions
          </span>
        </motion.p>

        {/* Rights reserved */}
        <motion.p variants={textVariants} className="text-sm mt-2 md:mt-0">
          &copy; {new Date().getFullYear()} SyncroSoft Solutions. All rights reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
