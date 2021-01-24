import { useEffect, useState } from "react";
import Row from "./row"
import axios from 'axios';


const Table = () => {

    const [bookings, setBookings] = useState();

    // Same as component did mount
    useEffect(() => {
        axios.get('/bookings')
            .then(response => {
                setBookings(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    if (!bookings) {
        return (
            <div>No bookings found</div>
        )
    }

    if (bookings) {
        console.log(bookings)
        return (
            <table className="table table-striped bookinglist" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Room</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, index) => (
                            <Row 
                                key={booking._id}
                                speaker={booking.booking_speaker}
                                subject={booking.booking_subject}
                                room={booking.booking_room}
                            />
                        ))
                    }
                </tbody>
            </table>
        )
    }
}

export default Table;