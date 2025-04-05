// HeroSection.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Hero.css';
const Hero = () => {
    return (
        <section className="hero">
            <Navbar />
            <div className="hero-background">


                <div className="hero-gradient"></div>
            </div>
            <div className="hero-content">
                <h1 style={{ display: 'inline-block', position: 'relative' }}>
                    Learn, Share and Grow Together, and be{' '}
                    <span style={{
                        position: 'relative',
                        display: 'inline-block',
                        paddingBottom: '12px',
                        backgroundImage: 'url(underline.svg)', // Replace with your SVG path
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom center',
                        backgroundSize: 'contain'
                    }}>
                        okay!
                    </span>
                </h1>

                <p
                    style={{
                        maxWidth: "1000px", // Adjust width to break into two lines
                        wordBreak: "break-word", // Ensures breaking at word boundaries
                        lineHeight: "1", // Adjust line spacing for better readability
                        textAlign: "center" // Optional: Center align text
                    }}
                >
                    Be a member of this wonderful community, to learn. <br /> We can do so much together, than being alone!
                </p>                <div className="hero-buttons">
                    <a href="/about" className="primary-button" style={{ fontSize: '20px', backgroundColor: '#66CDAA', color: 'black' }}>
                        About Us!
                    </a>
                    <a href="#learn" className="secondary-button" style={{ fontSize: '20px', color: 'black', }}>
                        Learn More
                    </a>

                </div>
            </div>
            <div className="hero-shape"></div>
        </section>
    );
};

export default Hero;
