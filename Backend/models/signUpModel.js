const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nickName: { type: String, require: true, uniqe: true },
    userId: { type: String, require: true, uniqe: true },
    userPw: { type: String, require: true },
});

module.exports = mongoose.model("User", userSchema);