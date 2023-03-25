const express = require("express");
const router = express.Router();
// const path = require("path");
const fuelQuoteHistoryController = require("../controllers/fuelQuoteHistoryController");

// router.get("^/$|/quotehistory(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "views", "quotehistory.html"));
// });

router
  .route("/:id")
  // HTTP method                    // CRUD operation
  .get(fuelQuoteHistoryController.getFuelQuoteHistory) // read
  .post() // create
  .patch() // update
  .delete(); // delete

module.exports = router;
