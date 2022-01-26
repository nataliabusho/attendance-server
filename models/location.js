const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const locationCoordinates = require("./locationCoordinates");

const locationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
    },
    locationCoordinates: {
      type: locationCoordinates,
    },
  },
  { timestamps: true } //createdat.updatedat
);

module.exports = mongoose.model("Location", locationSchema);
