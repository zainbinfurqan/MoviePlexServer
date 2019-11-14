
var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    // host     : 'localhost',
    // user     : 'root',
    // password : '',
    // database : 'movieplexdb'
    host : 'db4free.net',
    user     : 'rabiakhan',
    password : 'pakistan@123',
    database : 'movieplexdb'
});

// connection.connect(function(err) {
//     if (err) throw err;
//     else{
//         console.log("connect")
//     }
// });

module.exports = connection;