const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const database = require("../database/database");
const adminVerifyToken = require('../admin_authentication/admin_verify_token');

router.use(bodyParser.json());


router.post('./DeleteUser',adminVerifyToken,async(req,res)=>{
    const userId = req.body.USER_ID;
    const result = await database.promise().query('DELETE FROM USERS WHERE USER_ID = ?',userId)
    if (result.affectedRows > 0) {
        res.status(200).json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
})

module.exports = router;