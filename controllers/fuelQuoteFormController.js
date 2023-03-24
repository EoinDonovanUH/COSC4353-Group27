const UserCredentials = require("../models/UserCredentials");
const clients = require("../models/ClientInformation");
const path = require("path");

// @desc Get fuel quote form
// @route GET /quoteform
// @access Private - will implement this later
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

module.exports = { getFuelQuoteForm };

// module.exports = {
//   getAllUsers,
//   createNewUser,
//   updateUser,
//   deleteUser,
// };
