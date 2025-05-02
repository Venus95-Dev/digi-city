const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/authController');  // درست اینجوری
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getMe);
// router.put('/update-profile', authMiddleware, updateProfile);
// router.put('/change-password', authMiddleware, changePassword);



module.exports = router;

