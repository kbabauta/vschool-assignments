const express = require('express')
const app = express()


app.use(express.json())

app.use('/', (req, res, next) => {
    console.log('Running first use')
    next()
})

app.use('/', (req, res, next) => {
    console.log('running get')
    req.body = {title: "Hello World"}
    next()
})

app.use('/greeting', require('./routes/middlewareRouter.js'))

app.use('/', () => {
    console.log('Finished')
})


app.listen(9000, () => {
    console.log('Middleware test server is running on Port 9000!')
})