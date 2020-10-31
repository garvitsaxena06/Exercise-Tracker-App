import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Exercise = (props) => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={'/edit/' + props.exercise._id}>Edit</Link> |
            <Link to='/' onClick={() => props.deleteExercise(props.exercise._id)}> Delete</Link>
        </td>
    </tr>
)

class ExerciseList extends Component {
    constructor() {
        super()
        this.state = {
            exercises: []
        }
        this.deleteExercise = this.deleteExercise.bind(this)
    }

    componentDidMount = async () => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/exercises`)
            .then(response => {
                this.setState({
                    exercises: response.data
                })
            })
            .catch(err => console.log(err))
    }

    deleteExercise(id) {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/exercises/` + id)
            .then(res => {
                this.setState({
                    exercises: this.state.exercises.filter(exercise => exercise._id !== id)
                })
            })
            .catch(err => console.log(err))
    }

    exerciseList() {
        return this.state.exercises.map(exercise => (
            <Exercise exercise={exercise} deleteExercise={this.deleteExercise} key={exercise._id} />
        ))
    }

    render() {
        return (
            <div className="container">
                <h3 className="font-weight-bold">Exercises List</h3>
                <br/>
                <div style={{overflowX: 'auto'}}>
                    <table className="table table-bordered table-hover">
                        <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration (mins)</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.exerciseList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ExerciseList;