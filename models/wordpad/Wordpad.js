const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordpadShema = new Schema({
  title: {
    type: String,
    require: true,
  },
});

const Wordpad = mongoose.model("Wordpad", WordpadShema);
module.exports = Wordpad;
