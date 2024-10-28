const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  permissions: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "Permission",
  },
});

const Role = mongoose.model("Role", RoleSchema);
module.exports = Role;
