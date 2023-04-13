const express = require("express");
const router = express.Router();
const coffeeController = require("../controllers/coffeeController");
const checkAuth = require("../middleware/checkAuth");

router.post("/", checkAuth, coffeeController.addCoffee);
router.get("/", coffeeController.getAllCoffees);
router.post("/:id/rate", checkAuth, coffeeController.rateCoffee);

module.exports = router;
