const quotes = require("../models/FuelQuote");

// @desc Get fuel quote history
// @route GET /quotehistory
const getFuelQuoteHistory = (req, res) => {
  const id = req.params.id;
  const clientQuotes = quotes.filter((e) => e.clientID == id);
  if (!clientQuotes.length) {
    return res.status(200).json({ message: "No quotes found" });
  }
  res.status(200).json({ data: clientQuotes });
};

module.exports = { getFuelQuoteHistory };
