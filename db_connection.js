var mysql = require("mysql");

var connection = mysql.createPool({
    host:"localhost",
    user: "root",
    password:"",
    database:"test",
    multipleStatements:true,
})

module.exports=connection;