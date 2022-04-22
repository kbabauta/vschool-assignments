const express = require('express')
const authRouter = express.Router()
const User = require('../models/User.js')
const jwt = require('jsonwebtoken')

// Sign Up
authRouter.post("/signup", async(req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err) {
            res.status(500)
            return next (err)
        }
        if(user){
            res.status(403)
            return next(new Error("That username already exists"))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err) {
                res.status(500)
                return next (err)
            }
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            res.status(200).send({ token, user: savedUser.withoutPassword()})
        })
    })
})

//Log In
authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next (err)
        }
        if(!user){
            res.status(403)
            return (new Error ("Username or password is incorrect"))
        }
        if(req.body.password !== user.password){
            res.status(403)
            return next(new Error("Username or password is incorrect"))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return (res.status(200).send({ token, user }))
    })
})



module.exports = authRouter