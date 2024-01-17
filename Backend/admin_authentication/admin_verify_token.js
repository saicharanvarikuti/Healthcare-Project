const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const jwtSecretKey = require('../config/jwtsecretkey')
const database = require("../database/database");
const bodyParser = require('body-parser');

router.use(bodyParser.json());

const adminVerifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json('Access denied. Token not provided');
    }

    jwt.verify(token, jwtSecretKey, async(err, decoded) => {
        if (err) {
            return res.status(401).json('session expired, please login again');
        }
        req.user = decoded;
        checkAdminEmail = await database.promise().query('SELECT COUNT(*) AS count FROM ADMINS WHERE EMAILID = ?', req.user.email)
        if (checkAdminEmail[0][0].count > 0) {
            next();
          } else {
            console.log('you need to be an admin to access')
            res.status(404).json("you need to be an admin to access");
          }
    });
};

module.exports = adminVerifyToken;