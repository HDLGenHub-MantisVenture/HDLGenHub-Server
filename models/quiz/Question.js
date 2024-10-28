const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: [String || Number],
    require: true,
  },
  quiz: {
    type: Schema.Types.ObjectId,
    ref: "Quiz",
  },
});

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;
