// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Optional: Import a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Land Lease Portal. All rights reserved.</p>
            <div className="social-media">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
