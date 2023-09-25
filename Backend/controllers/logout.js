const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwt');
const db = require('../config/database');

exports.logout = (req, res) => {
  // Pobierz token JWT z nagłówka
  const token = req.header('Authorization');

  // Odczytaj dane z tokena JWT
  jwt.verify(token, secretKey, (err, decodedToken) => {
    // Odczytaj ID użytkownika z tokena
    const userId = decodedToken.userId;

    // Dodaj akcję "logout" do tabeli "user_actions" w bazie danych
    db.query('INSERT INTO user_actions (user_id, action_type) VALUES (?, ?)', [userId, 'logout'], (addActionError) => {
      if (addActionError) {
        console.error(addActionError);
        res.status(500).json({ message: 'Błąd serwera' });
      } else {
        // Usuń wszystkie rekordy z tabeli "user_sessions" dla danego id użytkownika
        db.query('DELETE FROM user_sessions WHERE user_id = ?', [userId], (deleteSessionError) => {
          if (deleteSessionError) {
            console.error(deleteSessionError);
            res.status(500).json({ message: 'Błąd serwera' });
          } else {
            res.status(200).json({ message: 'Wylogowano pomyślnie' });
          }
        });
      }
    });
  });
};