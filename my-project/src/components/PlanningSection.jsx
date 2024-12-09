import React from 'react';
import './PlanningSection.css';
import londonImg from '../assets/london.jpg'

const PlanningSection = () => {
  return (
    <section className="planning-section">
      <div className="planning-content">
        <h2>Keep on Planning</h2>
        <p>What to do, where to eat & more trip inspo.</p>
        <button className="see-more-btn">See More</button>
      </div>
      <div className="planning-image">
        <img src={londonImg} alt="Big Ben in London" />
      </div>
    </section>
  );
};

export default PlanningSection;





