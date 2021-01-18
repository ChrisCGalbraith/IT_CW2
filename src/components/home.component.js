import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
    
        constructor(props){
            super(props);
        }

        render() {
            return (
                <div>
                    <h3>Speakers</h3>
                    <table className="table table-striped" style={{marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Subject</th>
                                <th>Room</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {/* { this.todoList() } */}
                        </tbody>
                    </table>
                </div>
            )
        }

        // todoList() {
        //     return this.state.todos.map(function(currentTodo, i){
        //         return <Todo todo={currentTodo} key={i} />;
        //     })
        // }
};