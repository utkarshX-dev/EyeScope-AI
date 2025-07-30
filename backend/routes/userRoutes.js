const express = require('express');
const router = express.Router();
const { signUp, login, editProfile } = require('../controllers/userController.js');
router.post('/signup', signUp);
router.post('/login', login);
router.put("/edit", editProfile);

module.exports = router;
