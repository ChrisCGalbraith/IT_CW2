import React, { Component } from 'react';
import axios from 'axios';
// import Bookings from './booking-list.component';
import Table from "./bookings/table"

export default class Home extends Component {
    
        constructor(props){
            super(props);
            this.state = {bookings: []};
        }

        render() {
            return (
                <div>
                    <h3>Speakers</h3>
                    <Table />
                </div>
            )
        }
};