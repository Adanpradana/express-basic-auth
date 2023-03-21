const mongoose = require("mongoose");
const User = require("../connection/database");

const userModel = mongoose.model("userData", User);
module.exports = userModel;
