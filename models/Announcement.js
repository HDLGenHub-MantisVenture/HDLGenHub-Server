const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnnouncementSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const Announcement = mongoose.model("Announcement", AnnouncementSchema);
module.exports = Announcement;
