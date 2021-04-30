//Run "Flush Priveledges" script in MySQL Workbench
//Type command "node database.js" to start database
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'schema_test'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

var sql = "INSERT INTO table1 (count) VALUES ('800')";
connection.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});
 
connection.end();