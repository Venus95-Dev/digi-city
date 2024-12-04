const User = require("../models/user")
const Reservation = require("../models/reservation")

// Create a new reservation.
const createReservation = (request, response, next) => {
    const { destinationId, startDate, endDate } = request.body;

    if (!destinationId || !startDate || !endDate) {
      return response.status(400).json({ error: "All fields required" })
    }

    const reservation = new Reservation ({
      userId: request.user.userId,
      destinationId,
      startDate,
      endDate,
      createdAt: new Date()
    })

    reservation.save()
      .then(savedReservation => {
        response.status(201).json(savedReservation)
      })
      .catch(error => next(error))
}

const getUserReservationsById = (request, response, next) => {
  const userId = request.params.id

  Reservation.find({ userId: userId })
    .then(reservations => {
      return response.status(200).json({ success: true, data: reservations })
    })
    .catch(error => next(error))
}

const deleteReservationById = (request, response, next) => {
  const reservationId = request.params.id

  Reservation.deleteOne({ _id: reservationId })
    .then(() => {
      response.status(200).json({ message: "Reservation deletion successful" })
    })
    .catch(error => next(error))
}

module.exports = {
  createReservation,
  getUserReservationsById,
  deleteReservationById
}