import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate(); // React Router navigation

    // Scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle menu toggle to open a new page
    const handleMenuToggle = () => {
        navigate("/menu"); // Redirect to the menu page
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">SkillElevate</a>
                </div>

                {/* Clicking on this will navigate to Menu Page */}
                <div className="navbar-toggle" onClick={handleMenuToggle}>
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <ul className="navbar-menu">
                    <li><a href="/about">About</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/community">Community</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li className="navbar-button" style={{ textDecoration: 'none', listStyle: 'none' }}>
                        <a href="/auth" style={{ textDecoration: 'none' }}>Join Now</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
