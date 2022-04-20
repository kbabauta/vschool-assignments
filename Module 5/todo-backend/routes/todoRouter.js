const express = require ("express")
const todoRouter = express.Router()
const { v4: uuidv4 } = require ("uuid")

const todos = [
    {
        name: "Go to the gym",
        description: "Time to get in shape",
        imageUrl: "https://media.istockphoto.com/photos/holding-weight-and-sitting-picture-id1277242852?s=612x612",
        completed: false,
        _id: uuidv4()
    },
    {
        name:"Go pick up groceries",
        description: "Cut down on the junk food!",
        imageUrl: "https://media.istockphoto.com/photos/unrecognizable-supermarket-aisle-as-background-picture-id1265272573?s=612x612",
        completed: false,
        _id: uuidv4()
    }
]


// GET SINGLE TODO
todoRouter.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const foundItem = todos.find(todo => todo._id === todoId)
    res.send(foundItem)
})


// DELETE SINGLE TODO
.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const itemIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(itemIndex, 1)
    res.send("Successfully removed item from the list!")
})


// UPDATE SINGLE TODO
.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const itemIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[itemIndex], req.body)
    res.send(`Successfully updated ${updatedTodo.name}!`)
})



todoRouter.route('/')

//Get All
.get((req,res) => {
    res.send(todos)
})


//Add new item
.post((req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to the list!`)
})


module.exports = todoRouter