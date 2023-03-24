const mongoose = require("mongoose");

const fuelQuotes = [
  {
    gallons: "100",
    date: "2023-3-31",
  },
];

// const fuelQuoteSchema = mongoose.Schema({
//   gallonsRequested: {
//     type: Number,
//     required: true,
//   },
//   deliveryAddress: {
//     // non-editable, comes from client profile
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "ClientInformation",
//   },
//   deliveryDate: {
//     type: Date,
//     required: true,
//   },
//   suggestedPrice: {
//     // non-editable, calculated by pricing model
//     type: Number,
//     required: true,
//   },
//   totalAmountDue: {
//     // non-editable, gallonsRequested * suggestedPrice
//     type: Number,
//     required: true,
//   },
// });

module.exports = fuelQuotes;

// module.exports = mongoose.model("FuelQuote", fuelQuoteSchema);
