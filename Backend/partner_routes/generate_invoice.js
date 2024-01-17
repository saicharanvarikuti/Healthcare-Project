const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const database = require("../database/database");
const partnerVerifyToken = require('../partner_authentication/partner_verify_token')

router.use(bodyParser.json());

router.post('/generateInvoice', partnerVerifyToken,async(req, res) => {
    const bookingId = req.body.BOOKING_ID;
    const bookingStatus = await database.promise().query('SELECT BOOKING_STATUS FROM BOOKINGS WHERE BOOKING_ID=?',bookingId)
    const userId = await database.promise().query('SELECT USER_ID FROM BOOKINGS WHERE BOOKING_ID=?',bookingId)
    const partnerId = await database.promise().query('SELECT PARTNER_ID FROM BOOKINGS WHERE BOOKING_ID=?',bookingId)
    const partnerType = await database.promise().query('SELECT SERVICE_TYPE FROM PARTNERS WHERE PARTNER_ID = ?',partnerId[0][0].PARTNER_ID)
    let amount = 0;
    if(partnerType[0][0].SERVICE_TYPE === "doctor"){
        const amountResult = await database.promise().query('SELECT FEE FROM DOCTORS WHERE PARTNER_ID = ?',partnerId[0][0].PARTNER_ID)
        amount = amountResult[0][0].FEE
    }
    const paymentStatus = "paid"
    console.log(bookingId,userId[0][0].USER_ID,amount,paymentStatus,partnerId[0][0].PARTNER_ID)
    const values = [
        bookingId,
        userId[0][0].USER_ID,
        amount,
        paymentStatus,
        partnerId[0][0].PARTNER_ID
    ]
    if(bookingStatus[0][0].BOOKING_STATUS === "completed"){
        await database.promise().query('INSERT INTO INVOICE (BOOKING_ID, USER_ID, AMOUNT, ISSUE_DATE, DUE_DATE, STATUS, PARTNER_ID) VALUES (?, ?, ?, NOW(), DATE_ADD(NOW(), INTERVAL 1 WEEK), ?, ?)', values);
        console.log("Invoice generated successfully");
        res.status(200).json({ message: 'Invoice generated successfully' });
    }
});

module.exports = router;