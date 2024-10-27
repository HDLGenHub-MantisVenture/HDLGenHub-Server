const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: false,
  },
});

const Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = Quiz;
