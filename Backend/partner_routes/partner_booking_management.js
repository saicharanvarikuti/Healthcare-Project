const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const database = require("../database/database");
const partnerVerifyToken = require('../partner_authentication/partner_verify_token')

router.use(bodyParser.json());

router.get('/partnerBookings', partnerVerifyToken,async(req, res) => {
    const partnerId = await database.promise().query('SELECT PARTNER_ID FROM PARTNERS WHERE EMAILID =?',req.user.email)
    const myBookings = await database.promise().query('SELECT * FROM BOOKINGS WHERE PARTNER_ID = ?',partnerId[0][0].PARTNER_ID)
    if(myBookings[0].length !== 0){
        res.status(200).send(myBookings[0])
        console.log(myBookings)
    }else{
        console.log("You have no bookings")
        res.status(400).json({ message: 'You have no bookings' });
    }  
});

router.post('/partnerBookingAccept', partnerVerifyToken,async(req, res) => {
    const bookingId = req.body.BOOKING_ID;
    const bookingStatus = await database.promise().query('SELECT BOOKING_STATUS FROM BOOKINGS WHERE BOOKING_ID=?',bookingId)
    if(bookingStatus[0].BOOKING_STATUS === "requested"){
        await database.promise().query('UPDATE BOOKINGS SET BOOKING_STATUS = "accepted" WHERE BOOKING_ID = ?', bookingId);
        console.log("Booking accepted successfully");
        res.status(200).json({ message: 'Booking accepted successfully' })
    }
});

router.post('/partnerBookingReject', partnerVerifyToken,async(req, res) => {
    const bookingId = req.body.BOOKING_ID;
    const bookingStatus = await database.promise().query('SELECT BOOKING_STATUS FROM BOOKINGS WHERE BOOKING_ID=?',bookingId)
    if(bookingStatus[0].BOOKING_STATUS === "requested"){
        await database.promise().query('UPDATE BOOKINGS SET BOOKING_STATUS = "rejected" WHERE BOOKING_ID = ?', bookingId);
        console.log("Booking rejected successfully");
        res.status(200).json({ message: 'Booking rejected successfully' });
    }
});

router.post('/partnerBookingOngoing', partnerVerifyToken,async(req, res) => {
    const bookingId = req.body.BOOKING_ID;
    const bookingStatus = await database.promise().query('SELECT BOOKING_STATUS FROM BOOKINGS WHERE BOOKING_ID=?',bookingId)
    if(bookingStatus[0].BOOKING_STATUS == "accepted"){
        await database.promise().query('UPDATE BOOKINGS SET BOOKING_STATUS = "ongoing" WHERE BOOKING_ID = ?', bookingId);
        console.log("Booking status changed to ongoing");
        res.status(200).json({ message: 'Booking status changed to ongoing' });
    }
});

router.post('/partnerBookingCompleted', partnerVerifyToken,async(req, res) => {
    const bookingId = req.body.BOOKING_ID;
    const bookingStatus = await database.promise().query('SELECT BOOKING_STATUS FROM BOOKINGS WHERE BOOKING_ID=?',bookingId)
    
    if(bookingStatus[0].BOOKING_STATUS === "ongoing"){
        await database.promise().query('UPDATE BOOKINGS SET BOOKING_STATUS = "completed" WHERE BOOKING_ID = ?', bookingId);
        console.log("Booking status changed to completed");
        res.status(200).json({ message: 'Booking status changed to completed' });
    }
});

module.exports = router;
