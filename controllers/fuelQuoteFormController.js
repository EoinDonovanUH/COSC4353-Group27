const UserCredentials = require("../models/UserCredentials");
const clients = require("../models/ClientInformation");
const quotes = require("../models/FuelQuote");
const path = require("path");

// @desc Get fuel quote form
// @route GET /quoteform
const getFuelQuoteForm = (req, res) => {
  const id = req.params.id;
  const client = clients.find((clientID) => (cliendID = id));
  const address = client.address1;
  // res.sendFile(path.join(__dirname, "..", "views", "quoteform.html"));
  res.status(201).json({
    id: id,
    client: client,
    address: address,
  });
};

// @desc Post fuel quote form entry
// @route POST /quoteform
const fillFuelQuoteForm = (req, res) => {
  quotes.push({
    gallons: req.body.gallons,
    date: req.body.date,
  });
  const gallons = Number(req.body.gallons);
  const date = Date.parse(req.body.date);
  if (gallons < 2500 || gallons > 11000) {
    return res
      .status(400)
      .json({ message: "Gallons requested must be between 2,500 and 11,000" });
  }
  if (date < Date.parse("2023-2-22") || date > Date.parse("2023-12-31")) {
    return res.status(400).json({
      message: "Delivery date must be between 2023-2-22 and 2023-12-31",
    });
  }
  res.status(200).json({
    data: quotes,
  });
};

module.exports = { getFuelQuoteForm, fillFuelQuoteForm };
