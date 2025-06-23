const express = require("express");
const User = require("../models/UserModel");

const router = express.Router();

router.post("/createId", async (req, res) => {
  const { nickName, userId } = req.body;

  if (!nickName || !userId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const checkUserId = await User.findOne({ userId });

    if (checkUserId) {
      return res.status(409).json({ message: "User ID already exists" });
    }

    const newUser = new User({ nickName, userId, createdAt });
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        userId: newUser.userId,
        nickName: newUser.nickName,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
