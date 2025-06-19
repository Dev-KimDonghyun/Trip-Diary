const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const signUpLogic = require("./routes/signUpLogic");
const logInLogic = require("./routes/logInLogic");

const app = express();
const port = 5050;

dotenv.config();

const MONGOURI = process.env.MONGO_URI;

app.use(express.json());

app.use("/api", signUpLogic);

app.use("/api", logInLogic);

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
