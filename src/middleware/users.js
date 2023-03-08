const data = require("../../dataSeed");
const authUsers = async (req, res, next) => {
  const { name, password } = req.body;
  try {
    const auth = await data.usersData.find(
      (user) => user.name === name && user.password === password
    );

    if (!auth.name && !auth.password) {
      return res.send("login first !");
    }
    next();
  } catch (error) {
    res.send(error.messsage);
  }
};

const getRole = (role) => {
  return async (req, res, next) => {
    const { name, password } = req.body;
    try {
      const result = await data.usersData.find(
        (user) => user.name === name && user.password === password
      );
      if (result.role === role) {
        next();
      }
      return res.send("only admin can view this page !");
    } catch (error) {
      res.send(error.messsage);
    }
  };
};

module.exports = { authUsers, getRole };
