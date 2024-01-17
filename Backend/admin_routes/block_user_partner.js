const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const database = require("../database/database");
const adminVerifyToken = require('../admin_authentication/admin_verify_token');

router.use(bodyParser.json());

router.post('/blockUser', adminVerifyToken, async (req, res) => {
    try {
        const userId = req.body.USER_ID;
        await database.promise().query('MODIFY USERS SET STATUS="BLOCKED" WHERE USER_ID = ?', userId);
        res.status(200).send('User Blocked successfully');
    } catch (error) {
        console.error('Error blocking user:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/unblockUser', adminVerifyToken, async (req, res) => {
    try {
        const userId = req.body.USER_ID;
        await database.promise().query('MODIFY USERS SET STATUS="ACTIVE" WHERE USER_ID = ?', userId);
        res.status(200).send('User unblocked successfully');
    } catch (error) {
        console.error('Error unblocking user:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/blockPartner', adminVerifyToken, async (req, res) => {
    try {
        const partnerId = req.body.PARTNER_ID;
        await database.promise().query('MODIFY PARTNERS SET STATUS="BLOCKED" WHERE PARTNER_ID = ?', partnerId);
        res.status(200).send('Partner Blocked successfully');
    } catch (error) {
        console.error('Error blocking Partner:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/unblockPartner', adminVerifyToken, async (req, res) => {
    try {
        const partnerId = req.body.PARTNER_ID;
        await database.promise().query('MODIFY PARTNERS SET STATUS="ACTIVE" WHERE PARTNER_ID = ?', partnerId);
        res.status(200).send('Partner unblocked successfully');
    } catch (error) {
        console.error('Error unblocking Partner:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;