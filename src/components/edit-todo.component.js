import React, { Component } from 'react';
import axios from 'axios';

export default class EditBooking extends Component {

    constructor(props) {
        super(props);

        this.onChangeBookingSpeaker = this.onChangeBookingSpeaker.bind(this);
        this.onChangeBookingSubject = this.onChangeBookingSubject.bind(this);
        this.onChangeBookingRoom = this.onChangeBookingRoom.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            booking_Speaker: '',
            booking_subject: '',
            booking_room: '',
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            booking_speaker: this.state.booking_speaker,
            booking_subject: this.state.booking_subject,
            booking_room: this.state.booking_room,
        };
        console.log(obj);
        axios.post('/bookings/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    componentDidMount() {
        axios.get('/bookings/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    booking_speaker: response.data.booking_speaker,
                    booking_subject: response.data.booking_subject,
                    booking_room: response.data.booking_room,
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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

    render() {
        return (
            <div>
                <h3 align="center">Update Booking</h3>
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
                                    onChange={this.onChangeBookingroom}
                                    />
                            <label className="form-check-label">A</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="roomOptions" 
                                    id="roomB" 
                                    value="B" 
                                    checked={this.state.booking_room==='B'} 
                                    onChange={this.onChangeBookingroom}
                                    />
                            <label className="form-check-label">B</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="roomOptions" 
                                    id="roomC" 
                                    value="C" 
                                    checked={this.state.booking_room==='C'} 
                                    onChange={this.onChangeBookingroom}
                                    />
                            <label className="form-check-label">C</label>
                        </div>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Booking" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}