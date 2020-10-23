const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// importing env file
const dotenv = require('dotenv')

// importing routes
const exerciseRouter = require('./routes/exercise')
const userRouter = require('./routes/user')

// connecting env file
dotenv.config({ path: './config/config.env' })

const app = express()
const PORT = process.env.PORT || 5000

// initializing cors
app.use(cors())
app.use(express.json())

// initializing mongoDB
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!")
}).on('error', err => console.log(err))

// connecting routes
app.use('/exercises', exerciseRouter)
app.use('/users', userRouter)

// listening to PORT
const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    //Close server & exit process
    server.close(() => process.exit(1))
})