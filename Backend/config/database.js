const db = require('mysql2-promise')();

db.configure({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mytasks',
});

module.exports = db;