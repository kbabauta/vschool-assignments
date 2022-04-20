const express = require('express')
const app = express()
require("dotenv").config()
const morgan = require('morgan')
const connectDB = require('./db-atlas')
const mongoose = require('mongoose')
const PORT = 9000
const authRouter = require('./backend/routes/authRouter.js')
const commentRouter = require('./backend/routes/commentRouter')
const issueRouter = require('./backend/routes/issueRouter.js')
const expressJwt = require("express-jwt")

app.use(express.json())
app.use(morgan('dev'))

connectDB()

app.use("/auth", authRouter)
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use("/api/issues/comments", commentRouter)
app.use("/api/issues", issueRouter)

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`Server is running on local port ${PORT}!`)
})