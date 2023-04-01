const mongoose = require("mongoose");

// https://mongoosejs.com/docs/validation.html

const clientInformationSchema = mongoose.Schema({
    // client info is assigned to specific users
    user_credentials: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'UserCredentials'
    },
    fullname: {
        type: String,
        required: true,
        // only alphabet chars allowed
        match: "[A-Za-z]",
        maxLength: [50, 'Enter up to 50 characters, got {VALUE}']
    },
    address1: {
        type: String,
        required: true,
        // only alphabet chars, 0-1 & spaces allowed
        maxLength: [100, 'Enter up to 100 characters, got {VALUE}']
    },
    address2: {
        type: String,
        // optional
        required: false,
        maxLength: [100, 'Enter up to 100 characters, got {VALUE}']
    },
    city: {
        type: String,
        required: true,
        // only alphabet chars allowed
        match: "[A-Za-z]",
        maxLength: [100, 'Enter up to 100 characters, got {VALUE}']
    },
    state: {
        type: String,
        required: true,
        // store 2 character state code
        match: "[A-Z]",
        maxLength: 2,
        minLength: 2
    },
    zipcode: {
        type: String,
        required: true,
        // DDDDD-DDDD how to enforce this format?
        match: "[0-9]",
        maxLength: [9, 'Enter up to 9 digits, got {VALUE}'],
        minLength: [5, 'Enter at least 5 digits, got {VALUE}']
    },
})

module.exports = mongoose.model("ClientInformation", clientInformationSchema);

////////////////////////// ASSIGMENT 3 ///////////////////////////

// const clients = [
// {
//     userCredentials: 1,
//     fullName: "John Smith",
//     address1: "200 Main St",
//     city: "Houston",
//     state: "TX",
//     zipCode: "12345",
// },
// {
//     userCredentials: 2,
//     fullName: "Clyde Jackson",
//     address1: "1500 Riverdale Rd",
//     city: "Houston",
//     state: "TX",
//     zipCode: "23456",
// },
// ];

// module.exports = clients;