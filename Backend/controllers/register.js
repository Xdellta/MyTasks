const bcrypt = require('bcrypt');
const db = require('../config/database');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwt');
const { isValidEmail } = require('../helpers/emailValidation');
const { sendEmail } = require('../helpers/emailService');
const { generateVerifyToken } = require('../helpers/generateVerifyToken');

exports.register = async (req, res) => {
  try {
    const { username, email, password, repeatPassword } = req.body;

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Nieprawidłowy adres e-mail' });
    }

    if (username.length < 3 || username.length > 25) {
      return res.status(400).json({ message: 'Username musi mieć od 3 do 25 znaków' });
    }

    const existingUser = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Ta nazwa użytkownika jest zajęta' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Hasło musi mieć co najmniej 6 znaków' });
    }

    if (password !== repeatPassword) {
      return res.status(400).json({ message: 'Hasła nie są takie same' });
    }

    // Zahaszuj hasło przed zapisaniem do bazy danych
    const hashedPassword = await bcrypt.hash(password, 10);

    // Dodaj użytkownika do bazy danych
    const result = await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
    const userId = result.insertId; // Pobierz user_id nowo stworzonego użytkownika

    // Generowanie weryfikacji emaila
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    const emailVerificationToken = generateVerifyToken('user_email_verification');

    await db.query('INSERT INTO user_email_verification (user_id, email, verification_token, verifed, expiration_date) VALUES (?, ?, ?, ?, ?)', [userId, email, emailVerificationToken, false, expirationDate]);

    // Wysyłanie wiadomości mailingowej

    const subject = `Autoryzacja konta MyTasks`;
    const verificationLink = `http://localhost:3000/api/emailverify/${emailVerificationToken}`;
    const text = `
      Cześć ${username}

      Twoje konto w serwisie MyTasks zostało pomyślnie stworzone. Pozostaje już tylko dokonać weryfikacji tego e-maila aby korzystać z naszych, wszystkich funkcji.
      Kliknij poniższy link, aby zweryfikować swoje konto:

      ${verificationLink}

      Jeżeli nie zakładałeś konta w MyTasks, zignoruj tą wiadomość. Wówczas konto zostanie usunięte po upływie 7 dni.

      Dziękujemy,
      Zespół MyTasks
    `;

    sendEmail(email, subject, text)

    // Logowanie użytkownika
    const userRole = 'user';
    const token = jwt.sign({ userId: userId, userRole }, secretKey, { expiresIn: '1h' });
    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + 1);

    await db.query('INSERT INTO user_actions (user_id, action_type) VALUES (?, ?)', [userId, 'login']);
    await db.query('INSERT INTO user_sessions (user_id, session_token, expiration_time) VALUES (?, ?, ?)', [userId, token, expirationTime]);

    return res.status(201).json({ message: 'Użytkownik został zarejestrowany', token, userRole });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Błąd serwera' });
  }
};