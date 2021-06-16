var express = require('express');
var router = express.Router();
var mysql = require('mysql');
let config = require('../config.js');

// POST method route to add new card to database
router.post('/', function (req, res) {
    
    //Recieves req and parses JSON
    var text = JSON.stringify(req.body.name)
    //text = JSON.parse(text)

    console.log('This is ' + text)
    //console.log(req)
    res.set('Content-Type', 'text/plain')
    //res.send('This is ' + text)

    let connection = mysql.createConnection(config);

    var sql = "INSERT INTO table1 (COUNT, Question, Answer) VALUES (23, " + text + ", 'Another answer is here')";
    connection.query(sql, function (err, result) {
    if (err) throw err;
        res.send('Question Successfully added');
    });
})

module.exports = router;