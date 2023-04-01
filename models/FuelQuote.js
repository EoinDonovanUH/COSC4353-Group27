const mongoose = require("mongoose");

const fuelQutoeSchema = mongoose.Schema({
  gallonsRequested: {
      type: Number,
      required: true,
  },
  deliveryAddress: {
      // TODO non-editable, comes from client profile
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'ClientInformation'
  },
  deliveryDate: {
      type: Date,
      required: true,
  },
  suggestedPrice: {
      // non-editable, calculated by pricing module
      type: Number,
      required: true,
  },
  totalAmountDue: {
      // non-editable, gallonsRequested * suggestedPrice
      type: Number,
      required: true,
  },
})

module.exports = mongoose.model('FuelQuote', fuelQutoeSchema)

/////////////////////////// ASSIGMENT 3 ///////////////////////////

// const fuelQuotes = [
//   {
//     clientID: 1,
//     gallons: 10000,
//     date: "2023-3-31",
//   },
// ];

// module.exports = fuelQuotes;
