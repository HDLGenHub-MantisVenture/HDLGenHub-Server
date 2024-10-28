const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubcriptionSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  timespan: {
    type: String,
    require: true,
  },
});

const Subcription = mongoose.model("Subcription", SubcriptionSchema);
module.exports = Subcription;
