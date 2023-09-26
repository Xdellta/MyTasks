const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwt');
const db = require('../config/database');

function authenticateToken(requiredRoles) {
  return async (req, res, next) => {
    try {
      const token = req.header('Authorization');

      if (!token) {
        return res.status(401).json({ message: 'Brak tokena JWT. Brak autoryzacji.' });
      }

      // Sprawdź, czy token istnieje w bazie danych
      const [sessionResults] = await db.query('SELECT * FROM user_sessions WHERE session_token = ?', [token]);

      if (sessionResults.length === 0) {
        return res.status(403).json({ message: 'Nieprawidłowy token JWT. Brak autoryzacji.' });
      }

      // Wyciągnij informacje z sesji, które są potrzebne do weryfikacji tokena
      const userId = sessionResults[0].user_id;

      // Weryfikuj token przy użyciu odpowiednich informacji
      jwt.verify(token, secretKey, (err, decodedToken) => {
        if (err || decodedToken.userId !== userId) {
          return res.status(403).json({ message: 'Nieprawidłowy token JWT. Brak autoryzacji.' });
        }

        req.user = decodedToken;

        // Sprawdź, czy rola użytkownika jest wymagana
        if (requiredRoles && requiredRoles.length > 0) {
          const userRole = req.user.userRole;

          // Jeśli użytkownik nie ma wymaganej roli, odrzuć dostęp
          if (!requiredRoles.includes(userRole)) {
            return res.status(403).json({ message: 'Brak uprawnień do tej akcji.' });
          }
        }

        // Wywołaj funkcję next tylko jeśli nie wystąpiły błędy
        next();
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Błąd serwera' });
    }
  };
}

module.exports = authenticateToken;