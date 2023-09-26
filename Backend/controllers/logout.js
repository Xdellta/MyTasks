const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwt');
const db = require('../config/database');

exports.logout = async (req, res) => {
  try {
    const token = req.header('Authorization');
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.userId;

    await db.query('INSERT INTO user_actions (user_id, action_type) VALUES (?, ?)', [userId, 'logout']);
    await db.query('DELETE FROM user_sessions WHERE session_token = ?', [token]);

    res.status(200).json({ message: 'Wylogowano pomyślnie' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Błąd serwera' });
  }
};