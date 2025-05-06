
// module.exports = router;


const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST: Create new booking + send email
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, date, time, service, lang } = req.body;

    if (!name || !phone || !email || !date || !time || !service) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const booking = new Booking({ name, phone, email, date, time, service });
    await booking.save();

    // Email content based on language
    const subject = lang === 'fi' ? 'Varausvahvistus – Digicity' : 'Booking Confirmation – Digicity';
    const body = lang === 'fi'
      ? `<h2>Kiitos varauksestasi, ${name}!</h2>
         <p>Palvelu: ${service}</p>
         <p>Päivämäärä: ${date}</p>
         <p>Kellonaika: ${time}</p>
         <p>Nähdään pian Digicityssä!</p>`
      : `<h2>Thank you for your booking, ${name}!</h2>
         <p>Service: ${service}</p>
         <p>Date: ${date}</p>
         <p>Time: ${time}</p>
         <p>We look forward to seeing you at Digi City!</p>`;

    await transporter.sendMail({
      from: `"Digicity" <${process.env.EMAIL_USER}>`,
      to: email,
      subject,
      html: body,
    });

    res.status(201).json({ message: 'Booking created and email sent successfully' });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET: Bookings by date
router.get('/', async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) return res.status(400).json({ error: 'Date is required' });

    const bookings = await Booking.find({ date });
    res.json(bookings);
  } catch (error) {
    console.error('Fetch bookings error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
