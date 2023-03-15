function dashboard(req, res) {
  res.render("pages/index");
}
function login(req, res) {
  res.render("pages/loginPage");
}
function register(req, res) {
  res.render("pages/registerPage");
}

module.exports = { dashboard, login, register };
