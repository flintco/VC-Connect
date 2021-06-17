var express = require('express');
var router = express.Router();
var mysql = require('mysql');
let config = require('../config.js');

// POST method route to add new card to database
router.post('/', function (req, res) {
    
    //Recieves req and parses JSON
    var companyName = JSON.stringify(req.body.name)
    var companyContact = JSON.stringify(req.body.contact)
    var companyIndustry = JSON.stringify(req.body.industry)
    //text = JSON.parse(text)

    console.log('This is ' + companyName)
    //console.log(req)
    res.set('Content-Type', 'text/plain')
    //res.send('This is ' + text)

    let connection = mysql.createConnection(config);

    var sql = "INSERT INTO StartupTable (Name, Contact, Industry) VALUES (" + companyName + ", " + companyContact + ", " + companyIndustry + ")";
    connection.query(sql, function (err, result) {
    if (err) throw err;
        res.send('Question Successfully added');
    });
})

module.exports = router;