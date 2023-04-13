const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.get("/:id", userController.getUser);

module.exports = router;
