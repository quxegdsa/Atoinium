// src/Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Medical Challenges</h2>
          <ul>
            <li>Cancer</li>
            <li>Brain Tumor</li>
            <li>Chronic Diseases</li>
            <li>Diabetes</li>
            <li>Cardiovascular Diseases</li>
            <li>Alzheimer's Disease</li>
            <li>Respiratory Diseases</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Our Research</h2>
          <ul>
            <li><a href="#research1">Research on Cancer</a></li>
            <li><a href="#research2">Brain Tumor Studies</a></li>
            <li><a href="#research3">Chronic Disease Management</a></li>
            <li><a href="#research4">Diabetes Innovations</a></li>
            <li><a href="#research5">Cardiovascular Health</a></li>
            <li><a href="#research6">Alzheimer's Research</a></li>
            <li><a href="#research7">Respiratory Health</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Newsletter</h2>
          <p>Stay updated on the latest research and developments.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <p>&copy; 2024 Therapeutics Medical Research. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
