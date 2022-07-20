const express = require('express')
const User = require('../models/userModel')
const Item = require('../models/itemModel')
const {
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getItems,
    createItem
} = require('../controllers/userController')

const router = express.Router()
//GET all items
//router.get('/items', getItems)

//POST a item to shop
//router.post('/', createItem)

//GET all users
router.get('/', getUsers)

//GET a single user
router.get('/:id', getUser)

//POST a new user
router.post('/', createUser)

// DELETE a user
router.delete('/:id', deleteUser)

// UPDATE a user
router.patch('/:id', updateUser)

module.exports = router