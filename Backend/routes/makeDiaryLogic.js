const express = require("express");
const DiaryPost = require("../models/diaryPostModel");

const router = express.Router();

router.post("/makeDiary", async (req, res) => {
  const { title, location, startDate, endDate, content } = req.body;

  if (!title || !location || !startDate || !endDate || !content) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newDiary = new DiaryPost({
      title,
      location,
      startDate,
      endDate,
      content,
    });
    await newDiary.save();

    res.status(201).json({ message: "Diary saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
