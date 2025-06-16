const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/logInModel");

router.post("/login", async (req, res) => {
  const { userId, userPw } = req.body;

  try {
    const searchUser = await User.findOne({ userId });

    if (!searchUser) {
      // Message
    }

    const matchUserPw = await bcrypt.compare(userPw, searchUser.userPw);

    if (!matchUserPw) {
      // Message
    }

    // Issuing and Delivering JWT Token
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});
