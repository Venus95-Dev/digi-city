

import React, { useState } from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    
  };

  return (
    <section id="contact" className="contact-page">
      <h2>{t('contact.title')}</h2>
      <p>{t('contact.subtitle')}</p>

      {submitted ? (
        <div className="thank-you-message">
          <h3>{t('contact.thankYou')}</h3>
          <p>{t('contact.response')}</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t('contact.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contact.namePlaceholder')}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contact.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contact.emailPlaceholder')}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.messagePlaceholder')}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            {t('contact.send')}
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
