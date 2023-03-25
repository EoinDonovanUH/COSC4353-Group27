// const UserCredentials = require('../models/UserCredentials')
// const ClientInformation = require('../models/ClientInformation')
// const asyncHandler = require('express-async-handler')
// const bcrypt = require('bcrypt')

// // @desc Get all users
// // @route GET /users
// // @access Private - will implement this later
// const getAllUsers = asyncHandler(async (req, res) => {
//     const users = await UserCredentials.find().select('-password').lean()
//     // use optional chaining to check if user exists before checking length
//     if(!users?.length) {
//         return res.status(400).json({message: 'No users found'})
//     }
//     res.json(users)
// })

// // @desc Create new user
// // @route POST /users
// // @access Private - will implement this later
// const createNewUser = asyncHandler(async (req, res) => {
//     const { username, password } = req.body

//     // confirm data
//     if(!username || !password) {
//         // HTTP status 400 = bad request
//         return res.status(400).json({message: 'All fields are required'})
//     }

//     // check duplicates
//     const duplicate = await UserCredentials.findOne({ username }).lean().exec()
//     if(duplicate) {
//         // HTTP status 409 = conflict
//         return res.status(409).json({message: 'Duplicate username'})
//     }

//     // hash password
//     const hashedPwd = await bcrypt.hash(password, 10) // salt rounds
//     const userObject = { username, "password": hashedPwd }

//     // create and store new user
//     const user = await UserCredentials.create(userObject)
//     if(user) { // created
//         // HTTP status 201 = created
//         res.status(201).json({message: `New user ${username} created`})
//     } else {
//         res.status(400).json({message: 'Invalid user data received'})
//     }
// })

// // @desc Update a user
// // @route PATCH /users
// // @access Private - will implement this later
// const updateUser = asyncHandler(async (req, res) => {
//     const { id, username, password } = req.body

//     // confirm data
//     if (!id || !username) {
//         return res.status(400).json({message: 'All fields except password are required'})
//     }

//     const user = await UserCredentials.findById(id).exec()
//     if (!user) {
//         return res.status(400).json({message: 'User not found'})
//     }

//     // check duplicate
//     const duplicate = await UserCredentials.findOne({ username }).lean().exec()
//     // allow updates to the original user
//     if (duplicate && duplicate?._id.toString() !== id) {
//         return res.status(409).json({message: 'Duplicate username'})
//     }

//     user.username = username
//     if (password) {
//         // hash password
//         user.password = await bcrypt.hash(password, 10) // salt rounds
//     }

//     const updatedUser = await user.save()

//     res.json({message: `${updatedUser.username} updated`})
// })

// // @desc Delete a user
// // @route DELETE /users
// // @access Private - will implement this later
// const deleteUser = asyncHandler(async (req, res) => {
//     const { id } = req.body

//     if(!id) {
//         return res.status(400).json({message: 'User ID required'})
//     }

//     // TODO delete any associated client information

//     const user = await UserCredentials.findById(id).exec()
//     if (!user) {
//         return res.status(400).json({ message: 'User not found'})
//     }

//     const result = await user.deleteOne()

//     const reply = `Username ${result.username} with ID ${result._id} deleted`

//     res.json(reply)
// })

// module.exports = {
//     getAllUsers,
//     createNewUser,
//     updateUser,
//     deleteUser
// }
