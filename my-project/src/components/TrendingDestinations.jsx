import React from 'react';
import './TrendingDestination.css';
import baliImg from '../assets/bali.jpg';
import romaImg from '../assets/roma.jpg';
import parisImg from '../assets/paris.jpg';
import phuketImg from '../assets/phuket.jpg';
import bangkokImg from '../assets/bangkok.jpg';


const TrendingDestination = () => {
  const destinations = [
    { name: 'Bali', tours: '100+ Tours', img: baliImg },
    { name: 'Roma', tours: '100+ Tours', img: romaImg },
    { name: 'Phuket', tours: '100+ Tours', img: phuketImg },
    
    { name: 'Paris', tours: '100+ Tours', img: parisImg },
    { name: 'Bangkok', tours: '100+ Tours', img: bangkokImg },
  ];

  return (
    <section className="trending-destinations">
      <h2>Trending Destinations</h2>
      <div className="cards">
        {destinations.map((dest, index) => (
          <div className="card" key={index}>
            <img src={dest.img} alt={dest.name} />
            <h3>{dest.name}</h3>
            <p>{dest.tours}</p>
          </div>
        ))}
      </div>
      <div className='see-more-container'>
        <button className='see-more'>See More</button>
    </div>

    </section>
  );
};

export default TrendingDestination;
