import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import Home from "./components/home.component";

import logo from "./logo.png";

class App extends Component {
  render() {
   return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="localhost:3000" target="_blank">
              <img src={logo} width="40" height="40" alt="Home"/>
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
          <br/>
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;