const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const { expressjwt: jwt } = require('express-jwt')
const connectDB = require('./db-atlas')


app.use(express.json())
app.use(morgan('dev'))

connectDB()

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

app.listen(9000, () => {
    console.log("Server is running on local port 9000")
})