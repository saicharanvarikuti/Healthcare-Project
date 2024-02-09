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

<<<<<<< HEAD
router.get('/therapies',(req,res) => {
  database.query('SELECT * FROM THERAPIES',(err,results)=>{
    if (err) {
        console.error('Error querying the database: ',err);
        res.status(500).send('Internal Server Error');
      }
      else{
        res.status(200).json(results);
      }
})
})

router.get('/nurse',(req,res) => {
  database.query('SELECT * FROM NURSE_SERVICES',(err,results)=>{
    if (err) {
        console.error('Error querying the database: ',err);
        res.status(500).send('Internal Server Error');
      }
      else{
        res.status(200).json(results);
      }
})
})

=======
>>>>>>> c5aa4c5825dd8a5c1129843b2f1106c14ac4515a
module.exports = router;
