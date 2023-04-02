const users = require("../models/UserCredentials");

// @desc Get registration form
// @route GET /register
const getRegistration = (req, res) => {
  res.status(200).json({
    data: users,
  });
};

// @desc Post app registration
// @route POST /login
const fillRegistration = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (users.some((e) => e.username == username)) {
    return res.status(400).json({ message: "Username already in use" });
  }
  users.push({
    username: username,
    password: password,
  });
  res.status(200).json({
    data: users,
  });
};

module.exports = { getRegistration, fillRegistration };
