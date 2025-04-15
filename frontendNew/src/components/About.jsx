import React from 'react';
import './About.css';
import shakuur from '../assets/shakuur.jpg'

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
Welcome to our store! We’re passionate about providing high-quality tech accessories that make your life easier and cooler. Whether it's phone repairing, computers and tablets car. We providing hight quality repairinf for every device.
        </p>
        <p>
        Digicity was established in 2021 by Abdishakuur Mohamed Nuur, recognizing a market demand for professional phone repair services.        </p>
        <p>
        With a lifelong passion for phone repairs, the founder has honed his skills
        to a professional standard over the years.        </p>
        <p>
         ❤️
        </p>


        <img src={shakuur} alt='shakuur'/>
      </div>
    </section>
  );
}

export default AboutUs;
