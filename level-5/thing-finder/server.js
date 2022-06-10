const express = require ("express")
const app = express()

app.use(express.json())

app.use("/items", require("./routes/inventoryRouter.js"))

app.listen(8000,() => {
    console.log("running on port 8000!")
})