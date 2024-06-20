require("dotenv").config()
require("express-async-errors")

// core imports
const express = require("express")
const app = express()
const cors = require("cors")
const route = require("./routes/user-route")
// database
const connectDB = require("./database/db")

// middlewares
const notFound = require("./middlewares/not-found-middleware")
const errHandler = require("./middlewares/error-handler")

// use of external middleware
app.use(express.json())
app.use(cors())

app.use("/api/v1/auth", route)
app.get("/", (req, res) => {
    res.send(
        "This API is for post routes only(Creating Users and Logging In), cannot access a post route on a get Request"
    )
})
// use middleware
app.use(errHandler)
app.use(notFound)

const PORT = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`Port ${PORT} is live...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
