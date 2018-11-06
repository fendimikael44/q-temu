import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {
    render() {
        return(
            <nav className="navbar">
                <a
                    className="main-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    QTemu
                </a>
                <a
                    className="navbar-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Create Meetup
                </a>
                <a
                    className="navbar-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Explore
                </a>
                <a
                    className="navbar-link-right"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Login
                </a>
            </nav>
        )
    }
}

export default NavBar