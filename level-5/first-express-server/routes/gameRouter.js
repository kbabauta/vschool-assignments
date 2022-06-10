const express = require('express')
const gameRouter = express.Router()
const { v4: uuid_v4 } = require('uuid')

const games = [
    { title: "doom", genre: "fps", _id: uuid_v4() },
    { title: "league of legends", genre: "strategy", _id: uuid_v4() },
    { title: "call of duty", genre: "fps", _id: uuid_v4() },
    { title: "minecraft", genre: "adventure", _id: uuid_v4() }

]

gameRouter.get ("/", (req, res) => {
    res.send(games)
})

gameRouter.get("/:gameId", (req, res) => {
    const gameId = req.params.gameId
    const foundGame = games.find(game => game._id === gameId)
    res.send(foundGame)
})



gameRouter.post ("/", (req, res) => {
    const newGame = req.body
    newGame._id = uuid()
    games.push (newGame)
    res.send(`Successfully added ${newGame.title} to the database!`)
})






module.exports = gameRouter