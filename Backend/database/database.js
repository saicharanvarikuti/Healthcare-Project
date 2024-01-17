const express = require("express");
const mysql = require('mysql2');

const database = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user: 'root',
    password: 'pAWAr5t@@r',
    database: 'healthcare',
  });

  database.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      throw err;
    }
    console.log("Database is connected");
  });


module.exports = database;