const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/Issue.js")
const Comment = require("../models/Comment")

// Get All Issues
issueRouter.get("/", (req, res, next) => {
    Issue.find().sort({ votes: 'desc' })
        .populate('comments')
        .exec(function (err, issues) {
            if (err) {
                res.status(500)
                return next(err)
            }
            const transformedIssues = issues.map(transformVotes).sort((a, b) => b.votes - a.votes)
            return res.status(200).send(transformedIssues)
        })
})

// Get all issues by user
issueRouter.get("/user", (req, res, next) => {
    Issue.find({ user: req.auth._id })
        .populate('comments')
        .exec(function (err, issues) {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issues.map(transformVotes))
        })
})

//Post Issue
issueRouter.post("/", (req, res, next) => {
    const userId = req.auth._id
    req.body.user = userId
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        console.log(req.auth._id)

        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

// Add comment to issue
issueRouter.post("/comments/:issueId"), (req, res, next) => {
    const userId = req.auth._id
    req.body.user = userId
    req.body.issue = req.params.issueId
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        Issue.updateOne({ _id: req.params.issueId }),
            { $push: { comments: savedComment._id } }, (err, issue) => {
                if(err){
                    res.status(500)
                    return next (err)
                }
                return res.status(201).send(savedComment)
            }
    })
}

// Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
        { _id: req.params.issueId, auth: req.auth._id },
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
        {_id: req.params.issueId, user: req.auth._id},
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

// Upvote/Downvote Issue
issueRouter.put("/vote/:issueId/:type", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId, 'votes.userId': {$ne: req.auth._id} },
        { $push: { votes: { userId: req.auth._id, voteType: req.params.type === 'increment' ? 1 : -1 } } },
        { new: true },
        (err, updatedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            console.log(updatedIssue)
            return res.status(201).send(updatedIssue ? transformVotes(updatedIssue) : null )
        }
    )
})

function transformVotes(issue) {
    if (!issue.votes) {
        issue.votes = []
    }
    const test = issue.votes.reduce((total, vote) => {
        return total += vote.voteType
    }, 0)
    issue.votes = test
    return issue
}


module.exports = issueRouter