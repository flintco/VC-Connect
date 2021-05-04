var express = require('express');
var router = express.Router();
var mysql = require('mysql');
let config = require('../config.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  /*let connection = mysql.createConnection(config);

  console.log("Got here");

  var sql = "INSERT INTO table1 (count) VALUES ('1200')";
  connection.query(sql, function (err, result) {
  if (err) throw err;
  res.send('API Response 2 successful');
  }); */
});

module.exports = router;
