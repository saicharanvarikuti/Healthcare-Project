const express = require("express");
const router = express.Router();
const database = require('../database/database')
const bodyParser = require('body-parser');
const partnerVerifyToken = require('./partner_verify_token')

router.use(bodyParser.json());

router.post('/nurseServiceInformation', partnerVerifyToken, async(req, res) => {
    const nurseData = req.body;
    const values = [
        nurseData.NURSE_SERVICE_NAME,
        nurseData.DESCRIPTION,
        nurseData.IMAGE_URL,
        nurseData.LOCATION,
        nurseData.FEE
    ];
    await database.promise().query('INSERT INTO NURSE_SERVICES (NURSE_SERVICE_NAME, DESCRIPTION, IMAGE_URL, LOCATION, FEE) VALUES (?, ?, ?, ?, ?)', values);
    console.log("Nurse service information updated successfully");
    res.status(200).json({ message: 'Nurse service information updated successfully' });
});

module.exports = router;