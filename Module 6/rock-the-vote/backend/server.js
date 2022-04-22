const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const { expressjwt: jwt } = require("express-jwt")
const connectDB = require('./db-atlas')

const authRouter = require('../backend/routes/authRouter.js')
const commentRouter = require('../backend/routes/commentRouter.js')
const issueRouter = require('../backend/routes/issueRouter.js')


app.use(express.json())
app.use(morgan('dev'))

connectDB()

app.use("/auth", authRouter)
app.use('/api', jwt({ secret: process.env.SECRET, algorithms: ['HS256'] })) // req.user
app.use("/api/issues", issueRouter)
app.use("/api/issues/comments", commentRouter)



app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log(`Server is running on local port 9000!`)
})