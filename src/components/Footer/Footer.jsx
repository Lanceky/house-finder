import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Footer Top Section */}
                <div className="footer-top">
                    {/* Address Section */}
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>House Hunters Headquarters</p>
                        <p>123 Dream Homes Lane, Nairobi, Kenya</p>
                        <p>Phone: +254 700 123 456</p>
                        <p>Email: support@househunters.com</p>
                    </div>

                    {/* Referral Links */}
                    <div className="footer-section">
                        <h3>Explore More</h3>
                        <ul className="footer-links">
                            <li><a href="#">Real Estate Partners</a></li>
                            <li><a href="#">Find a Realtor</a></li>
                            <li><a href="#">Property Listings</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#" className="social-icon facebook">Facebook</a>
                            <a href="#" className="social-icon instagram">Instagram</a>
                            
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} House Hunters. All Rights Reserved.</p>
                    <p>Designed by House Hunters Creative Team</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
