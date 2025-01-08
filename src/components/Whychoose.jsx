import React from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
  const features = [
    {
      title: 'Ultimate flexibility',
      description:
        "You're in control, with free cancellation and payment options to satisfy any plan or budget.",
      icon: '🌀', // Use an emoji or replace with an icon library
    },
    {
      title: 'Memorable experiences',
      description:
        'Browse and book tours and activities so incredible, you’ll want to tell your friends.',
      icon: '🎉',
    },
    {
      title: 'Quality at our core',
      description:
        'High-quality standards. Millions of reviews. A tour company.',
      icon: '💎',
    },
    {
      title: 'Award-winning support',
      description:
        'New price? New plan? No problem. We’re here to help, 24/7.',
      icon: '🏆',
    },
  ];

  return (
    <section className="why-choose">
      <h2>Why choose Yatra</h2>
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

export default WhyChoose;
