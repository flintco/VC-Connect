var express = require('express');
var router = express.Router();
var mysql = require('mysql');
let config = require('../config.js');

// POST method route to add new card to database
router.post('/', function (req, res) {
    //res.send('POST request for new card')

    const text = req.body
    console.log('This is ' + text)
    //console.log(req)
    res.set('Content-Type', 'text/plain')
    res.send('This is ' + text)
    /*let connection = mysql.createConnection(config);

    var sql = "INSERT INTO table1 (COUNT, Question, Answer) VALUES (5, 'New item #2', 'This is the answer #2')";
    connection.query(sql, function (err, result) {
    if (err) throw err;
        res.send('Question Successfully added');
    });*/
})

module.exports = router;