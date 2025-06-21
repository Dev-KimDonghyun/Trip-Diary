const express = require("express");
const User = require("../models/UserModel");

const router = express.Router();

router.get("/userInfo", async (req, res) => {
  try {
    const userId = req.body.userId;

    const user = await User.findOne({ userId });

    const { ...createdAt } = user.toObject();
    res.status(200).json({ userId, nickname, createdAt });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
