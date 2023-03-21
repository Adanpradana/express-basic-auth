const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/binar_games");
const database = mongoose.connection;
database.on("connection error", (error) => console.log(error));
const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "user" }
);

module.exports = User;
