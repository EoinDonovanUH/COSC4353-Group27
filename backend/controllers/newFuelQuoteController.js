const ClientInformation = require("../models/ClientInformation");
const FuelQuote = require("../models/FuelQuote");
const asyncHandler = require("express-async-handler");

// The answer is in here
// https://mongoosejs.com/docs/populate.html#field-selection

// TODO list
// populate? delivery address from clientInformation schema
// implement pricing module for suggested price
// test in Postman

// @desc Create new fuel quote
// POST /new-fuel-quote
const createNewFuelQuote = asyncHandler(async (req, res) => {
  const {
    user_credentials,
    gallons_requested,
    delivery_date,
    address1,
    address2,
    city,
    _state,
    zipcode,
  } = req.body;

  // confirm data
  if (
    !user_credentials ||
    !gallons_requested ||
    !address1 ||
    !city ||
    !_state ||
    !zipcode ||
    !delivery_date
  ) {
    // HTTP status 400 = bad request
    return res.status(400).json({ message: "All fields are required" });
  }

  // const delivery_address_Object = {
  //   address1,
  //   address2,
  //   city,
  //   state,
  //   zipcode,
  // }
  
  // TODO implement price module
  let suggested_price = 2.89;

  let total_amount_due = gallons_requested * suggested_price;

  const fuelQuoteObject = {
    user_credentials,
    gallons_requested,
    delivery_date,
    address1,
    address2,
    city,
    _state,
    zipcode,
    suggested_price,
    total_amount_due,
  };

  // create and store new quote
  const quote = await FuelQuote.create(fuelQuoteObject);
  // quote.save()
  if (quote) {
    // HTTP status 201 = created
    res.status(201).json({ message: "New quote created", _sP: quote.suggested_price, _tA: quote.total_amount_due });
  } else {
    // HTTP status 400 = bad request
    res.status(400).json({ message: "Invalid quote data received" });
  }
});

const getHistory = asyncHandler(async(req, res) => {
  const { user_credentials } = req.body

});

module.exports = { createNewFuelQuote, getHistory };
