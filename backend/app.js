const config = require("./utils/config");

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const usersRouter = require("./routes/usersRoutes");
const loginRouter = require("./routes/loginRoutes");
const logoutRouter = require("./routes/logoutRoutes");
const destinationsRouter = require("./routes/destinationRoutes");
const reservationsRouter = require("./routes/reservationsRoutes");

app.use(express.json());
app.use(cookieParser());

const middleware = require("./utils/middleware");

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
app.use("/api/auth", usersRouter);
app.use("/api/auth/login", loginRouter);
app.use("/api/auth/logout", logoutRouter);
app.use("/api/destinations", destinationsRouter);
app.use("/api/reservations", reservationsRouter);

module.exports = app;
