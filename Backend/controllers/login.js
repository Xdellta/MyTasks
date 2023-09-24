const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database');
const { secretKey } = require('../config/jwt');
const { isValidEmail } = require('../helpers/emailValidation');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!isValidEmail(username)) {
    res.status(400).json({ message: 'Nieprawidłowe dane logowania' });
    return;
  }

  if (password.length < 6) {
    res.status(400).json({ message: 'Nieprawidłowe dane logowania' });
    return;
  }

  // Sprawdź, czy użytkownik istnieje w bazie danych
  db.query('SELECT * FROM users WHERE email = ?', [username], async (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Błąd serwera' });
    } else if (results.length === 0) {
      res.status(401).json({ message: 'Nieprawidłowe dane logowania' });
    } else {
      const user = results[0];

      // Sprawdź hasło
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        // Pobierz rolę użytkownika z bazy danych
        db.query('SELECT role_name FROM user_roles AS ur INNER JOIN user_role_assignments AS ura ON ur.role_id = ura.role_id WHERE ura.user_id = ?', [user.user_id], (roleError, roleResults) => {
          if (roleError) {
            console.error(roleError);
            res.status(500).json({ message: 'Błąd serwera' });
          } else if (roleResults.length === 0) {
            res.status(401).json({ message: 'Nieprawidłowe dane logowania' });
          } else {
            const role = roleResults[0].role_name;

            // Wygeneruj token JWT
            const token = jwt.sign({ userId: user.user_id, role }, secretKey, { expiresIn: '1h' });

            res.status(200).json({ token });
          }
        });
      } else {
        res.status(401).json({ message: 'Nieprawidłowe dane logowania' });
      }
    }
  });
};