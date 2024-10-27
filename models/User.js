const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  role: {
    type: Schema.Types.ObjectId,
    require: false,
    ref: "Role",
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
