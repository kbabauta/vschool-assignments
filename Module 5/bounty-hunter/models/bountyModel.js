const mongoose = require("mongoose")
Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: String,
    living: {
        type: Boolean,
        default: 'Alive',
    },
    bountyPrice: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Bounty', bountySchema)