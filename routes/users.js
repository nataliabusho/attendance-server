const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getUserbyRFID);
router.post("/create", userController.createUser);
router.get("/all", userController.getAllUsers);

module.exports = router;
