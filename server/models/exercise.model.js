const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    decription: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise