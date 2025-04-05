import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./MenuPage.css";

// Variants for the entire menu container (handling slide-down effect)
const containerVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  exit: { y: "100%", opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }
};

// Variants for individual nav items – they start offscreen (to the right) and slide in
const navItemVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: "0%", opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

// Parent variants for staggering the children animations
const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="menu-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Background image with pulsing oscillation */}
      <motion.div
        className="bg-image"
        style={{
          backgroundImage: `url("/banner_img.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -10,
          filter: "brightness(97%)", 
        }}
        animate={{
          scale: [1, 1.05, 1],      // keyframes: start at 1 → 1.05 → back to 1
          opacity: [1, 0.9, 1]      // slight fade in/out
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          
          
        }}
      />

      <button
        className="close-button"
        onClick={() => navigate("/")}
      >
        Close
      </button>

      <motion.div
        className="menu-content"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={navItemVariants}>ABOUT</motion.h1>
        <motion.h1 variants={navItemVariants}>PROJECTS</motion.h1>
        <motion.h1 variants={navItemVariants}>PODCAST</motion.h1>
        <motion.h1 variants={navItemVariants}>BLOG</motion.h1>
        <motion.button
          variants={navItemVariants}
          className="contact-button"
        >
          CONTACT
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default MenuPage;
