const express = require("express");
const DiaryPost = require("../models/diaryPostModel");

const router = express.Router();

router.get("/diary/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const diary = await DiaryPost.findById(id);

    if (!diary) {
      return res.status(404).json({ message: "Page not found" });
    }
    res.status(200).json(diary);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
