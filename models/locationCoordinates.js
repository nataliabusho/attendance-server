const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationCoordinatesSchema = new Schema({
  type: {
    type: String,
  },
  coordinate: {
    type: Array,
  },
});

module.exports = locationCoordinatesSchema;
