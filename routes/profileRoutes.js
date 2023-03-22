const express = require("express");
const router = express.Router();
const path = require("path");
const fuelQuoteHistoryController = require("../controllers/profileController");

router.get("^/$|/profile(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "profile.html"));
});

router
  .route("/")
  // HTTP method                    // CRUD operation
  .get() // read
  .post() // create
  .patch() // update
  .delete(); // delete

module.exports = router;
