const express = require("express");
const app = express();
const port = 5050;
const userRoute = require("./routes");

require("dotenv").config();
app.use(express.json());
app.use(userRoute);
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.listen(port, () => {
  console.log("running on http://localhost:5050");
});
