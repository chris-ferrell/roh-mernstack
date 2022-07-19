require('dotenv').config()

const express = require('express')
const userRoutes = require('./routes/users')
const itemRoutes = require('./routes/items')
const mongoose = require('mongoose')

// express app
const app = express()

// middle ware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})



app.get('/', (req, res) => {
    res.json({mssg: 'welcome to the app'})
})

//routes
app.use('/api/users',userRoutes)
app.use('/api/items', itemRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        app.listen(process.env.PORT, () => {
            console.log('Connected to DataBase Successfully & listening on port', process.env.PORT)
        })

    })
    .catch((error) => {
        console.log(error)
    })



//listen for requests

