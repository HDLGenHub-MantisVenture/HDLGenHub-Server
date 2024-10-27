const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoShema = new Schema({
  name: {
    type: String,
    require: false,
  },
  description: {
    type: String,
    require: false,
  },
  url: {
    type: String,
    require: true,
  },
});

const Video = mongoose.model("Video", VideoShema);
module.exports = Video;
