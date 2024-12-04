const usersRouter = require("express").Router();

const {
  createUser,
  // More handlers
} = require("../controllers/users");

usersRouter.post("/", createUser);

module.exports = usersRouter;
