import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

class EditExercise extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeDuration = this.onChangeDuration.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/exercises/` + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    description: response.data.description,
                    duration: response.data.duration,
                    date: new Date(response.data.date),
                })
            })


        axios.get(`${process.env.REACT_APP_BASE_URL}/users`)
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username)
                    })
                }
            })
            .catch(err => console.log(err))
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault()
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        axios.post(`${process.env.REACT_APP_BASE_URL}/exercises/update/` + this.props.match.params.id, exercise)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        this.props.history.push('/')
    }

    render() {
        return (
            <div className="container">
                <h3 className="font-weight-bold">Update Exercise Log</h3>
                <br/>
                <form action="#" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username" className="font-weight-bold">Username: </label>
                        <select 
                            name="userInput" 
                            id="userInput" 
                            ref="userInput" 
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(user => (
                                    <option
                                        key={user}
                                        value={user}>
                                        {user}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="font-weight-bold">Description: </label>
                        <input type="text" id="description" className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration" className="font-weight-bold">Duration (mins): </label>
                        <input type="text" id="duration" className="form-control" value={this.state.duration} onChange={this.onChangeDuration} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date" className="font-weight-bold">Date:</label><br/>
                        <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
                    </div>
                    <br/>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Update Exercise Log</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditExercise;