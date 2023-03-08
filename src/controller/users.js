const users = require("../../dataSeed");

const getAllData = (req, res) => {
  res.status(200).json({ meta: "success", data: users.usersData });
};

const getAdminData = (req, res) => {
  res.render("index");
};
module.exports = { getAllData, getAdminData };
