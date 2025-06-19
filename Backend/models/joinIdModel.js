const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: { type: String, require: true, uniqe: true },
});

module.exports = mongoose.model("joinUser", userSchema);