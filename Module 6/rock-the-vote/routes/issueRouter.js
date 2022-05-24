const express = require('express')
const mongoose = require('mongoose')
const issueRouter = express.Router()
const Issue = require('../models/Issue')


// Get all issues
issueRouter.get("/", (req, res, next) => {
    Issue.find(
        (err, issues) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issues)
        }
    )
})


// Get by issues user
issueRouter.get("/user", (req, res, next) => {
    Issue.find({ user: req.auth._id }, (err, issues) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

// Get issues by user ID
issueRouter.get("/user/:userId", (req, res, next) => {
    Issue.find({ user: req.params.userId }, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

// Get issue by issue ID
issueRouter.get("/:issueId", (req, res, next) => {
    Issue.find({ _id: req.params.issueId }, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//Upvote
issueRouter.put("/upvotes/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        {$inc: {upVotes: 1}},
        {new: true},
        (err, issue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            if(!issue.upVoters.includes(req.auth._id)) {
                Issue.findOneAndUpdate(
                    {_id: req.params.issueId},
                    {$push: {upVoters: req.auth._id}},
                    {new: true},
                    (err, issue) => {
                        if(err) {
                            res.status(500)
                            return next(err)
                        }
                        console.log(issue)
                        return res.status(200).send(issue)
                    })
            } else {
                res.status(500)
                Issue.findOneAndUpdate(
                    {_id: req.params.issueId},
                    {$inc: {upVotes: -1}},
                    {new: true},
                    (err, issue) => {
                        if(err) {
                            res.status(500)
                            return next(err)
                        }
                        return
                    }
                )
                return next(new Error("Up vote already processed"))
            }
        })
})

//Downvote
issueRouter.put("/downvotes/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate (
        {_id: req.params.issueId},
        {$inc: {downVotes: 1}},
        {new: true},
        (err, issue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(!issue.downVoters.includes(req.auth._id)){
                Issue.findOneAndUpdate(
                    {_id: req.params.issueId},
                    {$push: {downVoters: req.auth._id}},
                    {new: true},
                    (err, issue) => {
                        if(err){
                            res.status(500)
                            return next(err)
                        }
                        console.log(issue)
                        return res.status(200).send(issue)
                    })
            } else {
                res.status(500)
                Issue.findOneAndUpdate (
                    {_id: req.params.issueId},
                    {$inc: {downVotes: -1}},
                    {new: true},
                    (err, issue) => {
                        if(err){
                            res.status(500)
                            return next(err)
                        }
                        return
                    }
                )
                return next(new Error("Down vote already processed"))
            }
        }
    )
})

// Add new issue
issueRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

// Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
        {_id: req.params.issueId, auth: req.auth._id},
        (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send("Successfully removed issue from the database")
        }
    )
})

// Update Issue
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, auth: req.auth._id},
        req.body,
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

module.exports = issueRouter