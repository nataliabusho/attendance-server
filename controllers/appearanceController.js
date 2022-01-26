const appearance = require("../models/appearance");
const user = require("../models/user");
var ObjectId = require("mongodb").ObjectID;

async function saveAppearance(request, response) {
  const locationID = request.body.locationID;
  const rfID = request.body.rfID;

  //error 1
  if (!locationID || !rfID || !ObjectId.isValid(locationID)) {
    response.statusCode = 400;
    response.send({ appearance: null });
    return;
  }

  const userObject = await user.findOne({ rfid: rfID }, (error, user) => {
    if (error || !user) {
      return null;
    }
    return user;
  });
  //error2
  if (userObject === null) {
    response.statusCode = 404;
    response.send({ appearance: null });
    return;
  }

  const userID = userObject._id;
  const new_appearance = new appearance({
    user: userID,
    location: locationID,
  });
  const result = await new_appearance.save();
  response.send(result);
}

module.exports = {
  saveAppearance,
};
