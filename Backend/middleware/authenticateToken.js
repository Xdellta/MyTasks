const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwt');

function authenticateToken(requiredRoles) {
  return function (req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ message: 'Brak tokena JWT. Brak autoryzacji.' });
    }

    jwt.verify(token, secretKey, (err, decodedToken) => {
      if (err) {
        return res.status(403).json({ message: 'Nieprawidłowy token JWT. Brak autoryzacji.' });
      }

      req.user = decodedToken;

      // Sprawdź, czy rola użytkownika jest wymagana
      if (requiredRoles && requiredRoles.length > 0) {
        const userRole = req.user.role;

        // Jeśli użytkownik nie ma wymaganej roli, odrzuć dostęp
        if (!requiredRoles.includes(userRole)) {
          return res.status(403).json({ message: 'Brak uprawnień do tej akcji.' });
        }
      }

      next();
    });
  };
}

module.exports = authenticateToken;