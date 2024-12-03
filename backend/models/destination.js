const mongoose = require("mongoose")

const destinationSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

destinationSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("Destination", destinationSchema);