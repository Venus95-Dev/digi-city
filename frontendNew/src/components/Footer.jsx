// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>Speak to our expert at 1-800-453-6744</p>
//       <p>© Copyright Digicity 2024</p>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-hours">
          <h4>Visiting Hours</h4>
          <p>Mon - Fri: 11:00 AM - 20:00 PM</p>
          <p>Saturday-Sunday: Close</p>
          
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@digicity.fi</p>
          <p>Phone: 0453418323</p>
          <p>Location: Klaneettotie 12 Helsinki 00420</p>
        </div>

        <div className="footer-socials">
          <h4>Follow Us</h4>
             <div className="social-icons">
        <a href="https://tiktok/" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      
          </div>
        </div>

        <div className="footer-careers">
          <h4>Come Work for Us</h4>
          <p>We’re hiring! Join our growing team and build the future of tech with us.</p>
          <a href="contact" className="careers-link">Contact Us →</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DIGICITY. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
