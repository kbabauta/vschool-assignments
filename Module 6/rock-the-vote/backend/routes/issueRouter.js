const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/Issue.js")


// Get All Issues
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if(err) {
            res.status(500)
            return next (err)
        }
        return res.status(200).send(issues)
    })
})

// Get all issues by user
issueRouter.get("/user", (req, res, next) => {
    Issue.find({ user: req.user._id }, (err, issues) => {
            if(err){
                res.status(500)
                return next (err)
            }
            return res.status(200).send(issues)
        }
    )
})

//Post Issue
issueRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
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
        { _id: req.params.issueId, user: req.user._id },
        (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedIssue.title} from the database!`)
        }
    )
})

// Updated Issue
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.user._id},
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

//Like Issue
issueRouter.put("/:issueId/:like", (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.user._id},
        {$inc: {likes: 1}},
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

// Dislike Issue
issueRouter.put("/:issueId/:dislike", (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.user._id},
        {$inc: {dislikes: 1}},
        {new: true},
        (err, updatedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})


module.exports = issueRouter