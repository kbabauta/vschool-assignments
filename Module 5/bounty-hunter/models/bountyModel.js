const mongoose = require("mongoose")
Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Alive"
    },

    bounty: {
        type: Number,
        required: true
    },

    bountyType:{
        type: String,
    }
})

module.exports = mongoose.model('Bounty', bountySchema)