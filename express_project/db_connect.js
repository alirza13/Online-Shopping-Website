mysql = require('mysql');

var db = mysql.createConnection({
	host: '127.0.0.1',
	user: 'shopManager',
	password: 'p@ssw0rD',
	database: 'cs308',
	port: 3306
});

module.exports = db;