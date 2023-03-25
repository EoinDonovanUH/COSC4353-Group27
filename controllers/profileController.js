const clients = require("../models/ClientInformation");
const MAX_ID = 1000;

const getProfile = (req, res) => {
  const id = req.params.id;
  const client = clients.find((e) => e.userCredentials == id);
  res.status(200).json({ data: client });
};

const fillProfile = (req, res) => {
  const userCredentials = req.params.id
    ? Number(req.params.id)
    : Math.floor(Math.random() * MAX_ID);
  const { fullName, address1, address2, city, state, zipCode } = req.body;
  if (
    !userCredentials ||
    !fullName ||
    !address1 ||
    !city ||
    !state ||
    !zipCode
  ) {
    return res.status(400).json({
      message: "All fields except for address2 are required",
    });
  }
  if (
    fullName.length > 50 ||
    address1.length > 100 ||
    address2?.length > 100 ||
    city.length > 100 ||
    zipCode.length < 5 ||
    zipCode.length > 9
  ) {
    return res.status(400).json({ message: "Invalid input" });
  }
  clients.push({
    userCredentials,
    fullName,
    address1,
    address2,
    city,
    state,
    zipCode,
  });
  console.log(clients);
  const newClient = clients.find((e) => e.userCredentials == userCredentials);
  res.status(200).json({ data: newClient });
};

const changeProfile = (req, res) => {
  const userCredentials = Number(req.params.id);
  const client = clients.find((e) => e.userCredentials == userCredentials);
  if (!client) {
    return res.status(400).json({ message: "Client not found" });
  }
  const { fullName, address1, address2, city, state, zipCode } = req.body;
  if (
    !userCredentials ||
    !fullName ||
    !address1 ||
    !city ||
    !state ||
    !zipCode
  ) {
    return res
      .status(400)
      .json({ message: "All fields except for address2 are required" });
  }
  if (
    fullName.length > 50 ||
    address1.length > 100 ||
    address2?.length > 100 ||
    city.length > 100 ||
    zipCode.length < 5 ||
    zipCode.length > 9
  ) {
    return res.status(400).json({ message: "Invalid input" });
  }
  client.fullName = fullName;
  client.address1 = address1;
  client.address2 = address2;
  client.city = city;
  client.state = state;
  client.zipCode = zipCode;
  res.status(200).json({ data: client });
};

const deleteProfile = (req, res) => {
  const userCredentials = Number(req.params.id);
  const client = clients.find((e) => e.userCredentials == userCredentials);
  console.log(client);
  if (!client) {
    return res.status(400).json({ message: "Client not found" });
  }
  const index = clients.indexOf(client);
  clients.splice(index, 1);
  res.status(200).json({ message: "Profile deleted", data: clients });
};

module.exports = { getProfile, fillProfile, changeProfile, deleteProfile };
