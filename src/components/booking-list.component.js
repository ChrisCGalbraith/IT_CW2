import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from "./bookings/table"

const Booking = props => (
    <tr>
        <td className={props.booking.booking_completed ? 'completed' : ''}>{props.booking.booking_speaker}</td>
        <td className={props.booking.booking_completed ? 'completed' : ''}>{props.booking.booking_subject}</td>
        <td className={props.booking.booking_completed ? 'completed' : ''}>{props.booking.booking_room}</td>
        <td>
            <Link to={"/edit/"+props.booking._id}>Edit</Link>
        </td>
    </tr>
)

export default class BookingsList extends Component {

    constructor(props){
        super(props);
        this.state = {bookings: []};
    }


    componentDidMount(){
        axios.get('/bookings')
         .then(response => {
             this.setState({ bookings: response.data });
         })
         .catch(function (error){
             console.log(error);
         })
    }

    bookingList() {
        return this.state.bookings.map(function(currentBooking, i){
            return <Booking booking={currentBooking} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Bookings</h3>
                <Table />
                {/* <table className="table table-striped bookinglist" style={{marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.bookings.map((currentBooking, index) => (
                                <Booking booking={currentBooking} key={index} />
                            ))
                        }
                    </tbody>
                </table> */}
            </div>
        )
    }
}