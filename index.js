const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:4000/",
  })
);
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserRouter = require("./routes/User");
app.use("/user", UserRouter);

PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("HDLGenHub server is running on the PORT:", PORT);
});
