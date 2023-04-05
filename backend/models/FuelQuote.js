const mongoose = require("mongoose");

// const deliveryAddressSchema = mongoose.Schema({
//   address1: {
//     type: String,
//     required: true,
//     maxLength: [100, "Enter up to 100 characters, got {VALUE}"],
//   },
//   address2: {
//     type: String,
//     required: false,
//     maxLength: [100, "Enter up to 100 characters, got {VALUE}"],
//   },
//   city: {
//     type: String,
//     required: true,
//     maxLength: [100, "Enter up to 100 characters, got {VALUE}"],
//   },
//   state: {
//     type: String,
//     required: true,
//     maxLength: 2,
//     minLength: 2,
//   },
//   zipcode: {
//     type: String,
//     required: true,
//     maxLength: [9, "Enter up to 9 digits, got {VALUE}"],
//     minLength: [5, "Enter at least 5 digits, got {VALUE}"],
//   },
// });

const fuelQutoeSchema = mongoose.Schema({
  user_credentials: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "UserCredentials",
  },
  gallons_requested: {
    type: Number,
    required: true,
  },
  delivery_date: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
    maxLength: [100, "Enter up to 100 characters, got {VALUE}"],
  },
  address2: {
    type: String,
    required: false,
    maxLength: [100, "Enter up to 100 characters, got {VALUE}"],
  },
  city: {
    type: String,
    required: true,
    maxLength: [100, "Enter up to 100 characters, got {VALUE}"],
  },
  _state: {
    type: String,
    required: true,
    maxLength: 2,
    minLength: 2,
  },
  zipcode: {
    type: String,
    required: true,
    maxLength: [9, "Enter up to 9 digits, got {VALUE}"],
    minLength: [5, "Enter at least 5 digits, got {VALUE}"],
  },
  suggested_price: {
    // TODO calculated by pricing module
    type: Number,
    required: true,
  },
  total_amount_due: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("FuelQuote", fuelQutoeSchema)
// module.exports = [
//   mongoose.model("FuelQuote", fuelQutoeSchema),
//   mongoose.model("DeliveryAddress", deliveryAddressSchema)
// ];
