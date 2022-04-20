const express = require ('express')
const morgan = require ('morgan')
const mongoose = require ('mongoose')
const connectdb = require ('./db-atlas/database.js')
const dotenv = require('dotenv')

const router = require('./routes/inventory.js')

dotenv.config()
const PORT = process.env.PORT || 9000
const mode = process.env.NODE_ENV
const app = express()

//Middleware
app.use(express.json())
app.use(morgan("dev"))

//Connect to DB
connectdb()


// Route
app.use("/inventory", router)



//Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})



app.listen(9000, () => {
    console.log('The server is running on Port 9000')
})