const express = require('express')
const tvshowRouter = express.Router()
const { v4: uuid_v4 } = require("uuid")

const tvShows = [
    { title: "Rick and Morty", _id: uuid_v4() },
    { title: "Watchmen", _id: uuid_v4() },
    { title: "Breaking Bad", _id: uuid_v4() },
    { title: "Friends", _id: uuid_v4() },
]

tvshowRouter.get("/", (req, res) => {
    res.send(tvShows)
})

tvshowRouter.get("/:tvShowId", (req, res) => {
    const tvShowId = req.params.tvShowId 
    const foundShow = tvShows.find(show => show._id === tvShowId)
    res.send(foundShow)
})

tvshowRouter.post ("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuid()
    tvshows.push(newShow)
    res.send(`Successfully added ${newShow.title} to the database!`)
})

module.exports = tvshowRouter