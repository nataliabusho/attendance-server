const express = require("express");
const locationController = require("../controllers/locationController");

const router = express.Router();

router.get("/", locationController.getSingleLocation);
router.post("/create", locationController.createLocation);
router.get("/all", locationController.getAllLocations);
module.exports = router;
