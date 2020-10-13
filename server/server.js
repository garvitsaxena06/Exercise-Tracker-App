const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const dotenv = require('dotenv')

const exerciseRouter = require('./routes/exercise')
const userRouter = require('./routes/user')

dotenv.config({ path: './config/config.env' })

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!")
})

app.use('/exercise', exerciseRouter)
app.use('/userRouter', userRouter)

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})