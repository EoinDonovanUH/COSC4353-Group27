const express = require("express");
const router = express.Router();
const path = require("path");
const fuelQuoteFormController = require("../controllers/fuelQuoteFormController");

// router.get("^/$|/quoteform(.html)?/:id", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "views", "quoteform.html"));
// });

router
  .route("/:id")
  // HTTP method                    // CRUD operation
  .get(fuelQuoteFormController.getFuelQuoteForm) // read
  .post() // create
  .patch() // update
  .delete(); // delete

module.exports = router;
