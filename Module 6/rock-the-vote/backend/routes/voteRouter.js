const express = require('express')
const voteRouter = express.Router()
const Issue = require('../models/Issue')
const Comment = require('../models/Comment')

// Add like to issue
voteRouter.put("/like/add/issue/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate (
        { _id: req.params.issueId },
        { $addToSet: { likes: req.user._id },
            $pull: { dislikes: req.user._id } },
        { new: true },
        (err, likedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(likedIssue)
        }
    )
})

// Add dislike to issue
voteRouter.put("/dislike/add/issue/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        { $addToSet: { dislikes: req.user._id },
            $pull: { likes: req.user._id } },
        { new: true },
        (err, dislikedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(dislikedIssue)
        }

    )
})

// delete like from issue
voteRouter.put("/like/delete/issue/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        { $pull: { likes: req.user._id } },
        { new: true },
        (err, issue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(issue)            
        }
    )
})


// delete dislike from issue
voteRouter.put("/dislike/delete/issue/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        { $pull: { dislikes: req.user._id } },
        { new: true },
        (err, issue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(issue)            
        }
    )
})

module.exports = voteRouter