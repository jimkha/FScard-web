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

// @route   PUT api/cards/:id
// @desc    Update card
// @access  Private
router.put(
  '/:id',
  [auth.authToken, card.checkCardOwner],
  controller.updateCard,
);

// @route   DELETE api/cards/:id
// @desc    Delete card
// @access  Private
router.delete(
  '/:id',
  [auth.authToken, card.checkCardOwner],
  controller.deleteCard,
);

module.exports = router;
