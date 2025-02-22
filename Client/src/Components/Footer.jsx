import React from "react";
import footerImage from '../assets/footer-image.png'; // Ensure the correct path to the footer image
import '../Css/Footer.css'; // Include a separate CSS file for styling

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Background Image */}
      <img src={footerImage} alt="Footer Background" className="footer-image" />

      {/* Centered Content */}
      <div className="footer-content">
        <h1 className="footer-heading">Say Hello to Us</h1>

     
        <div className="email-section">
          <input
            type="email"
            placeholder="Your email address"
            className="email-input"
          />
          <button className="send-button">
            SEND
            <span className="arrow">→</span>
          </button>
        </div>

        {/* Footer Navigation */}
        <div className="footer-links">
          <a href="#orders">ORDERS</a>
          <a href="#search">SEARCH</a>
          <a href="#returns">RETURNS</a>
          <a href="#deliveries">DELIVERIES</a>
          <a href="#support">SUPPORT</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
