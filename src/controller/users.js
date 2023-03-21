const User = require("../model/users.model");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 12);
  try {
    const registerUser = new User({
      name,
      email,
      password: hashPassword,
    });
    const isTrue = await registerUser.save();
    if (isTrue) {
      return res.redirect("/auth/login");
    } else {
      return res.redirect("/auth/register");
    }
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (req, res) => {
  const { name, password } = req.body;
  try {
    const findUsers = await User.findOne({
      name,
    });
    if (findUsers) {
      res.redirect("/");
    } else {
      res.send("unauthorized");
    }
    const compare = await bcrypt.compare(password, findUsers.password);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { register, login };
