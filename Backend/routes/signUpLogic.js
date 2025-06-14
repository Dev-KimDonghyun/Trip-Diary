const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/signUpModel");

router.post("/api/signup", async (req, res) => {
  const { nickName, userId, userPw } = req.body;

  if (!nickName || !userId || !userPw) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const checkUserId = await User.findOne({ userId });

    if (checkUserId) {
      return res.status(409).json({ message: "User ID already exists" });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPw = await bcrypt.hash(userPw, salt);
    const newUser = new User({ nickName, userId, userPw: hashedPw });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
