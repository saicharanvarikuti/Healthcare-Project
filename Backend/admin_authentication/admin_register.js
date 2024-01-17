const express = require("express");
const router = express.Router();
const database = require('../database/database')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const jwtSecretKey = require('../config/jwtsecretkey')

router.use(bodyParser.json());

router.post('/adminRegister', async (req, res) => {
    const adminData = req.body;
    const checkEmailResult = await database.promise().query('SELECT COUNT(*) AS count FROM ADMINS WHERE EMAILID = ?', adminData.EMAILID);
    if (checkEmailResult[0][0].count > 0) {
        res.status(404).json("admin already exists. please login");
      } else {
        const hashedPassword = await bcrypt.hash(adminData.PASSWORD, 10);
        console.log(hashedPassword)
        const values = [
            adminData.FIRST_NAME,
            adminData.LAST_NAME,
            adminData.EMAILID,
            hashedPassword,
            adminData.DESIGNATION
        ];
        await database.promise().query('INSERT INTO ADMINS (FIRST_NAME, LAST_NAME, EMAILID, PASSWORD, DESIGNATION) VALUES (?, ?, ?, ?, ?)', values);
      
      const token = jwt.sign({ email: adminData.EMAILID }, jwtSecretKey, { expiresIn: '600s' });
      console.log("admin registration successful");
      res.status(200).json({ token, message: 'admin registration successful' });
    }
}
);

module.exports = router;