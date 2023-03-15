const express = require("express");
const app = express();
const port = 5050;
const userRoute = require("./routes");
const path = require("path");
app.use(express.json());
app.use(userRoute);
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./src/views");
// app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/src", express.static(path.join(__dirname, "public")));
app.listen(port, () => {
  console.log("running on http://localhost:5050");
});
