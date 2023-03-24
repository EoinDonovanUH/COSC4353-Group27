const mongoose = require("mongoose");

const fuelQuoteSchema = mongoose.Schema({
  gallonsRequested: {
    type: Number,
    required: true,
  },
  deliveryAddress: {
    // non-editable, comes from client profile
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "ClientInformation",
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  suggestedPrice: {
    // non-editable, calculated by pricing model
    type: Number,
    required: true,
  },
  totalAmountDue: {
    // non-editable, gallonsRequested * suggestedPrice
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("FuelQuote", fuelQuoteSchema);
