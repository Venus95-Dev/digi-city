import React from 'react';
import './Whychoose.css';

const Whychoose = () => {
  const features = [
    {
      title: 'Why',
      description:
        "Digicity offers fast, reliable repairs for phones, tablets, and computers. Since 2021, we’ve become a trusted name, also providing accessories and refurbished devices.",
      icon: '❓', // Use an emoji or replace with an icon library
    },
    {
      title: 'RAPID SMARTPHONE REPAIRS',
      description:
        'Our certified technicians fix most issues on-site — often in under an hour. No appointment needed!',
      icon: '⚡',
    },
    {
      title: 'PEACE OF MIND – 12 MONTH WARRANTY ',
      description:
        'All screen repairs come with a 12-month warranty, giving you peace of mind and trusted quality.',
      icon: '✅',
    },
    
   
  ];

  return (
    <section className="why-choose">
      <h2>Why choose DIGICITY</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whychoose;
