const User = require("../models/user");
const Reservation = require("../models/reservation");

// Create a new reservation.
const createReservation = async (req, res, next) => {
  const { destinationId, startDate, endDate } = req.body;

  if (!destinationId || !startDate || !endDate) {
    return res.status(400).json({ error: "All fields required" });
  }

  const reservation = new Reservation({
    userId: req.user.userId,
    destinationId,
    startDate,
    endDate,
    createdAt: new Date(),
  });

  try {
    const savedReservation = await reservation.save();
    return res.status(201).json({ success: true, data: savedReservation });
  } catch (err) {
    console.error("Error creating reservation:", err.message);
    next(err);
  }
};

const getUserReservationsById = async (req, res, next) => {
  try {
    const reservations = await Reservation.find({ userId: req.params.id });
    return res.status(200).json({ success: true, data: reservations });
  } catch (err) {
    console.error("Error fetching reservations:", err.message);
    next(err);
  }
};

const deleteReservationById = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    // Ensure user owns the reservation
    if (reservation.userId !== req.user.userId) {
      return res.status(403).json({ error: "Forbidden" });
    }

    await Reservation.deleteOne({ _id: req.params.id });
    return res.status(200).json({ success: true, message: "reservation deleted" });
  } catch (err) {
    console.error("Error deleting reservation:", err.message);
    next(err);
  }
};

module.exports = {
  createReservation,
  getUserReservationsById,
  deleteReservationById,
};
