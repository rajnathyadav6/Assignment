const mysql = require('mysql2');

// Create the database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'crm_db'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

module.exports = db;
