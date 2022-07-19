const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    itemID: {

        type: Number,
        require: false

    },
    itemName: {

        type:    String,
        require: true

    },
    itemPrice: {

        type: Number,
        required: true

    },
    itemBreifDescription: {
        type: String,
        required: false
    },
    itemFullDescription: {

        type: String,
        required: true

    },
    itemQuanity: {
        type: Number,
        required: true
    }
    
    

}, {timestamps: true})

module.exports = mongoose.model('Item', userSchema)

