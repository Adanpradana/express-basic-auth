const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initPassport(passport, getUserbyName) {
  async function authUsers(name, password, done) {
    const user = getUserbyName(name);
    if (!user) {
      return done(null, false, { message: "no user found !" });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "password doesn't match !" });
      }
    } catch (error) {
      return done(error.message);
    }
  }
  passport.use(new localStrategy({ usernameField: "name" }, authUsers));

  passport.serializeUser((user, done) => {});
  passport.deserializeUser((id, done) => {});
}
module.exports = initPassport;
