const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModuleShema = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const Module = mongoose.model("Module", ModuleShema);
module.exports = Module;
