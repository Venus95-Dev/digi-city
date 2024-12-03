const config = require("./utils/config");

const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRoutes");
const loginRouter = require("./routes/loginRoutes");
const destinationsRouter = require("./routes/destinationRoutes");

app.use(express.json());

const middleware = require("./utils/middleware")

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

console.log("connecting to", config.MONGODB_URI);
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: \n", error);
  });

app.use(middleware.requestLogger);
app.use("/api/auth/signup", usersRouter);
app.use("/api/auth/login", loginRouter);
app.use("/api/destinations", destinationsRouter);

module.exports = app;
