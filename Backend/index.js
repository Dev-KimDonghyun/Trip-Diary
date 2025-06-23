const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const createIdLogic = require("./routes/createIdLogic");
const logInLogic = require("./routes/logInLogic");
const makeDiaryLogic = require("./routes/makeDiaryLogic");
const userInfoLogic = require("./routes/userInfoLogic");
const showAllDiaryLogic = require("./routes/showAllDiaryLogic");
const showDiaryLogic = require("./routes/showDiaryLogic");
const reviseDiaryLogic = require("./routes/reviseDiaryLogic");
const deleteDiaryLogic = require("./routes/deleteDiaryLogic");

const app = express();
const port = 5050;

const MONGOURI = process.env.MONGO_URI;

dotenv.config();

app.use(express.json());

app.use("/api", createIdLogic);
app.use("/api", logInLogic);
app.use("/api", makeDiaryLogic);
app.use("/api", userInfoLogic);
app.use("/api", showAllDiaryLogic);
app.use("/api", showDiaryLogic);
app.use("/api", reviseDiaryLogic);
app.use("/api", deleteDiaryLogic);

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
