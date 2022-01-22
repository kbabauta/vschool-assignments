const express = require("express")
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const connectdb = require ('./db-atlas/database.js')

app.use(express.json())
app.use(morgan("dev"))


connectdb()


app.use("/bounties", require("./routes/bountyRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})



// mongoose.connect('mongodb://localhost:27017/bountydb'),
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     },
//     () => console.log("Connected to the DB")