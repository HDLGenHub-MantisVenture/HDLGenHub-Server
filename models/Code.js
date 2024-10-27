const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CodeShema = new Schema({
  code: {
    type: String,
    require: true,
  },
  language: {
    type: String,
    require: true,
  },
});

const Code = mongoose.model("Code", CodeShema);
module.exports = Code;
