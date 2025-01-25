import React from 'react';
import './contact.css';
import { FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons

const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <h2 className="contact-heading">Get in Touch</h2>
            <p className="contact-description">
                Connect with us on social media or send us a message. We'd love to hear from you!
            </p>
            
            <div className="social-media-links">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                    <FaInstagram />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
                    <FaWhatsapp />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                    <FaFacebook />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                    <FaTwitter />
                </a>
            </div>
            
            <div className="contact-form-container">
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Enter your message" required />
                    </div>
                    <button type="submit" className="contact-submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
