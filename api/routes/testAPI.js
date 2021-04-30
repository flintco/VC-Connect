var express = require("express");
var router = express.Router();
let config = require('../config.js');

router.get("/",function(req,res,next){
    res.send("API Response 1");

    let connection = mysql.createConnection(config);

    var sql = "INSERT INTO table1 (count) VALUES ('1000')";
    connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    });

});

module.exports = router;

