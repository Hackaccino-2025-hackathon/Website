import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section brand">
          <h2><span className="highlight">L</span>earning</h2>
          <p>
            Build your network, share skills, and open up on the Learning
            platform where you can be your whole self Forward Arrow
          </p>
        </div>

        <div className="footer-section links">
          <ul>
            <li>About</li>
            <li>Team & Career</li>
            <li>Solutions</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section links">
          <ul>
            <li>Health & Fitness</li>
            <li>Business Coach</li>
            <li>Leadership</li>
            <li>Programming</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <p>(316) 555-0116</p>
          <p><a href="mailto:contact@mail.com">contact@mail.com</a></p>
          <div className="social-icons">
            <div className="icon">f</div>
            <div className="icon">t</div>
            <div className="icon">in</div>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>Copyright © 2022 Musemind <span className="link">ui/ux design</span> agency | All rights reserved.</p>
        <div className="footer-policy">
          <span>Terms of Service</span>
          <span>Privacy & Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
