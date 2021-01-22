const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Booking = new Schema({
    booking_speaker: {
        type: String
    },
    booking_subject: {
        type: String
    },
    booking_room: {
        type: String
    }
});

module.exports = mongoose.model('Booking', Booking);