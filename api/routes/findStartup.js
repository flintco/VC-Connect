var express = require("express");
var router = express.Router();
var mysql = require('mysql');
let config = require('../config.js');

router.get("/:id",function(req,res,next){
    var newIndustry = req.params.id;
    let connection = mysql.createConnection(config);
    var sql = "SELECT * FROM schema_test.StartupTable WHERE Industry = " + "'" + newIndustry + "'";
    connection.query(sql, function (err, result) {
    if (err) throw err;
        res.send(result);
        //res.send(req.params.id)
    });
});

module.exports = router;

