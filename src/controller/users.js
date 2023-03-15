const users = require("../../dataSeed");

const getAllData = (req, res) => {
  res.status(200).json({ meta: "success", data: users.usersData });
};

const getAdminData = (req, res) => {
  res.render("index");
};

const login = (jwt) => {
  return (req, res) => {
    const { name, password } = req.body;
    const user = users.usersData.find(
      (user) => user.name === name && user.password === password
    );

    const tokenSign = jwt.sign(user, process.env.TOKEN);
    res.json({ tokenSign });
  };
};
module.exports = { getAllData, getAdminData, login };
