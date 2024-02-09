const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const database = require("../database/database");
const loginStatusCheck = require("../user_authentication/login_status");

router.use(bodyParser.json());

router.get('/myProfile', loginStatusCheck, async (req, res) => {
    try {
        const userIdQuery = await database.promise().query('SELECT USER_ID FROM USERS WHERE EMAILID = ?', req.user.email);
        const firstNameQuery = await database.promise().query('SELECT FIRST_NAME FROM USERS WHERE EMAILID = ?', req.user.email);
        const lastNameQuery = await database.promise().query('SELECT LAST_NAME FROM USERS WHERE EMAILID = ?', req.user.email);
        const statusQuery = await database.promise().query('SELECT STATUS FROM USERS WHERE EMAILID = ?', req.user.email);

        const userId = userIdQuery[0][0].USER_ID;
        const firstName = firstNameQuery[0][0].FIRST_NAME;
        const lastName = lastNameQuery[0][0].LAST_NAME;
        const emailId = req.user.email;
        const status = statusQuery[0][0].STATUS;

        const profileDetails = { userId, firstName, lastName, emailId, status };
        res.status(200).send(profileDetails);
    } catch (error) {
        console.error('Error fetching profile details:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

module.exports = router;
