const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const database = require("../database/database");
const loginStatusCheck = require("../user_authentication/login_status");

router.use(bodyParser.json());

router.get('/myBookings', loginStatusCheck,async(req, res) => {
    const userId = await database.promise().query('SELECT USER_ID FROM USERS WHERE EMAILID =?',req.user.email)
    const myBookings = await database.promise().query('SELECT * FROM BOOKINGS WHERE USER_ID = ?',userId[0][0].USER_ID)
    if(myBookings[0].length !== 0){
        res.status(200).send(myBookings[0])
        console.log(myBookings)
    }else{
        console.log("You have no bookings")
        res.status(400).json({ message: 'You have no bookings' });
    }    
});

router.post('/cancelBooking', loginStatusCheck, async(req,res)=>{
    const bookingId = req.body.BOOKING_ID;
    const bookingStatus = await database.promise().query('SELECT BOOKING_STATUS FROM BOOKINGS WHERE BOOKING_ID=?',bookingId)
    if(bookingStatus !== "cancelled"){
        await database.promise().query('UPDATE BOOKINGS SET BOOKING_STATUS = "cancelled" WHERE BOOKING_ID = ?', bookingId);
        console.log("Booking canceled successfully");
        res.status(200).json({ message: 'Booking canceled successfully' });
    }else{
        console.log("the booking is already cancelled")
        res.status(400).json({ message: 'the booking is already cancelled' });
    }
    
});

router.post('/modifyDate', loginStatusCheck, async(req,res)=>{
    const bookingId = req.body.BOOKING_ID;
    const bookingStatus = await database.promise().query('SELECT BOOKING_STATUS FROM BOOKINGS WHERE BOOKING_ID=?',bookingId)
    if(bookingStatus === "requested"){
        await database.promise().query('UPDATE BOOKINGS SET DATE = ? WHERE BOOKING_ID = ?', [req.body.DATE, bookingId]);
        console.log("Date modified successfully");
        res.status(200).json({ message: 'Date modified successfully' });
    }
    else{
        console.log("the booking date can not be modified")
        res.status(400).json({ message: 'the booking date can not be modified' });
    }
});

module.exports = router;