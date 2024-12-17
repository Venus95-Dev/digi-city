const logoutRouter = require("express").Router();

const {
  handleLogout,
  // More handlers
} = require("../controllers/logout");

logoutRouter.post("/", handleLogout);

module.exports = logoutRouter;
