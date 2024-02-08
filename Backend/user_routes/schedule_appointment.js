const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const database = require("../database/database");
const loginStatusCheck = require("../user_authentication/login_status");

router.use(bodyParser.json());

router.post('/scheduleDoctor',loginStatusCheck, async (req, res) => {
    try {
        const userIdResult = await database.promise().query('SELECT USER_ID FROM USERS WHERE EMAILID=?', req.user.email);
        const userId = userIdResult[0][0].USER_ID;
        const bookingStatus = "requested";
        const bookingType = "doctor appointment";
        console.log("the partnerId is",req.body.partnerId)
        const values = [
            req.body.patientName,
            req.body.gender,
            req.body.DOB,
            req.body.weight,
            req.body.address,
            req.body.mobileNumber,
            req.body.appointmentDate,
            req.body.symptoms,
            new Date(),
            bookingStatus,
            bookingType,
            req.body.partnerId,
            userId  
        ];

        await database.promise().query('INSERT INTO BOOKINGS (PATIENT_NAME, GENDER, DOB, WEIGHT, ADDRESS, MOBILE_NUMBER, APPOINTMENT_DATE, AILMENT_DESCRIPTION, BOOKING_DATE, BOOKING_STATUS, BOOKING_TYPE, PARTNER_ID, USER_ID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', values);
        
        console.log("Appointment scheduled, please wait for doctor confirmation");
        res.status(200).json({ message: 'Appointment scheduled, please wait for doctor confirmation' });
    } catch (error) {
        console.error("Error scheduling appointment:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/scheduleTherapy', loginStatusCheck,async(req, res) => {
    const userId = await database.promise().query('SELECT USER_ID FROM USERS WHERE EMAILID=?',req.user.email);
    const partnerId = await database.promise().query('SELECT PARTNER_ID FROM THERAPIES WHERE THERAPY_ID=?',req.body.THERAPY_ID);
    console.log(userId[0][0].USER_ID)
    console.log(partnerId[0][0].PARTNER_ID)
    const bookingStatus = "requested";
    const bookingType = "therapy Booking"
    const values = [
        req.body.DATE,
        req.body.LOCATION,
        bookingStatus,
        bookingType,
        req.body.USER_REMARKS,
        partnerId[0][0].PARTNER_ID,
        userId[0][0].USER_ID
    ]
    await database.promise().query('INSERT INTO BOOKINGS (DATE, LOCATION, BOOKING_STATUS, BOOKING_TYPE, USER_REMARKS, PARTNER_ID, USER_ID) VALUES (?, ?, ?, ?, ?, ?, ?)',values);
    console.log("Therapy booking scheduled, please wait for therapist confirmation");
    res.status(200).json({message: 'Therapy booking scheduled, please wait for therapist confirmation'});
});

router.post('/scheduleNurse', loginStatusCheck,async(req, res) => {
    const userId = await database.promise().query('SELECT USER_ID FROM USERS WHERE EMAILID=?',req.user.email);
    const partnerId = await database.promise().query('SELECT PARTNER_ID FROM NURSE_SERVICES WHERE NURSE_SERVICE_ID=?',req.body.NURSE_SERVICE_ID);
    console.log(userId[0][0].USER_ID)
    console.log(partnerId[0][0].PARTNER_ID)
    const bookingStatus = "requested";
    const bookingType = "Nurse service Booking"
    const values = [
        req.body.DATE,
        req.body.LOCATION,
        bookingStatus,
        bookingType,
        req.body.USER_REMARKS,
        partnerId[0][0].PARTNER_ID,
        userId[0][0].USER_ID
    ]
    await database.promise().query('INSERT INTO BOOKINGS (DATE, LOCATION, BOOKING_STATUS, BOOKING_TYPE, USER_REMARKS, PARTNER_ID, USER_ID) VALUES (?, ?, ?, ?, ?, ?, ?)',values);
    console.log("Nurse service booking scheduled, please wait for confirmation");
    res.status(200).json({message: 'Nurse service booking scheduled, please wait for confirmation'});
});

module.exports = router;