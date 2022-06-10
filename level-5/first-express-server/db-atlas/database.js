const { Mongoose } = require("mongoose")

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URI)

    console.log(`mongoDB connected: ${connection.connection.host}`.cyan.bold)
}

module.exports = connectDB