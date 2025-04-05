import React from 'react';
import './Join.css';

const Join = () => {
  return (
    <div
      className="subscribe-section"
      style={{ backgroundImage: `url('/join.png')` }}
    >
      <div className="subscribe-content">
        <h1>Join with us & <br /> grow your <span>Personal Skills</span></h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
        </p>
        <div className="subscribe-input">
          <input type="email" placeholder="Enter Your Mail" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
