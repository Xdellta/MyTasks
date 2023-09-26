const express = require('express');
const router = express.Router();
const { login } = require('../controllers/login');
const { register } = require('../controllers/register');
const { logout } = require('../controllers/logout');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/register', register);
router.post('/login', login);

// Tutaj używamy funkcji authenticateToken jako funkcji obsługi
router.post('/logout', authenticateToken(['user', 'administrator']), logout);

module.exports = router;