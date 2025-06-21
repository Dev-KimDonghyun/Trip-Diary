const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nickName: { type: String, require: true, uniqe: true },
    userId: { type: String, require: true, uniqe: true },
    createdAt: { type: Date, default: Date.now }, 
});

module.exports = mongoose.model("User", userSchema);