const router = require('express').Router();

//CONTROLLER
const controller = require('../../controllers/user.controller');

//MIDDLEWARE
const auth = require('../middleware/auth.middle');

// @route   GET api/user/auth
// @desc    load user
// @access  Public
router.get('/auth', auth.authToken, controller.loadUser);

// @route   POST api/user/login
// @desc    login, get token
// @access  Public
router.get('/login/:token', auth.authGoogle, controller.login);

module.exports = router;
