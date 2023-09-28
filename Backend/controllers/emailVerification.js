const db = require('../config/database');

exports.emailverify = async (req, res) => {
  try {
    const token = req.params.token;

    const row = await new Promise((resolve, reject) => {
      db.get('SELECT * FROM users_email_verification WHERE token = ?', [token], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });

    if (!row) {
      return res.status(404).json({ error: 'Token weryfikacyjny nie istnieje' });
    }

    const currentTime = new Date().getTime();
    const expirationTime = new Date(row.expiration_date).getTime();

    if (currentTime > expirationTime) {
      return res.status(400).json({ error: 'Token weryfikacyjny wygasł' });
    }

    // Jeśli weryfikacja jest udana, aktualizuj pole 'verified' na 'true'
    await new Promise((resolve, reject) => {
      db.run('UPDATE users_email_verification SET verified = ? WHERE token = ?', [true, token], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    return res.status(201).json({ message: 'E-mail został zweryfikowany poprawnie' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Błąd serwera' });
  }
};