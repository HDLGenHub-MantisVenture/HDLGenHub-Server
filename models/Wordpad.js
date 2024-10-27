const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordpadShema = new Schema({});

const Wordpad = mongoose.model("Wordpad", WordpadShema);
module.exports = Wordpad;
