const router = require('express').Router();
const { check } = require('express-validator');

//CONTROLLER
const controller = require('../../controllers/card.controller');

//MIDDLEWARE
const auth = require('../middleware/auth.middle');

// @route   GET api/cards
// @desc    Get all cards
// @access  Private
router.get('/:mode', auth, controller.getAllByMode);

// @route   GET api/cards
// @desc    Get all cards
// @access  Private
// router.get('/:mode', controller.getAll);

module.exports = router;
