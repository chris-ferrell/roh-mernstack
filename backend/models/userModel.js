const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    userID: {

        type: Number,
        require: true

    },
    userName: {

        type:    String,
        require: true

    },
    balance: {

        type: Number,
        required: true

    }

}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)

