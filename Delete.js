var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "servicio1",
  password: "servicio1.123",
  database: "empleado"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM empleados WHERE nombre = 'paola'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});