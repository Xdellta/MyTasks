const bcrypt = require('bcrypt');
const db = require('../config/database');
const { isValidEmail } = require('../helpers/emailValidation');


exports.register = async (req, res) => {
  const { username, password } = req.body;

  if (!isValidEmail(username)) {
    res.status(400).json({ message: 'Nieprawidłowy adres e-mail' });
    return;
  }

  if (password.length < 6) {
    res.status(400).json({ message: 'Hasło musi mieć co najmniej 6 znaków' });
    return;
  }

  // Sprawdź, czy użytkownik o podanym username już istnieje
  db.query('SELECT * FROM users WHERE username = ?', [username], async (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Błąd serwera' });
    } else if (results.length > 0) {
      res.status(409).json({ message: 'Użytkownik już istnieje' });
    } else {
      // Zahaszuj hasło przed zapisaniem do bazy danych
      const hashedPassword = await bcrypt.hash(password, 10);

      // Dodaj użytkownika do bazy danych
      db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Błąd serwera' });
        } else {
          res.status(201).json({ message: 'Użytkownik został zarejestrowany' });
        }
      });
    }
  });
};