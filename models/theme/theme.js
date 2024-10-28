const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThemeSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const Theme = mongoose.model("Theme", ThemeSchema);
module.exports = Theme;
