const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database');
const { secretKey } = require('../config/jwt');
const { isValidEmail } = require('../helpers/emailValidation');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!isValidEmail(email) || password.length < 6) {
      res.status(400).json({ message: 'Nieprawidłowe dane logowania' });
      return;
    }

    const [userRow] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (!userRow) {
      res.status(401).json({ message: 'Nieprawidłowe dane logowania' });
      return;
    }

    const user = userRow[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Nieprawidłowe dane logowania' });
      return;
    }

    const [roleRow] = await db.query('SELECT role_name FROM user_roles AS ur INNER JOIN user_role_assignments AS ura ON ur.role_id = ura.role_id WHERE ura.user_id = ?', [user.user_id]);
    if (!roleRow) {
      res.status(401).json({ message: 'Nieprawidłowe dane logowania' });
      return;
    }

    const userRole = roleRow[0].role_name;

    const token = jwt.sign({ userId: user.user_id, userRole }, secretKey, { expiresIn: '1h' });
    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + 1);

    await db.query('INSERT INTO user_actions (user_id, action_type) VALUES (?, ?)', [user.user_id, 'login']);
    await db.query('INSERT INTO user_sessions (user_id, session_token, expiration_time) VALUES (?, ?, ?)', [user.user_id, token, expirationTime]);

    res.status(200).json({ token, userRole });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Błąd serwera' });
  }
};