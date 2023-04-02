const express = require("express");
const router = express.Router();
const path = require("path");
const loginController = require("../controllers/loginController");

// router.get("^/$|/login(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "views", "login.html"));
// });

router
  .route("/")
  // HTTP method                    // CRUD operation
  .get(loginController.getLogin) // read
  .post(loginController.fillLogin) // create
  .patch() // update
  .delete(); // delete

module.exports = router;
