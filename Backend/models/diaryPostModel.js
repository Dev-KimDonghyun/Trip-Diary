const mongoose = require("mongoose");

const diarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    ontent: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("DiaryPost", diarySchema);
