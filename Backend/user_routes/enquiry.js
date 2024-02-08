const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const database = require("../database/database");

router.use(bodyParser.json());

router.post('/enquire', async (req, res) => {
    const values = [
        req.body.name,
        req.body.email,
        req.body.phoneNumber,
        req.body.message
    ];

    try {
        await database.promise().query('INSERT INTO ENQUIRY (NAME, EMAILID, PHONE_NUM, MESSAGE) VALUES (?, ?, ?, ?)', values);
        console.log("enquiry details stored in database");
        res.status(200).json({ message: 'we received your enquiry, our team will contact you soon!' });
    } catch (error) {
        console.error("Error accepting enquiry:", error);
        res.status(400).json({ message: 'There is an error accepting your enquiry, please try again or directly call us' });
    }
});

module.exports = router;