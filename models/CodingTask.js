const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CodingTaskSchema = new Schema({
  name: {
    type: String,
    require: false,
  },
  problemStatement: {
    type: String,
    require: true,
  },
});

const CodingTask = mongoose.model("CodingTask", CodingTaskSchema);
module.exports = CodingTask;
