// src/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo192.png" alt="Logo" />
      </div>
      <h1>Therapeutics Medical Research</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#advantages">Advantages</a></li>
          <li><a href="#challenges">Challenges</a></li>
          <li><a href="#research">Research</a></li>
          <li><a href="#future-vision">Future Vision</a></li>
        </ul>
      </nav>
      <div className="auth-links">
        <a href="/signin">Sign In</a>
        <a href="/signup">Sign Up</a>
      </div>
    </header>
  );
};

export default Header;