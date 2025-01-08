
import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* <h1>Find Your Next Adventure</h1> */}
        <div className="search-bar">
          <i className="fa fa-search search-icon" aria-hidden="true"></i>
          <input
            type="text"
            placeholder="Find Your Next Adventure...."
            className="search-input"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
