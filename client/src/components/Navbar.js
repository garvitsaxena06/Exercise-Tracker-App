import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <div className="container">
                        <Link to='/' className="navbar-brand">ExerTracker</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ml-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Exercises</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Create Exercise Log</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/user" className="nav-link">Create User</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;