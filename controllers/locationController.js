const location = require("../models/location");
var ObjectId = require("mongodb").ObjectID;

/**
 * Get single Location based on it's id
 * @param {*} request - http request object
 * @param {*} response - http response object
 * @returns Location
 */
async function getSingleLocation(request, response) {
  const locationID = request.query.id;
  if (!ObjectId.isValid(locationID)) {
    response.statusCode = 400;
    response.send({ location: null });
    return;
  }

  location.findOne({ _id: new ObjectId(locationID) }, (error, location) => {
    if (error) {
      response.statusCode = 500;
      response.send({
        error,
      });
      return;
    }
    if (!location) {
      response.statusCode = 404;
      response.send({ location: null });
    }
    response.send(location);
  });
}

async function getAllLocations(request, response) {
  const all = await location.find();
  response.send(all);
}

async function createLocation(request, response) {
  const name = request.body.name;
  const capacity = request.body.capacity;
  const locationCoordinates = request.body.locationCoordinates;

  const new_location = new location({
    name,
    capacity,
    locationCoordinates,
  });
  const result = await new_location.save();
  response.send(result);
}

module.exports = {
  getSingleLocation,
  createLocation,
  getAllLocations,
};
