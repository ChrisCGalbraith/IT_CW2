/* 
    Code initially generated from tutorial: https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/
    and re-worked for the purposes of Internet Technologies Coursework 2.
*/

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CreateBooking from "./components/create-booking.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import Home from "./components/home.component";
import Navbar from "./components/navbar.component";

import logo from "./logo.png";

class App extends Component {

  render() {
    return (
      <>
        <div
          className="landing-wrapper"
          style={{
            backgroundImage: "url(/background.png)",
            backgroundPosition: '0% 0%',
            width: '100vw',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </div>
        <Navbar />
      </>
    );
  }
}

export default App;