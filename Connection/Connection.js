'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    // host     : 'localhost',
    // user     : 'root',
    // password : '',
    // database : 'movieplexdb'
    host : 'db4free.net',
    user     : 'zainahmed',
    password : 'pakistan@123',
    database : 'savemoneydb'
});

connection.connect(function(err) {
    if (err) throw err;
    else{
        console.log("connect")
    }
});

module.exports = connection;