const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'widget',
    dateStrings: true
})

connection.connect(err => {
    if (err) throw err;
    console.log("Connection successfully...");
})

module.exports = connection;