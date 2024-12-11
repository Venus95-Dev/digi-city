const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

// Handle login and issue JWT token cookie
const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  if (typeof email !== "string" || typeof password !== "string") {
    res.status(400).end();
    return;
  }

  const user = await User.findOne({ email });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: "invalid username or password",
    });
  }

  const userForToken = {
    userId: user._id,
    email: user.email,
  };

  const token = jwt.sign(userForToken, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
    maxAge: 3600000 // Cookie expiry (1 hour)
  })

  res.json({ message: 'Logged in successfully' });
};

module.exports = {
  handleLogin,
};
