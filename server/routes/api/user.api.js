const router = require('express').Router();
const { check } = require('express-validator');

//CONTROLLER
const controller = require('../../controllers/user.controller');

//MIDDLEWARE
const auth = require('../middleware/auth.middle');
const authGoogle = require('../middleware/authGoogle.middle');

// @route   GET api/user/auth
// @desc    load user
// @access  Public
router.get('/auth', auth, controller.loadUser);

// @route   POST api/user/login
// @desc    login, get token
// @access  Public
router.get('/login/:token', authGoogle, controller.login);

module.exports = router;
