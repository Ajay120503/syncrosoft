import React from "react";
import { motion } from "framer-motion";
import ViteLogo from "../../public/vite.svg";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-0 z-[100] bg-base-100 flex items-center justify-center"
    >
      <motion.img
        src={ViteLogo}
        alt="Loading..."
        className="w-24 h-24"
        animate={{ scale: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </motion.div>
  );
};

export default Loader;
