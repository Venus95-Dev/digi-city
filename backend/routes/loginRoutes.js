const loginRouter = require("express").Router();

const {
  handleLogin,
  // More handlers
} = require("../controllers/login");

loginRouter.post("/", handleLogin);

module.exports = loginRouter;
