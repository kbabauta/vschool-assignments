const mongoose = require("mongoose")
const { MongoURI } = require("./key")

const connectDB = async () => {
    const connection = await mongoose.connect(MongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log(`mongoDB connected: ${connection.connection.host}`)
}

module.exports = connectDB