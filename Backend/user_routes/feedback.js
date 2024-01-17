const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const database = require("../database/database");
const loginStatusCheck = require("../user_authentication/login_status");

router.use(bodyParser.json());

router.post('/feedback', loginStatusCheck,async(req, res) => {
    const userId = await database.promise().query('SELECT USER_ID FROM BOOKINGS WHERE BOOKING_ID=?',req.body.BOOKING_ID);
    const partnerId = await database.promise().query('SELECT PARTNER_ID FROM BOOKINGS WHERE BOOKING_ID=?',req.body.BOOKING_ID);
    const feedback = req.body.FEEDBACK;
    const values = [
        req.body.BOOKING_ID,
        userId,
        feedback,
        partnerId,
    ]
    const bookingStatus = await database.promise().query('SELECT BOOKING_STATUS FROM BOOKINGS WHERE BOOKING_ID=?',req.body.BOOKING_ID)
    if(bookingStatus === "completed"){
        await database.promise().query('INSERT INTO FEEDBACKS (BOOKING_ID, USER_ID, FEEDBACK, PARTNER_ID) VALUES (?, ?, ?, ?)',values);
        console.log("feedback saved successfully");
        res.status(200).json({message: 'feedback saved successfully'});
    }
    else{
        console.log("To give feedback, Please wait until booking completed")
        res.status(400).json({ message: 'To give feedback, Please wait until booking completed' });
    }
}); 

module.exports = router;