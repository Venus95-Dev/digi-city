const bcrypt = require("bcrypt");
const User = require("../models/user");

// Create new user
// TODO Implement validation and patch security issues
const createUser = async (request, response, next) => {  
  const { name, email, password, createdAt } = request.body;

  if (typeof name !== "string" || typeof password !== "string") {
    response.status(400).end();
    return;
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    name,
    email,
    passwordHash,
    createdAt,
  });

  user.save()
    .then(savedUser => {
      response.status(201).json(savedUser)
    })
    .catch(error => next(error))
};

module.exports = {
  createUser,
}