// src/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section bg-light text-dark text-center py-5">
      <div className="container">
        <h1 className="display-4">Welcome to Therapeutics Medical Research</h1>
        <p className="lead">Harnessing the power of quantum machine learning to revolutionize personalized medicine.</p>
        <a href="#overview" className="btn btn-primary btn-lg mt-3">Learn More</a>
      </div>
    </section>
  );
};

export default HeroSection;