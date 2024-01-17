const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const database = require("../database/database");

router.use(bodyParser.json());

router.post('/search', async(req, res) => {
        const searchQuery = req.body.searchQuery.toLowerCase();
        const searchResults = await database.promise().query(`SELECT * FROM DOCTORS WHERE LOWER(FIRST_NAME) LIKE '%${searchQuery}%' OR LOWER(LAST_NAME) LIKE '%${searchQuery}%' OR LOWER(SPECIALIZATION) LIKE '%${searchQuery}%'`);
        res.status(200).json(searchResults[0]);
        console.log(searchResults[0]);
});

module.exports = router;