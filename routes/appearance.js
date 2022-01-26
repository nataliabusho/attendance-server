const express = require("express");
const appearanceController = require("../controllers/appearanceController");

const router = express.Router();

router.post("/create", appearanceController.saveAppearance);

module.exports = router;
