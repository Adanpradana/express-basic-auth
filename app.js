const session = require("express-session");
const usersData = require("./dataSeed");
const flash = require("express-flash");
const userRoute = require("./routes");
const passport = require("passport");
const express = require("express");
const dotEnv = require("dotenv");
const path = require("path");
const app = express();
const port = 5050;
dotEnv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);
app.use(passport.initialize());
app.use(userRoute);
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
  console.log("running on http://localhost:5050");
});
