const usersRouter = require("express").Router();

const {
  createUser,
  validateUser,
  // More handlers
} = require("../controllers/users");

usersRouter.post("/signup", createUser);
usersRouter.get("/validate", validateUser);

module.exports = usersRouter;
