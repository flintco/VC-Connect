var express = require("express");
var router = express.Router();
var mysql = require('mysql');
let config = require('../config.js');

router.get("/",function(req,res,next){
    var industry = 'Fast Food';
    let connection = mysql.createConnection(config);
    var sql = "SELECT * FROM schema_test.StartupTable WHERE Industry = " + industry;
    connection.query(sql, function (err, result) {
    if (err) throw err;
        res.send(result);
    });
});

module.exports = router;

