const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: { type: String, require: true, uniqe: true },
    userPw: { type: String, require: true },
});

module.exports = mongoose.model("logInUser", userSchema);