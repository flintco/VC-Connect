console.log("Got here");

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pat$areBest1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Database is connected!");
});

module.exports = con;