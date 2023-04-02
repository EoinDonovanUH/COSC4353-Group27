const mongoose = require("mongoose");
  
const userCredentialsSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('UserCredentials', userCredentialsSchema)

/////////////////////////// ASSIGMENT 3 ///////////////////////////

//   const users = [
//     {
//       username: "John",
//       password: "johnpass",
//     },
//     {
//       username: "Clyde",
//       password: "clydepass",
//     },
//   ];

//   module.exports = users;