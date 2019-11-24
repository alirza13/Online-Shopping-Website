mysql = require('mysql');

var db = mysql.createConnection({
	host: '127.0.0.1',
	user: 'plantid-usr',
	password: '*@,D)Qu6~L*fe3wY',
	database: 'plant_id',
	port: 3306
});

module.exports = db;