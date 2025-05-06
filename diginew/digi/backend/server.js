// server.js
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./routes/authRoutes');// 👈 روت auth
const bookingsRoute = require('./routes/bookings');
const contactRoutes = require('./routes/contact');



const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes); // 👈 اضافه کردن مسیر
app.use('/api/bookings', bookingsRoute);
app.get('/', (req, res) => {
  res.send('Digi City Backend is running 🎉')
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB error:', err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))
