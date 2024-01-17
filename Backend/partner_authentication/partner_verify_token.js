const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const jwtSecretKey = require('../config/jwtsecretkey')
const database = require("../database/database");
const bodyParser = require('body-parser');

router.use(bodyParser.json());

const partnerVerifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json('Access denied. Token not provided');
    }

    jwt.verify(token, jwtSecretKey, async(err, decoded) => {
        if (err) {
            return res.status(401).json('session expired, please login again');
        }
        req.user = decoded;
        checkPartnerEmail = await database.promise().query('SELECT COUNT(*) AS count FROM PARTNERS WHERE EMAILID = ?', req.user.email)
        if (checkPartnerEmail[0][0].count > 0) {
            next();
          } else {
            console.log('you need to be a partner to access')
            res.status(404).json("you need to be a partner to access");
          }
    });
};

module.exports = partnerVerifyToken;