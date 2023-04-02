const express = require("express");
const router = express.Router();
const path = require("path");
const registerController = require("../controllers/registerController");

// router.get("^/$|/register(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "views", "register.html"));
// });

router
  .route("/")
  // HTTP method                    // CRUD operation
  .get(registerController.getRegistration) // read
  .post(registerController.fillRegistration) // create
  .patch() // update
  .delete(); // delete

module.exports = router;
