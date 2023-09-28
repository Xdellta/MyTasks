const crypto = require('crypto');
const db = require('../config/database');

async function generateVerifyToken(db_table) {
  let isTokenUnique = false;
  let token;

  while (!isTokenUnique) {
    token = crypto.randomBytes(16).toString('hex');

    const existingToken = await db.query(`SELECT * FROM ${db_table} WHERE verify_token = ?`, [token]);

    if (existingToken.length === 0) {
      isTokenUnique = true;
    }
  }

  return token;
}