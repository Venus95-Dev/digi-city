



const User = require('../models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

// توکن‌ساز
const createToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// ثبت‌نام
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const user = new User({ name, email, password });
    await user.save();

    const token = createToken(user);
    res.status(201).json({ user: { id: user._id, name, email }, token });
  } catch (err) {
    res.status(500).json({ message: 'Register failed' });
  }
};

// ورود
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Incorrect password' });

    const token = createToken(user);
    res.json({ user: { id: user._id, name: user.name, email: user.email }, token });
  } catch (err) {
    res.status(500).json({ message: 'Login error' });
  }
};

// دریافت پروفایل
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get user' });
  }
};

// فراموشی رمز عبور
exports.forgotPassword = async (req, res) => {
  try {
    const { email, lang = 'en' } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const resetLink = `http://localhost:5173/reset-password/${token}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const subject = lang === 'fi' ? 'Salasanan palautus – DigiCity' : 'Password Reset – DigiCity';
    const message = lang === 'fi'
      ? `<p>Hei ${user.name},</p><p>Klikkaa alla olevaa linkkiä vaihtaaksesi salasanasi:</p><a href="${resetLink}">${resetLink}</a><p>Linkki on voimassa 15 minuuttia.</p>`
      : `<p>Hello ${user.name},</p><p>Click the link below to reset your password:</p><a href="${resetLink}">${resetLink}</a><p>This link will expire in 15 minutes.</p>`;

    await transporter.sendMail({
      from: `"DigiCity" <${process.env.EMAIL_USER}>`,
      to: email,
      subject,
      html: message
    });

    res.json({ message: lang === 'fi' ? 'Sähköposti lähetetty' : 'Email sent' });
  } catch (err) {
    console.error('Forgot password error:', err);
    res.status(500).json({ message: lang === 'fi' ? 'Palvelinvirhe' : 'Server error' });
  }
};

// بازنشانی رمز عبور
exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'Invalid token or user not found' });

    user.password = await bcrypt.hash(password, 10);
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (err) {
    console.error('Reset password error:', err);
    res.status(500).json({ message: 'Invalid or expired token' });
  }
};
