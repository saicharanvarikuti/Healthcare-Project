const express = require("express");
const router = express.Router();
const database = require('../database/database')
const bodyParser = require('body-parser');
const partnerVerifyToken = require('./partner_verify_token')

router.use(bodyParser.json());

router.post('/therapyInformation', partnerVerifyToken, async(req, res) => {
    const therapyData = req.body;
    const partnerId = await database.promise().query('SELECT PARTNER_ID FROM PARTNERS WHERE EMAILID=?',req.user.email)
    const values = [
        therapyData.THERAPY_NAME,
        therapyData.DESCRIPTION,
        therapyData.IMAGE_URL,
        therapyData.LOCATION,
        therapyData.FEE,
        partnerId[0][0].PARTNER_ID
    ];
    const checkPartnerIdResult = await database.promise().query('SELECT COUNT(*) AS count FROM THERAPIES WHERE PARTNER_ID = ?', partnerId[0][0].PARTNER_ID);
    if (checkPartnerIdResult[0][0].count > 0) {
        await database.promise().query(`UPDATE THERAPIES SET THERAPY_NAME=?,DESCRIPTION=?, IMAGE_URL=?, LOCATION=?, FEE=?, PARTNER_ID=? WHERE PARTNER_ID=?`,values);
        console.log("Therapy information updated successfully");
        res.status(200).json({ message: 'Therapy information updated successfully' });
    } 
    else {
    await database.promise().query('INSERT INTO THERAPIES (THERAPY_NAME, DESCRIPTION, IMAGE_URL, LOCATION, FEE, PARTNER_ID) VALUES (?, ?, ?, ?, ?, ?)', values);
    console.log("Therapy information updated successfully");
    res.status(200).json({ message: 'Therapy information updated successfully' });
    }
});

module.exports = router;