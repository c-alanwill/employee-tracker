const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'team_db',
}, 
console.log('Connected to team database')
);

module.exports = db;