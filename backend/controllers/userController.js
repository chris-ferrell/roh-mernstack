const User =  require('../models/userModel')
const Item = require('../models/itemModel')
const mongoose = require('mongoose')

//GET all shop items.
const getItems =  async (req, res) => {
    const items = await Item.find({}).sort({createdAt: -1})
    res.status(200).json(items)

}
//GET One Shop item .
const getItem = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Item'})
    }

    const item = await Item.findById(id)

    if (!item) {
        return res.status(404).json({error: 'No such item'})
    }

    res.status(200).json(item)
}


//GET all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})
    res.status(200).json(users)
}   
//GET a single user
const getUser = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such User'})
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(user)
}
// create new Item in shop
const createItem = async (req, res) => {

    const {itemID, itemName, itemPrice, itemBreifDescription, itemFullDescription, itemQuanity} = req.body

    try{
        const item = await Item.create({itemID, itemName, itemPrice, itemBreifDescription, itemFullDescription, itemQuanity})
        res.status(200).json(item)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

//delete item from shop
const deleteItem = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Item'})
    }

    const item = await Item.findOneAndDelete({_id: id})

    if (!item) {
        return res.status(400).json({error: 'No such Item'})
    }

    res.status(200).json(item)
}
//create new user account /////
const createUser = async (req, res) => {

    const {userID, userName, balance} = req.body
    //add doc to db 
    try {
        const user = await User.create({userID, userName, balance})
        res.status(200).json(user)
    } catch(error) {
        res.status(400).json({error: error.message})
    }

}

// delete a user account 
const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such User'})
    }

    const user = await User.findOneAndDelete({_id: id})

    if (!user) {
        return res.status(400).json({error: 'No such User'})
    }

    res.status(200).json(user)
}


// update user account
const updateUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such User'})
    } 
    
    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!user) {
        return res.status(400).json({error: 'No such User'})
    }

    res.status(200).json(user)
}



module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    getItems,
    getItem,
    createItem,
    deleteItem
}