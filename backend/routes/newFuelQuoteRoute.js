const express = require("express");
const router = express.Router();
const newFuelQuoteController = require("../controllers/newFuelQuoteController");

router
  .route("/")
  // HTTP method                                    // CRUD operation
  .post(newFuelQuoteController.createNewFuelQuote) // create
  .get(newFuelQuoteController.getHistory);
  
module.exports = router;
