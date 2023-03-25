const users = require("../models/UserCredentials");

// @desc Get login form
// @route GET /login
const getLogin = (req, res) => {
  res.status(200).json({
    data: users,
  });
};

// @desc Post app login
// @route POST /login
const fillLogin = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (
    !users.some((e) => e.username == username) ||
    !users.some((e) => e.password == password)
  ) {
    return res.status(400).json({ message: "User does not exist" });
  }
  const current = users.filter((e) => e.username == username);
  res.status(200).json({
    data: current,
  });
};

module.exports = { getLogin, fillLogin };
