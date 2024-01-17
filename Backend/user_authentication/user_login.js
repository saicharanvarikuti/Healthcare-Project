const express = require("express");
const router = express.Router();
const database = require('../database/database')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const jwtSecretKey = require('../config/jwtsecretkey')

router.use(bodyParser.json());

router.post('/login',(req,res)=>{
  database.query('SELECT * FROM USERS WHERE EMAILID = ?',req.body.EMAILID,async(err, results)=>{
    if(err){
      console.error('error parsing details from database:',err)
      res.status(500).json("Internal Server Error")
    }
    else
    {
      if(results.length === 0){
        console.log("user does not exist, please register")
        res.status(404).json("user does not exist, please register")
      }
      else{
        const userStatusCheck = await database.promise().query('SELECT STATUS FROM USERS WHERE EMAILID = ?',req.body.EMAILID)
        if (userStatusCheck[0][0].STATUS === "ACTIVE") {
          const passwordCompare = await bcrypt.compare(req.body.PASSWORD, results[0].PASSWORD)
          if (passwordCompare) {
            const token = jwt.sign({ email: req.body.EMAILID }, jwtSecretKey, { expiresIn: '10000s' });
            console.log('login successful')
            res.status(200).json({ token, message: 'login successful' });
          }
          else {
            console.log("incorrect password")
            res.status(401).json("incorrect password")
          }
        }
        else{
          console.log("User blocked")
          res.status(401).json({message:"User blocked"})
        }
      }
    }
  })
})


module.exports = router;