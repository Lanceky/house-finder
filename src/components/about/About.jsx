import React from 'react';
import './about.css';

import key from '../../assets/key.jpg'
const About = () => {
  return (
    <div className="about-container" id='About'>
      <div className="about-wrapper">
        <h1 className="about-title">About House Hunters</h1>
        
        <div className="about-content">
          <div className="about-info-card">
            <h2 className="section-title">Your Dream Home Awaits</h2>
            <p className="about-text">
              At House Hunters, we make finding your perfect home simple and efficient. We match your dreams with reality.
            </p>
            <p className="about-text">
              Our expert team ensures each property recommendation aligns with your specific needs and preferences.
            </p>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span>Personalized matching</span>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span>Expert guidance</span>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span>Full support</span>
              </div>
            </div>
          </div>
          
          <div className="image-container">
            <img 
              src={key}
              alt="House keys symbolizing new beginnings" 
              className="about-image"
            />
            <div className="info-overlay">
              <h3>Ready to Find Your Key?</h3>
              <p>Let our expertise guide you home.</p>
            </div>
          </div>
        </div>

        <div className="cta-container">
          <button className="cta-button">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;