const express = require("express");
const DiaryPost = require("../models/diaryPostModel");
const mongoose = require("mongoose");

const router = express.Router();

router.delete("/diary/:id", async (req, res) => {
  try {
    const { _id, userId } = req.params;

    const diary = await DiaryPost.findOne({
      _id: new mongoose.Types.ObjectId(String(_id)),
      userId: new mongoose.Types.ObjectId(String(userId)),
    });

    if (!diary) {
      return res.status(404).json({ message: "Page not found" });
    }

    await diary.deleteOne();

    res.status(200).json({
      message: "Diary deleted successfully",
      title: diary.title,
      location: diary.location,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
