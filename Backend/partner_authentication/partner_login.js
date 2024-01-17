const express = require("express");
const router = express.Router();
const database = require('../database/database')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const jwtSecretKey = require('../config/jwtsecretkey')

router.use(bodyParser.json());

router.post('/partnerLogin',(req,res)=>{
  database.query('SELECT * FROM PARTNERS WHERE EMAILID = ?',req.body.EMAILID,async(err, results)=>{
    if(err){
      console.error('error parsing details from database:',err)
      res.status(500).json("Internal Server Error")
    }
    else
    {
      if(results.length === 0){
        console.log("partner details does not match, please register")
        res.status(404).json("partner details does not match, please register")
      }
      else{
        const passwordCompare = await bcrypt.compare(req.body.PASSWORD, results[0].PASSWORD)
        if(passwordCompare){
          const token = jwt.sign({ email: req.body.EMAILID }, jwtSecretKey, { expiresIn: '600s' });
          console.log('partner login successful')
          res.status(200).json({ token, message: 'partner login successful' });
        }
        else{
            console.log("incorrect password")
            res.status(401).json("incorrect password")
        }
      }
    }
  })
})


module.exports = router;