// const mongoose = require("mongoose");

const users = [
  {
    username: "John",
    password: "johnpass",
  },
  {
    username: "Clyde",
    password: "clydepass",
  },
];

// const userCredentialsSchema = mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     }
// })

module.exports = users;

// module.exports = mongoose.model('UserCredentials', userCredentialsSchema)
