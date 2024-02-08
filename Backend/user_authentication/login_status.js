const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const jwtSecretKey = require('../config/jwtsecretkey')

router.use(bodyParser.json());

function loginStatusCheck(req,res,next){
    const token = req.header('Authorization');
    if (!token) {
        res.redirect('/login');
    }
    else{
        jwt.verify(token, jwtSecretKey, (err, decoded) => {
            if (err) {
                res.redirect('/login');
                console.log("session expired, please login again")
            }
            else{
                req.user = decoded;
                next();
            }
        })
    }
}

module.exports = loginStatusCheck;