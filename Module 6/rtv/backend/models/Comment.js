const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema ({
    comment: {
        type: String
    },
    
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    },

    time: {
        type: Date,
        default: Date.now,
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)