const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const database = require("../database/database");
const adminVerifyToken = require('../admin_authentication/admin_verify_token');

router.use(bodyParser.json());

router.get('/allBookings', adminVerifyToken,async(req, res) => {
    const allBookings = await database.promise().query('SELECT * FROM BOOKINGS')
    if(allBookings[0].length !== 0){
        res.status(200).send(allBookings[0])
        console.log(allBookings)
    }else{
        console.log("no bookings yet")
        res.status(400).json({ message: 'no bookings yet' });
    } 
});

router.get('/filterBookings', adminVerifyToken,async(req, res) => {
    const filterQuery = req.body.filterQuery;
    const filterBookings = await database.promise().query(`SELECT * FROM BOOKINGS WHERE BOOKING_STATUS = '%${filterQuery}%'`);
    if(filterBookings[0].length !== 0){
        res.status(200).send(filterBookings[0])
        console.log(filterBookings)
    }else{
        console.log(`no '%${filterQuery}%' bookings`)
        res.status(400).json({ message: `no '%${filterQuery}%' bookings` });
    } 
});

router.post('/modifyDate', adminVerifyToken, async (req, res) => {
    try {
        const bookingId = req.body.BOOKING_ID;
        await database.promise().query('UPDATE BOOKINGS SET DATE = ? WHERE BOOKING_ID = ?', [req.body.DATE, bookingId]);
        res.status(200).send('Date modified successfully');
    } catch (error) {
        console.error('Error modifying date:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/modifyLocation', adminVerifyToken, async (req, res) => {
    try {
        const bookingId = req.body.BOOKING_ID;
        await database.promise().query('UPDATE BOOKINGS SET LOCATION = ? WHERE BOOKING_ID = ?', [req.body.LOCATION, bookingId]);
        res.status(200).send('Location modified successfully');
    } catch (error) {
        console.error('Error modifying location:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/modifyStatus', adminVerifyToken, async (req, res) => {
    try {
        const bookingId = req.body.BOOKING_ID;
        await database.promise().query('UPDATE BOOKINGS SET BOOKING_STATUS = ? WHERE BOOKING_ID = ?', [req.body.BOOKING_STATUS, bookingId]);
        res.status(200).send('Status modified successfully');
    } catch (error) {
        console.error('Error modifying status:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/deleteBooking', adminVerifyToken, async (req, res) => {
    try {
        const bookingId = req.body.BOOKING_ID;
        await database.promise().query('DELETE FROM BOOKINGS WHERE BOOKING_ID = ?', bookingId);
        res.status(200).send('Booking deleted successfully');
    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;