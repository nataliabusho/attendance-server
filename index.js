/*
NATALIA BUSHO
This is the entry point of the express server
*/

//Import required code
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/users");
const appearanceRoutes = require("./routes/appearance");
const locationRoutes = require("./routes/location");

const app = express();
//Use body parser to read request
app.use(bodyParser.json());

//My routes
app.use("/users", userRoutes);
app.use("/appearance", appearanceRoutes);
app.use("/location", locationRoutes);

//Connect to database
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DATABASE}.shgul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("connected to db");
    //start server
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
