const express = require ('express')
const commentRouter = express.Router()
const Comment = require('../models/Comment.js')

//Get all by issue
commentRouter.get("/:issueId", (req, res, next) => {
        req.body.user = req.params._id
        req.body.issueId = req.params.issueId
        Comment.find((err, comments) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comments)
        })
    })
    

// Post One Comment
commentRouter.post("/:issueId", (req, res, next) => {
    req.body.user = req.user._id
    req.body.issueId = req.params.issueId
    const newComment = new Comment (req.body)
    newComment.save(( err, savedComment ) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

    // Delete Comment
commentRouter.delete("/:issueId/:commentId", (req, res, next) => {
    Comment.findOneAndDelete({
        _id: req.params.commentId,
        user: req.user._id
    },
    (err, deletedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(`Successfully deleted ${deletedComment}`)
    })
})

// Update Comment
commentRouter.put("/:issueId/:commentId", (req, res, next) => {
    Comment.findOneAndUpdate({
        _id: req.params.commentId,
        user: req.user._id
    }, 
        req.body,
        {new: true},
        (err, updatedComment) => {
            if(err){
                res.status(500)
                return next (err)
            }
            return res.status(201).send(updatedComment)
        }
    )
})

    
module.exports = commentRouter