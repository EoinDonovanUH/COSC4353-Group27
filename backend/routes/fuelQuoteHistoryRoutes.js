const express = require("express")
const router = express.Router()
const fuelQuoteHistoryController = require("../controllers/fuelQuoteHistoryController")

router
  .route("/")
  // HTTP method                                        // CRUD operation
  // May need to use POST bc of React.js body rules
  .post(fuelQuoteHistoryController.getFuelQuoteHistory) // read

module.exports = router
