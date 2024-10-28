const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PriceSchema = new Schema({
  value: {
    type: Number,
    require: true,
  },
  currency: {
    type: String,
    require: true,
  },
});

const Price = mongoose.model("Price", PriceSchema);
module.exports = Price;
