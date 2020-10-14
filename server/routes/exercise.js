const express = require('express')
let Exercise = require('../models/exercise.model')

const route = express.Router()

// GET landing page
route.get('/', (req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err))
})

// POST new exercise
route.post('/add', (req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date(req.body.date)

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    })

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

// GET a particular exercise
route.get('/:id', (req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err))
})

// DELETE a particular exercise
route.delete('/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

// update an exercise
route.post('/update/:id', (req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username,
            exercise.description = req.body.description,
            exercise.duration = Number(req.body.duration),
            exercise.date = Date(req.body.date)
            
            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err ))
        })
        .catch(err => res.status(400).json('Error: ' + err ))
})

module.exports = route;