const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

router.post("/login", async (req, res) => {
  const { userId } = req.body;

  try {
    const searchUser = await User.findOne({ userId });

    if (!searchUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;