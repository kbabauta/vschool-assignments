const express = require ('express')
const app = express()
<<<<<<< HEAD
const morgan = require ("morgan")
// const mongoose = require("mongoose")
const connectdb = require ("./db-atlas/database.js")

=======
const morgan = require ('morgan')
// var mongoose = require('mongoose')

const { MongoClient } = require("mongodb")
const url = "mongodb+srv://kbabauta:mikaDoggy91!@cluster0.gqs8h.mongodb.net/moviesdb?retryWrites=true&w=majority"
const client = new MongoClient(url)
>>>>>>> 2aae5938d33780ed6a42ae6844a98aec97ff70d9

// Middleware (for every request) //
app.use (express.json()) 
app.use(morgan('dev'))

<<<<<<< HEAD
// Connect to DB 'mongodb://localhost:27017/moviesdb'
// mongoose.connect('cluster0-shard-00-02.gqs8h.mongodb.net:27017',
=======
// Looks for a request body, and turns it into 'req.body'


// Connect to DB
// mongoose.connect('mongodb://localhost:27017/moviesdb',
>>>>>>> 2aae5938d33780ed6a42ae6844a98aec97ff70d9
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     },
<<<<<<< HEAD
//     () => console.log("Connected to the DB"))
connectdb()
=======
//     () => console.log("Connected to the DB")
// )


async function run() {
    try {
        await client.connect()
        console.log("connected to the server")

    } catch (err) {
        console.log(err.stack)
    }
    finally {
        await client.close()
    }
}

run().catch(console.dir)

>>>>>>> 2aae5938d33780ed6a42ae6844a98aec97ff70d9

// Routes //
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))
app.use("/games", require ("./routes/gameRouter.js"))




// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen //
<<<<<<< HEAD
app.listen (9000, () => {
    console.log("running on 9000!")
})

=======
app.listen(7000, () => {
    console.log("running on 7000!")
})
>>>>>>> 2aae5938d33780ed6a42ae6844a98aec97ff70d9
