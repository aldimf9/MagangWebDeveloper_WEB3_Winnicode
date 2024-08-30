const express = require('express');
const { register, login } = require('./controllers/authcontroller');
const { createApplication, getNotifications } = require('./controllers/applycontroller');
const authMiddleware = require('./middlewear/auth');

const router = express.Router();

// Auth Routes
router.post('/register', register);
router.post('/login', login);

// Application Routes
router.post('/applications/:id', createApplication);
router.get('/notifications/:id', getNotifications);

module.exports = router;
