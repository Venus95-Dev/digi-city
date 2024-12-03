const destinationsRouter = require("express").Router();

const {
  getAllDestinations,
  getDestinationById,
  createDestination,
} = require("../controllers/destinations");

destinationsRouter.get("/", getAllDestinations);
destinationsRouter.get("/:id", getDestinationById);
destinationsRouter.post("/", createDestination);

module.exports = destinationsRouter;