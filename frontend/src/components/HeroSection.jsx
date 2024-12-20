import React from 'react';
import './HeroSection.css';


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Find Next Place To Visit</h1>
        <p>Discover amazing places to travel with ease, fun, and convenience.</p>
        <div className="search-bar">
          <input type="text" placeholder="Where" />
          <input type="date" />
          <select>
            <option value="">Tour Type</option>
            <option value="adventure">Adventure</option>
            <option value="relaxation">Relaxation</option>
          </select>
          <button>Search</button>
        </div>
      </div>
     
    </section>
  );
};

export default HeroSection;
