const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const database = require('../database/database');

router.use(bodyParser.json());

router.get('/doctors/:specialization',(req, res) => {
    const specialization = req.params.specialization;
    database.query('SELECT * FROM DOCTORS WHERE SPECIALIZATION = ?',specialization,(err,results)=>{
        if (err) {
            console.error('Error querying the database: ',err);
            res.status(500).send('Internal Server Error');
          }
          else{
            res.status(200).json(results);
          }
    })
})

router.get('/doctors',(req,res) => {
  database.query('SELECT * FROM DOCTORS',(err,results)=>{
    if (err) {
        console.error('Error querying the database: ',err);
        res.status(500).send('Internal Server Error');
      }
      else{
        res.status(200).json(results);
      }
})
})

module.exports = router;
