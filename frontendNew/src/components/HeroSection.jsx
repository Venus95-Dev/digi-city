
import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import 'font-awesome/css/font-awesome.min.css';
import './HeroSection.css';
import videoBg from '../assets/herodigi.mp4';

const HeroSection = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <section className="hero-section">
      <video autoPlay muted loop id="hero-video">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1>Phone, Laptop and Tablet Maintenance</h1>
        <div className="search-bar">
          <button onClick={() => navigate('/booking')}>Book Now</button> {/* ✅ Navigate to Appointments Page */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
