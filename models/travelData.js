const mongoose = require('mongoose');

const travelDataSchema =  mongoose.Schema({
  name: String,
  email: String,
  destination: String,
  travelers: Number,
  budget: Number,
});

const TravelData = mongoose.model('TravelData', travelDataSchema);

module.exports = {TravelData};
