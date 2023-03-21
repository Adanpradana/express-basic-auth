const express = require("express");
const router = express.Router();
const users = require("./src/controller/users");
const auth = require("./src/middleware/users");
const data = require("./dataSeed");
const render = require("./src/controller/renderPage");
const initPassport = require("./src/utils/passport-config");
const passport = require("passport");
const app = express();
const flash = require("express-flash");
app.use(flash());
initPassport(passport, (user) =>
  data.usersData.find((userFind) => userFind.name === user)
);
//render page
router.get("/", render.dashboard);
router.get("/auth/register", render.register);
router.get("/auth/login", render.login);
//api post
router.post(
  "/auth/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: "true",
  })
);
module.exports = router;
