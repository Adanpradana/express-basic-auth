const express = require("express");
const router = express.Router();
const users = require("./src/controller/users");
const auth = require("./src/middleware/users");
const data = require("./dataSeed");

router.get("/", auth.authUsers, users.getAllData);
router.get(
  "/admin",
  auth.authUsers,
  auth.getRole(data.role.admin),
  users.getAdminData
);

module.exports = router;
