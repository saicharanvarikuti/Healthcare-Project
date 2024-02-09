const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const database = require("../database/database");

router.use(bodyParser.json());

router.post('/search', async (req, res) => {
    const searchQuery = req.body.searchQuery.toLowerCase();

    try {
        const doctorResults = await database.promise().query(`
            SELECT * FROM DOCTORS
            WHERE LOWER(FIRST_NAME) LIKE '%${searchQuery}%' 
            OR LOWER(LAST_NAME) LIKE '%${searchQuery}%' 
            OR LOWER(SPECIALIZATION) LIKE '%${searchQuery}%'
        `);

        const therapyResults = await database.promise().query(`
            SELECT * FROM THERAPIES
            WHERE LOWER(THERAPY_NAME) LIKE '%${searchQuery}%' 
            OR LOWER(DESCRIPTION) LIKE '%${searchQuery}%' 
            OR LOWER(LOCATION) LIKE '%${searchQuery}%'
        `);

        const nurseResults = await database.promise().query(`
            SELECT * FROM NURSE_SERVICES
            WHERE LOWER(NURSE_SERVICE_NAME) LIKE '%${searchQuery}%' 
            OR LOWER(DESCRIPTION) LIKE '%${searchQuery}%' 
            OR LOWER(LOCATION) LIKE '%${searchQuery}%'
        `);

        const searchResponse = {
            doctors: doctorResults[0],
            therapies: therapyResults[0],
            nurses: nurseResults[0],
        };
        console.log(searchResponse.doctors[0],searchResponse.therapies[0],searchResponse.nurses[0])
        res.status(200).json(searchResponse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
