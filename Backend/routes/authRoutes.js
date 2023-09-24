const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');

const { login } = require('../controllers/login');
const { register } = require('../controllers/register');
const { logout } = require('../controllers/logout');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', authenticateToken(['user']), logout);

module.exports = router;