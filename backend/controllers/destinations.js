const Destination = require("../models/destination");

// Get all destinations
const getAllDestinations = async (req, res, next) => {
  // More filters here...
  const { available } = req.query;

  const query = {};
  // Check if filter given and add to query if so.
  if (available) query.available = available;

  try {
    const destinations = await Destination.find(query);
    return res.status(200).json({ success: true, data: destinations });
  } catch (err) {
    console.error("Error fetching destinations", err.message);
    next(err);
  }
};

// Get destination by id
const getDestinationById = async (req, res, next) => {
  try {
    const destination = await Destination.findById(req.params.id);
    return res.status(200).json({ success: true, data: destination });
  } catch (err) {
    console.error("Error fetching destination", err.message);
    next(err);
  }
};

// Create a new destination
const createDestination = async (req, res, next) => {
  const { name, description, pricePerNight, imageUrl, available } = req.body;

  const destination = new Destination({
    name,
    description,
    pricePerNight,
    imageUrl,
    available,
  });

  try {
    const savedDestination = await destination.save();
    return res.status(201).json({ success: true, data: savedDestination });
  } catch (err) {
    console.error("Error creating destination", err.message);
    next(err);
  }
};

module.exports = {
  getAllDestinations,
  getDestinationById,
  createDestination,
};
