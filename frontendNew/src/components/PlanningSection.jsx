import React from 'react';
import './PlanningSection.css';
import { useNavigate } from 'react-router-dom';
import londonImg from '../assets/passi1.jpg'

const PlanningSection = () => {
  const navigate = useNavigate(); 
  return (
    <section className="planning-section">
      <div className="planning-content">
    
        <p>At DIGICITY, we offer quick and convenient Passport Photography services tailored to your needs..</p>
        <h>No long waits just book your appointment and get your photos done affordably and efficiently.</h>
        <button className="see-more-btn"onClick={() => navigate('/booking')}>Book Now</button> 
      </div>
      <div className="planning-image">
        <img src={londonImg} alt="Big Ben in London" />
      
      </div>
    </section>
  );
};

export default PlanningSection;





