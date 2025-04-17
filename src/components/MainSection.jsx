import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 12, delay: 0.1 },
  },
};

const buttonVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 12, delay: 0.4 },
  },
};

const imageVariants = {
  hidden: { x: 120, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 12, delay: 0.7 },
  },
};
const openWhatsApp = () => {
  // Create the WhatsApp URL with encoded message
  const whatsappUrl = `https://api.whatsapp.com/send?phone=919999753539`;
  
  // Open WhatsApp in a new tab
  window.open(whatsappUrl, "_blank");
};

const MainSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-10 md:py-16 bg-[#f9f6f2] relative overflow-hidden gap-y-8 md:gap-y-0 gap-x-0 md:gap-x-8">
      <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <span className="block mb-1 sm:mb-2">Redesign your <span className="text-red-700">MIND..</span></span>
          <span className="block">Redesign your <span className="text-blue-800">LIFE..</span></span>
        </motion.h1>
        <motion.button
          className="btn-gradient-hover text-white w-full sm:w-auto px-8 py-3 rounded-full font-semibold text-lg shadow transition mt-4 cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          onClick={openWhatsApp}
        >
          Talk To Me
        </motion.button>
      </div>
      <motion.div
        className="flex items-center justify-center w-full md:w-1/2 mb-6 md:mb-0"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img
          src="/logo.jpg"
          alt="Shveta Sharma"
          className="rounded-full w-64 h-64 sm:w-64 sm:h-64 md:w-[450px] md:h-[450px] object-bottom border-8 border-red-300"
          />
        </motion.div>
      </section>
    );
  };
  
  export default MainSection;
  
