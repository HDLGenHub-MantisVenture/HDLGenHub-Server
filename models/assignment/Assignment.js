const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  wordpad: {
    type: Schema.Types.ObjectId,
    require: false,
  },
});

const Assignment = mongoose.model("Assignment", AssignmentSchema);
module.exports = Assignment;
