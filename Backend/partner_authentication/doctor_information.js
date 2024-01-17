const express = require("express");
const router = express.Router();
const database = require('../database/database')
const bodyParser = require('body-parser');
const partnerVerifyToken = require('./partner_verify_token')

router.use(bodyParser.json());

router.post('/doctorInformation', partnerVerifyToken, async(req, res) => {
    const doctorData = req.body;
    const partnerId = await database.promise().query('SELECT PARTNER_ID FROM PARTNERS WHERE EMAILID=?',req.user.email)
    const values = [
        doctorData.FIRST_NAME,
        doctorData.LAST_NAME,
        doctorData.IMAGE_URL,
        doctorData.SPECIALIZATION,
        doctorData.LOCATION,
        doctorData.FEE,
        partnerId[0][0].PARTNER_ID
    ];
    const checkPartnerIdResult = await database.promise().query('SELECT COUNT(*) AS count FROM DOCTORS WHERE PARTNER_ID = ?', partnerId[0][0].PARTNER_ID);
    if (checkPartnerIdResult[0][0].count > 0) {
        await database.promise().query(`UPDATE DOCTORS SET FIRST_NAME=?,LAST_NAME=?, IMAGE_URL=?, SPECIALIZATION=?, LOCATION=?, FEE=? WHERE PARTNER_ID=?`,values);
        console.log("Doctor information updated successfully");
        res.status(200).json({ message: 'Doctor information updated successfully' });
    } 
    else {
    await database.promise().query('INSERT INTO DOCTORS (FIRST_NAME, LAST_NAME, IMAGE_URL, SPECIALIZATION, LOCATION, FEE, PARTNER_ID) VALUES (?, ?, ?, ?, ?, ?, ?)', values);
    console.log("Doctor information received successfully");
    res.status(200).json({ message: 'Doctor information received successfully' });
    }
});

module.exports = router;