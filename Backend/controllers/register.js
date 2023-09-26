const bcrypt = require('bcrypt');
const db = require('../config/database');
const { isValidEmail } = require('../helpers/emailValidation');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!isValidEmail(username)) {
      return res.status(400).json({ message: 'Nieprawidłowy adres e-mail' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Hasło musi mieć co najmniej 6 znaków' });
    }

    // Sprawdź, czy użytkownik o podanym username już istnieje
    const [existingUsers] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

    if (existingUsers.length > 0) {
      return res.status(409).json({ message: 'Użytkownik już istnieje' });
    }

    // Zahaszuj hasło przed zapisaniem do bazy danych
    const hashedPassword = await bcrypt.hash(password, 10);

    // Dodaj użytkownika do bazy danych
    await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

    return res.status(201).json({ message: 'Użytkownik został zarejestrowany' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Błąd serwera' });
  }
};