const { Coffee } = require("../models/Coffee");

exports.addCoffee = async (req, res) => {
  try {
    const coffee = await Coffee.create({ ...req.body, userId: req.userId });
    res.status(201).json({ message: "Coffee added", coffee });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllCoffees = async (req, res) => {
  try {
    const coffees = await Coffee.findAll();
    res.status(200).json({ coffees });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.rateCoffee = async (req, res) => {
  try {
    const coffee = await Coffee.findByPk(req.params.id);
    if (!coffee) {
      return res.status(404).json({ error: "Coffee not found" });
    }

    coffee.rating = req.body.rating;
    await coffee.save();
    res.status(200).json({ message: "Coffee rated", coffee });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
