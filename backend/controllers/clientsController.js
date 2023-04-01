const UserCredentials = require("../models/UserCredentials");
const ClientInformation = require("../models/ClientInformation");
const asyncHandler = require("express-async-handler");

// @desc Get all clients 
// @route GET /clients
// @access Private
const getAllClients = asyncHandler(async (req, res) => {
  const clients = await ClientInformation.find().lean()
  // if no clients
  if (!clients?.length) {
      return res.status(400).json({message: 'No clients found'})
  }

  // add username to each client before sending response
  const clientWithUser = await Promise.all(clients.map(async (client) => {
      const user = await UserCredentials.findById(client.user_credentials).lean().exec()
      return {...client, username: user.username }
  }))

  res.json(clientWithUser)
})

// @desc Create new client
// @route POST /clients
// @access Private
const createNewClient = asyncHandler(async (req, res) => {
    const { user_credentials, fullname, address1, address2, city, state, zipcode } = req.body

    // confirm data
    if (!user_credentials || !fullname || !address1 || !city || !state || !zipcode) {
        return res.status(400).json({message: 'All fields except address2 are required'})
    }

    // create and store new client
    // TODO address2 is optional
    const client = await ClientInformation.create({ user_credentials, fullname, address1, address2, city, state, zipcode })
    if (client) { // created
        return res.status(201).json({ message: 'New client created' })
    } else {
        return res.status(400).json({ message: 'Invalid client data received' })
    }
})

// @desc Update a client 
// @route PATCH /clients
// @access Private
const updateClient = asyncHandler(async (req, res) => {
  const { id, fullname, address1, address2, city, state, zipcode } = req.body

  // confirm data
  if (!id || !fullname || !address1 || !city || !state || !zipcode) {
      return res.status(400).json({message: 'All fields except address2 are required'})
  }

  // confirm client exists
  const client = await ClientInformation.findById(id).exec()
  if (!client) {
      return res.status(400).json({ message: 'Client not found' })
  }

  client.fullname = fullname
  client.address1 = address1
  // address2 is optional
  if (address2) {
      client.address2 = address2
  }
  client.city = city
  client.state = state
  client.zipcode = zipcode

  const updatedClient = await client.save()

  res.json(`'${updatedClient.fullname}' updated`)
})

// @desc Delete a client 
// @route DELETE /clients
// @access Private
const deleteClient = asyncHandler(async (req, res) => {
  const { id } = req.body

  // confirm data
  if (!id) {
      return res.status(400).json({ message: 'Client ID required' })
  }

  // confirm client exists to delete 
  const client = await ClientInformation.findById(id).exec()
  if (!client) {
      return res.status(400).json({ message: 'Client not found' })
  }

  const result = await client.deleteOne()

  const reply = `Client ${result.fullname} with ID ${result._id} deleted`

  res.json(reply)
})

module.exports = {
  getAllClients,
  createNewClient,
  updateClient,
  deleteClient,
};

/////////////////////////// ASSIGMENT 3 ///////////////////////////

// @desc Get all clients
// @route GET /clients
// const getAllClients = (req, res) => {
//   // const id = req.params.id;
//   const id = 1;
//   const client = ClientInformation.find((clientID) => (clientID = id));
//   //const client = ClientInformation.clients[0];
//   const address = client.address1;
//   // res.sendFile(path.join(__dirname, "..", "views", "quoteform.html"));
//   res.status(200).json({
//     id: id,
//     client: client,
//     address: address,
//   });
// };

// const createNewClient = (req, res) => {
//   ClientInformation.clients.push({
//     userCredentials: req.body.userCredentials,
//     fullName: req.body.fullname,
//     address1: req.body.address1,
//     city: req.body.city,
//     state: req.body.state,
//     zipCode: req.body.zipCode,
//   });

//   res.status(200).json({ message: "Client Created" });
// };

// const updateClient = (req, res) => {
//   const { id, fullname, address1, address2, city, state, zipcode } = req.body;

//   // confirm data
//   if (!id || !fullname || !address1 || !city || !state || !zipcode) {
//     return res
//       .status(400)
//       .json({ message: "All fields except address2 are required" });
//   }

//   // confirm client exists
//   const client = ClientInformation.clients.findById(1).exec();
//   if (!client || client.id != 1) {
//     return res.status(400).json({ message: "Client not found" });
//   }

//     client.fullname = fullname
//     client.address1 = address1
//     // address2 is optional
//     if (address2) {
//         client.address2 = address2
//     }
//     client.city = city
//     client.state = state
//     client.zipcode = zipcode

//     const updatedClient = client.save()

//     res.json(`'${updatedClient.fullname}' updated`)
// };

// const deleteClient = (req, res) => {
//   const { id } = req.body;

//   // confirm data
//   if (id != 3) {
//     return res.status(400).json({ message: "Client ID required" });
//   }

//   // confirm client exists to delete
//   const client = ClientInformation[0];
//   if (!client) {
//     return res.status(400).json({ message: "Client not found" });
//   }
//   client.fullname = "NULL";
//   client.address1 = "NULL";
//   client.city = "NULL";
//   client.state = "NULL";
//   client.zipCode = "NULL";

//   res.json({ message: "Deleted Client" });
// };