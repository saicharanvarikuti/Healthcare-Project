const express = require("express");
const router = express.Router();
const database = require('../database/database')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const jwtSecretKey = require('../config/jwtsecretkey')

router.use(bodyParser.json());

router.post('/register', async (req, res) => {
  const userData = req.body;
    const checkEmailResult = await database.promise().query('SELECT COUNT(*) AS count FROM USERS WHERE EMAILID = ?', userData.EMAILID);
    if (checkEmailResult[0][0].count > 0) {
      res.status(404).json("Email already exists, please login");
    } else {
      const hashedPassword = await bcrypt.hash(userData.PASSWORD, 10);
      const values = [
        userData.FIRST_NAME,
        userData.LAST_NAME,
        userData.GENDER,
        userData.DOB,
        userData.WEIGHT,
        userData.ADDRESS,
        userData.PHONENUMBER,
        userData.EMAILID,
        hashedPassword,
        userData.STATUS
      ];

      await database.promise().query('INSERT INTO USERS (FIRST_NAME, LAST_NAME, GENDER, DOB, WEIGHT, ADDRESS, PHONENUMBER, EMAILID, PASSWORD,STATUS) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', values);
      
      const token = jwt.sign({ email: userData.EMAILID }, jwtSecretKey, { expiresIn: '300s' });
      console.log("Data inserted into the database successfully");
      res.status(200).json({ token, message: 'Post request accepted' });
    }
  }
);

module.exports = router;