const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema ({
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    },
    
    comment: {
        type: String
    },

    dateCreated: {
        type: Date,
        default: Date.now
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    likes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],

    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]

})

module.exports = mongoose.model("Comment", commentSchema)