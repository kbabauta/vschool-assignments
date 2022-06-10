const express = require("express")
const movieRouter = express.Router()
const Movie = require('../models/movie.js')
// const { v4: uuid_v4 } = require("uuid")

// const movies = [
//     {title: "die hard", genre: "action", _id: uuid_v4()},
//     {title: "star wars IV", genre: "fantasy", _id: uuid_v4()},
//     {title: "lion king", genre: "kids", _id: uuid_v4()},
//     {title: "friday the 13th", genre: "horror", _id: uuid_v4()}
// ]





// Get All //
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
<<<<<<< HEAD
        if(err){
=======
        if (err){
>>>>>>> 2aae5938d33780ed6a42ae6844a98aec97ff70d9
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

// Get One //
movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find( movie => movie._id === movieId )
    res.send(foundMovie)
    if(!foundMovie){
        const error = new Error(`The item with id${movieId} was not found.`)
        res.status(500)
        return next(error)
    }
})

//Get by genre
movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

// Post One //
movieRouter.post ("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuid_v4()
    movies.push(newMovie)
    res.send(newMovie)
})

// Delete One //
movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send(`Successfully removed movie from the database!`)
})

// Update One //
movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const updateObject = req.body
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], updateObject)
    res.send(updatedMovie)
})





module.exports = movieRouter