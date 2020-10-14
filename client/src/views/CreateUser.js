import React, { Component } from 'react'
import axios from 'axios'

class CreateUser extends Component {
    constructor() {
        super()
        this.state = {
            username: ''
        }
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        const user = {
            username: this.state.username
        }
        console.log(user)

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        this.setState({
            username: ''
        })
    }

    render() {  
        return (
            <div className="container">
                <h3 className="font-weight-bold">Create New User</h3>
                <br/>
                <form action="#" id="createUser" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username" className="font-weight-bold">Username: </label>
                        <input type="text" id="username" className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                    </div>
                    <br/>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Create User</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser;
