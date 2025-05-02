const User = require('../models/User')
const jwt = require('jsonwebtoken')

// تابع ساخت توکن
const createToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

// ثبت‌نام
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'کاربر با این ایمیل وجود دارد.' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    const token = createToken(newUser);

    res.status(201).json({
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
      token
    });
  } catch (error) {
    res.status(500).json({ message: 'خطای سرور در ثبت‌نام' });
  }
};

// ورود
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'کاربری یافت نشد' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'رمز اشتباه است' });

    const token = createToken(user);

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token
    });
  } catch (error) {
    res.status(500).json({ message: 'خطا در ورود' });
  }
};

// دریافت اطلاعات کاربر لاگین شده
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'خطا در دریافت اطلاعات کاربر' });
  }
};


exports.updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'کاربر یافت نشد' });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    await user.save();

    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    });
  } catch (err) {
    res.status(500).json({ message: 'خطا در بروزرسانی پروفایل' });
  }
};
