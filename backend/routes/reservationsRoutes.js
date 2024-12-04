const reservationsRouter = require("express").Router();
const { verifyToken } = require("../utils/middleware");

const {
  createReservation,
  getUserReservationsById,
  deleteReservationById,
} = require("../controllers/reservations");

reservationsRouter.post("/", verifyToken, createReservation);
reservationsRouter.get("/user/:id", getUserReservationsById);
reservationsRouter.delete("/:id", verifyToken, deleteReservationById);

module.exports = reservationsRouter;
