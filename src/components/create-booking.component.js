import React, { Component } from 'react';
import axios from 'axios';


export default class CreateBooking extends Component {

    constructor(props) {
        super(props);

        this.onChangeBookingSpeaker = this.onChangeBookingSpeaker.bind(this);
        this.onChangeBookingSubject = this.onChangeBookingSubject.bind(this);
        this.onChangeBookingRoom = this.onChangeBookingRoom.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            booking_speaker: '',
            booking_subject: '',
            booking_room: '',
        }
    }

    onChangeBookingSpeaker(e) {
        this.setState({
            booking_speaker: e.target.value
        });
    }

    onChangeBookingSubject(e) {
        this.setState({
            booking_subject: e.target.value
        });
    }

    onChangeBookingRoom(e) {
        this.setState({
            booking_room: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Speaker Name: ${this.state.booking_speaker}`);
        console.log(`Speaker Subject: ${this.state.booking_subject}`);
        console.log(`Room Number: ${this.state.booking_room}`);
        
        const newBooking = {
            booking_speaker: this.state.booking_speaker,
            booking_subject: this.state.booking_subject,
            booking_room: this.state.booking_room,
        };

        axios.post('/bookings/add', newBooking)
            .then(res => console.log(res.data));

        this.setState({
            booking_speaker: '',
            booking_subject: '',
            booking_room: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Booking</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Speaker: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.booking_speaker}
                                onChange={this.onChangeBookingSpeaker}
                                />
                    </div>
                    <div className="form-group">
                        <label>Subject: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.booking_subject}
                                onChange={this.onChangeBookingSubject}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="roomOptions" 
                                    id="roomA" 
                                    value="A"
                                    checked={this.state.booking_room==='A'} 
                                    onChange={this.onChangeBookingRoom}
                                    />
                            <label className="form-check-label">Room A</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="roomOptions" 
                                    id="roomB" 
                                    value="B" 
                                    checked={this.state.booking_room==='B'} 
                                    onChange={this.onChangeBookingRoom}
                                    />
                            <label className="form-check-label">Room B</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="roomOptions" 
                                    id="roomC" 
                                    value="C" 
                                    checked={this.state.booking_room==='C'} 
                                    onChange={this.onChangeBookingRoom}
                                    />
                            <label className="form-check-label">Room C</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Booking" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}