const user = require("../models/user");

async function getAllUsers(request, response) {
  const all = await user.find(); //pairnei to modelo user kai vriskei ola ta modela user
  const allFiltered = all.map((user) => {
    //epistrefei ola ta stoixeia allagmena xwris pass
    user.password = undefined;
    return user;
  });
  response.send(allFiltered);
}

function getUserbyRFID(request, response) {
  const id = request.query.id;

  if (id) {
    user.findOne({ rfid: id }, (error, user) => {
      if (error) {
        response.send({
          error,
        });
      }
      if (!user) {
        response.send({ user: null });
      }
      user.password = undefined;
      response.send(user);
    });
  } else {
    response.send({ user: null });
  }
}

async function createUser(request, response) {
  const rfid = request.body.rfid;
  const role = request.body.role;
  const email = request.body.email;
  const password = request.body.password;
  const name = request.body.name;
  const lastName = request.body.lastName;
  const health_status = request.body.health_status;
  const permissions = [];
  const new_user = new user({
    rfid,
    role,
    email,
    password,
    name,
    lastName,
    health_status,
    permissions,
  });
  const result = await new_user.save();
  response.send(result);
}

module.exports = {
  getUserbyRFID,
  createUser,
  getAllUsers,
};
