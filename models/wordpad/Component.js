const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComponentSchema = new Schema({
  //Neec to implement
});

const Component = mongoose.model("Component", ComponentSchema);
module.exports = Component;
