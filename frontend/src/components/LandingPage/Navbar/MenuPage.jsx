import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./MenuPage.css";

const MenuPage = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        document.querySelector(".menu-container").classList.add("exit");
        setTimeout(() => navigate("/"), 800); // Matches the animation time
    };

    return (
        <motion.div
            className="menu-container"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <button className="close-button" onClick={handleClose}>Close</button>

            <div className="menu-content">
                <h1>ABOUT</h1>
                <h1>PROJECTS</h1>
                <h1>PODCAST</h1>
                <h1>BLOG</h1>
                <button className="contact-button">CONTACT</button>
            </div>
        </motion.div>
    );
};

export default MenuPage;
