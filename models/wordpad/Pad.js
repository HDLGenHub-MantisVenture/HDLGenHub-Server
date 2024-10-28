const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PadSchema = new Schema({
  x_position: {
    type: Number,
    require: true,
  },
  y_position: {
    type: Number,
    require: true,
  },
  component: {
    type: Schema.Types.ObjectId,
    ref: "Assignment" || "CodingTask" || "Document" || "Quiz" || "Video",
  },
  wordpad: {
    type: Schema.Types.ObjectId,
    ref: "Wordpad",
  },
});

const Pad = mongoose.model("Pad", PadSchema);
module.exports = Pad;
