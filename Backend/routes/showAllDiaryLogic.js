const express = require("express");
const DiaryPost = require("../models/diaryPostModel");

const router = express.Router();

router.get("/searchDiary", async (req, res) => {
  try {
    const posts = await DiaryPost.find();

    const result = posts.map((post) => ({
      _id: post._id,
      title: post.title,
      location: post.location,
      startDate: post.startDate,
      endDate: post.endDate,
    }));

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
