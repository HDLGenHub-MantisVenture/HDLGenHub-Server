const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/HDLGenHubLocalDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserRouter = require("./routes/User");
app.use("/user", UserRouter);

app.listen(4000, () => {
  console.log("Server is running");
});
