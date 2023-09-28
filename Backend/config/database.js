const db = require('mysql2-promise')();
const dotenv = require('dotenv');
dotenv.config();

try {
  db.configure({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
} catch (error) {
  console.error('Błąd podczas konfiguracji bazy danych:', error);
}

module.exports = db;