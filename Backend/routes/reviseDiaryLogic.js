const express = require("express");
const DiaryPost = require("../models/diaryPostModel");

const router = express.Router();

router.put("/diary/:id", async (req, res) => {
  const { title, location, startDate, endDate, content } = req.body;

  if (!title || !location || !startDate || !endDate || !content) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const { id } = req.params;
    const diary = await DiaryPost.findById(id);

    if (!diary) {
      return res.status(404).json({ message: "Page not found" });
    }

    diary.set({ title, location, startDate, endDate, content });
    await diary.save();

    res.status(200).json({
      _id: diary._id,
      title,
      location,
      startDate,
      endDate,
      content,
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
