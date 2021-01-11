import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class TodosList extends Component {

    constructor(props){
        super(props);
        this.state = {todos: []};
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/')
        .then(response => {
            this.setState({ todos: response.data });
        })
        .catch(function (error){
            console.log(error);
        })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }
}