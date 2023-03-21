const users = require("../../dataSeed");
const getBcrypt = require("../utils/bcrypt");
const getAllData = (req, res) => {
  res.status(200).json({ meta: "success", data: users.usersData });
};

const getAdminData = (req, res) => {
  res.render("index");
};

const login = async (req, res) => {
  const { name, password } = req.body;
  try {
    return await users.usersData.find((user) => {
      if (user.name === name && user.password === password) {
        return res.redirect("/");
      }
      res.send("no data!");
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { getAllData, getAdminData, login };
