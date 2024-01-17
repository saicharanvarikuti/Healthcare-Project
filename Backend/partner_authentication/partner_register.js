const express = require("express");
const router = express.Router();
const database = require('../database/database')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const jwtSecretKey = require('../config/jwtsecretkey')

router.use(bodyParser.json());

router.post('/partnerRegister', async (req, res) => {
    const partnerData = req.body;
    const checkEmailResult = await database.promise().query('SELECT COUNT(*) AS count FROM PARTNERS WHERE EMAILID = ?', partnerData.EMAILID);
    if (checkEmailResult[0][0].count > 0) {
        res.status(404).json("You are already registered as a partner, please login");
      } else {
        const hashedPassword = await bcrypt.hash(partnerData.PASSWORD, 10);
        const values = [
            partnerData.PARTNER_NAME,
            partnerData.EMAILID,
            hashedPassword,
            partnerData.SERVICE_TYPE
        ];
        await database.promise().query('INSERT INTO PARTNERS (PARTNER_NAME, EMAILID, PASSWORD, SERVICE_TYPE) VALUES (?, ?, ?, ?)', values);
      
      const token = jwt.sign({ email: partnerData.EMAILID }, jwtSecretKey, { expiresIn: '600s' });
      console.log("Data inserted into the database successfully");
      res.status(200).json({ token, message: 'Partner registration successful, please enter more information' });
    }
}
);

module.exports = router;