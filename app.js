const express = require('express')
const app = express()

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "leon"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("DELETE FROM customers WHERE name = 'Abaadsa Inc'", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

app.get('/', (req,res)=>{
	res.send('hxd')
})

app.listen(80)