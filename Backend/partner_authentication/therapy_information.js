const express = require("express");
const router = express.Router();
const database = require('../database/database')
const bodyParser = require('body-parser');
const partnerVerifyToken = require('./partner_verify_token')

router.use(bodyParser.json());

router.post('/therapyInformation', partnerVerifyToken, async(req, res) => {
    const therapyData = req.body;
    const values = [
        therapyData.THERAPY_NAME,
        therapyData.DESCRIPTION,
        therapyData.IMAGE_URL,
        therapyData.LOCATION,
        therapyData.FEE
    ];
    await database.promise().query('INSERT INTO THERAPIES (THERAPY_NAME, DESCRIPTION, IMAGE_URL, LOCATION, FEE) VALUES (?, ?, ?, ?, ?)', values);
    console.log("Therapy information updated successfully");
    res.status(200).json({ message: 'Therapy information updated successfully' });
});

module.exports = router;