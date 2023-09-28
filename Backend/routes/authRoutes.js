const express = require('express');
const router = express.Router();
const { login } = require('../controllers/login');
const { register } = require('../controllers/register');
const { logout } = require('../controllers/logout');
const { emailverify } = require('../controllers/emailVerification');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', authenticateToken(['user', 'administrator']), logout);
router.post('/emailverify:token', emailverify);

module.exports = router;