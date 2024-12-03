const loginRouter = require("express").Router();

const {
  handleLogin
} = require("../controllers/login");

loginRouter.post("/", handleLogin);

module.exports = loginRouter;