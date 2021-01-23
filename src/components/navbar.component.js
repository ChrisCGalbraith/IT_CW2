import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateBooking from "./create-booking.component";
import EditTodo from "./edit-todo.component";
import BookingsList from "./booking-list.component";
import Speaker from "./speakers.component";
import Home from "./home.component";
import logo from "../logo.png";

export default class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                        <a class="navbar-brand" href="localhost:3000" target="_blank">
                            <img src={logo} width="40" height="40" alt="Home" />
                        </a>
                        <Link to="/home" className="navbar-brand">Home</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/speakers" className="nav-link">Speakers</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/rooms" className="nav-link">Rooms</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/bookings" className="nav-link">Bookings</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br />
                    <Route path="/home" exact component={Home} />
                    <Route path="/" exact component={BookingsList} />
                    <Route path="/edit/:id" component={EditTodo} />
                    <Route path="/bookings" component={CreateBooking} />
                    <Route path="/speakers" component={Speaker} />
                </div>
            </Router>
        )
    }
}

