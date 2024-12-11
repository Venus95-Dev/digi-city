const bcrypt = require("bcrypt");
const User = require("../models/user");

// Create new user
const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (typeof name !== "string" || typeof password !== "string") {
      res.status(400).end();
      return;
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      name,
      email,
      passwordHash,
      createdAt: new Date(),
    });

    const savedUser = await user.save(user);
    return res.status(201).json({ success: true, message: "User created" });
  } catch (err) {
    console.error("Error creating user:", err);
    next(err);
  }
};

module.exports = {
  createUser,
};
