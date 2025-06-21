const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const createIdLogic = require("./routes/createIdLogic");
const logInLogic = require("./routes/logInLogic");
const makeDiaryLogic = require("./routes/makeDiaryLogic");

const app = express();
const port = 5050;

dotenv.config();

const MONGOURI = process.env.MONGO_URI;

app.use(express.json());

app.use("/api", createIdLogic);
app.use("/api", logInLogic);
app.use("/api", makeDiaryLogic);

const CheckMongoConnect = async () => {
  try {
    await mongoose.connect(MONGOURI);
    console.log("Connected MongoDB Atlas");
  } catch (err) {
    console.log(`Failed to Connect MongoDB Atlas. Error Message is ${err}`);
  }
};

CheckMongoConnect();

app.listen(port, () => {
  console.log("Server is Running");
});
