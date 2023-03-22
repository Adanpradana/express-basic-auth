const express = require("express");
const router = express.Router();
const users = require("./src/controller/users");
const render = require("./src/controller/renderPage");
const initPassport = require("./src/utils/passport-config");
const passport = require("passport");
const app = express();
const flash = require("express-flash");
app.use(flash());

router.get("/", render.dashboard);
router.get("/auth/login", render.login);
router.get("/auth/register", render.register);

router.post("/auth/login", users.login);
router.post("/auth/register", users.register);

module.exports = router;
