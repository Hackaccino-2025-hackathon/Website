// HomePage.jsx
import React from 'react';
import Hero from './components/LandingPage/hero/hero';
import Extend from './components/LandingPage/hero/hero-extend/extend';
import Features from './components/LandingPage/hero/features/Features';
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Extend />
      <Features />
    </div>
  );
};

export default HomePage;
