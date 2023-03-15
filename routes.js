const express = require("express");
const router = express.Router();
const users = require("./src/controller/users");
const auth = require("./src/middleware/users");
const data = require("./dataSeed");
const render = require("./src/controller/renderPage");
//render page
router.get("/", render.dashboard);
router.get("/auth/login", render.login);
router.get("/auth/register", render.register);
//api post
router.post("/api/login", users.login);
module.exports = router;
