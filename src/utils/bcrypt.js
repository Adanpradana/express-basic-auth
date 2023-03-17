const bcrypt = require("bcrypt");

async function hashedPassword(password) {
  const usePassword = await bcrypt.hash(password, 12);
  return usePassword;
}

module.exports = { hashedPassword };
