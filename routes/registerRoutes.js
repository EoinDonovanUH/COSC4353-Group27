const express = require("express");
const router = express.Router();
const path = require("path");
const fuelQuoteHistoryController = require("../controllers/registerController");

router.get("^/$|/register(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "register.html"));
});

router
  .route("/")
  // HTTP method                    // CRUD operation
  .get() // read
  .post() // create
  .patch() // update
  .delete(); // delete

module.exports = router;
