//Run "Flush Priveledges" script in MySQL Workbench
//Type command "node database.js" to start database
var mysql = require('mysql');

var config = {
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'schema_test'
};

module.exports = config;
