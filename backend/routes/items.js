const express = require('express')
const Item = require('../models/ItemModel')
const {
    getItems,
    getItem,
    createItem,
    deleteItem
} = require('../controllers/userController')

const router = express.Router()
//GET ALL items
router.get('/', getItems)
//GET ONE item
router.get('/', getItem)
//POST a item to shop
router.post('/', createItem)

// DELETE a item
router.delete('/:id', deleteItem)

//GET all users
//router.get('/', getUsers)

//GET a single user
//router.get('/:id', getUser)

//POST a new user
//router.post('/', createUser)

// DELETE a user
//router.delete('/:id', deleteUser)

// UPDATE a user
//router.patch('/:id', updateUser)

module.exports = router