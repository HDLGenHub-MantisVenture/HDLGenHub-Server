const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/:id")

router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  const user = new User({
    name,
    email,
    age,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const response = await User.findByIdAndDelete(req.params.id);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
