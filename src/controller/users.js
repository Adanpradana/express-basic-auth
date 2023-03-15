const users = require("../../dataSeed");

const getAllData = (req, res) => {
  res.status(200).json({ meta: "success", data: users.usersData });
};

const getAdminData = (req, res) => {
  res.render("index");
};

const login = (req, res) => {
  const { name, password } = req.body;
  const findCredential = users.usersData.find((user) => {
    return user.name === name && user.password === password;
  });
  findCredential ? res.redirect("/") : res.redirect("/auth/login");
};
module.exports = { getAllData, getAdminData, login };
