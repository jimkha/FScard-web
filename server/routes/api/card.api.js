const router = require('express').Router();

//CONTROLLER
const controller = require('../../controllers/card.controller');

//MIDDLEWARE
const auth = require('../middleware/auth.middle');
const card = require('../middleware/card.middle');

// @route   GET api/cards
// @desc    Get all cards by mode
// @access  Private
router.get('/:mode', auth.authToken, controller.getAllByMode);

// @route   POST api/cards
// @desc    Create new card
// @access  Private
router.post('/', auth.authToken, controller.createCard);

module.exports = router;
