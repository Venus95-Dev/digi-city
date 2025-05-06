// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  try {
    const { name, email, message, lang = 'en' } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const subject = lang === 'fi' ? 'Yhteydenottolomake – DigiCity' : 'Contact Form – DigiCity';
    const content = lang === 'fi'
      ? `<h3>Uusi viesti</h3><p><strong>Nimi:</strong> ${name}</p><p><strong>Sähköposti:</strong> ${email}</p><p><strong>Viesti:</strong> ${message}</p>`
      : `<h3>New message</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`;

    await transporter.sendMail({
      from: `"DigiCity" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject,
      html: content,
    });

    res.status(201).json({ message: lang === 'fi' ? 'Viesti lähetetty' : 'Message sent successfully' });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
