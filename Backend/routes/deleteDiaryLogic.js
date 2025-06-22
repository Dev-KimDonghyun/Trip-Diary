const express = require("express");
const DiaryPost = require("../models/diaryPostModel");

const router = express.Router();

router.delete("/diary/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const diary = await DiaryPost.findById(id);

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
