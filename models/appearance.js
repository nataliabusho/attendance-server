const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appearanceSchema = new Schema(
  {
    location: {
      type: "ObjectId",
      ref: "Location",
    },
    user: {
      type: "ObjectId",
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appearance", appearanceSchema);
