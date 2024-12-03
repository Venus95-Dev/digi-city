const Destination = require("../models/destination");

// Get all destinations 
const getAllDestinations = (request, response, next) => {
  const { available } = request.query
  
  const query = {};
  if (available) query.available = available
  
  Destination.find(query)
    .then((data) => {
      response.json(data)
    })
    .catch((error) => next(error))
};

// Get destination by id
const getDestinationById = (request, response, next) => {
  Destination.findById(request.params.id)
  .then(destination => {
    if (destination) {
      response.send(destination)
    } 
    response.status(404).end()
  })
  .catch(error => next(error))
};

// Create a new destination 
const createDestination = (request, response, next) => {
  const { name, description, pricePerNight, imageUrl, available } = request.body

  const destination = new Destination ({
    name, 
    description,
    pricePerNight,
    imageUrl,
    available,
  });

  destination.save()
    .then(savedDestination => {
      response.json(savedDestination)
    })
    .catch(error => next(error))
};

module.exports = {
  getAllDestinations,
  getDestinationById,
  createDestination
};