const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bookingRoutes = express.Router();
const PORT = 4000;

let Booking = require('./booking.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/bookings', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

bookingRoutes.route('/').get(function(req, res) {
    Booking.find(function(err, bookings) {
        if (err) {
            console.log(err);
        } else {
            res.json(bookings);
        }
    });
});

bookingRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Booking.findById(id, function(err, bookings) {
        res.json(booking);
    });
});

bookingRoutes.route('/update/:id').post(function(req, res) {
    Booking.findById(req.params.id, function(err, booking) {
        if (!booking)
            res.status(404).send("data is not found");
        else
            booking.booking_speaker = req.body.booking_speaker;
            booking.booking_subject = req.body.booking_subject;
            booking.booking_room = req.body.booking_room;

            booking.save().then(booking => {
                res.json('Booking updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

bookingRoutes.route('/add').post(function(req, res) {
	const booking_speaker = req.body.booking_speaker;
	const booking_subject = req.body.booking_subject;
	const booking_room = req.body.booking_room;
    let booking = new Booking({
		booking_speaker,
		booking_subject,
		booking_room
	});
    booking.save()
        .then(booking => {
            res.status(200).json({
				'booking': 'booking added successfully',
				"data" : booking
 			});
        })
        .catch(err => {
            res.status(400).send('adding new booking failed');
        });
});

app.use('/bookings', bookingRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});