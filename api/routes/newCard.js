var express = require('express');
var router = express.Router();
var mysql = require('mysql');
let config = require('../config.js');

// POST method route to add new card to database
router.post('/', function (req, res) {
    //res.send('POST request for new card')

    let connection = mysql.createConnection(config);

    var sql = "INSERT INTO table1 (COUNT, Question, Answer) VALUES (0, 'New item', 'This is the answer')";
    connection.query(sql, function (err, result) {
    if (err) throw err;
        res.send('Question Successfully added');
    });
})

module.exports = router;