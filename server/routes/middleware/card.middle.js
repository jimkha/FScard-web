const middleware = {};
const { check, validationResult } = require('express-validator');

//MODEL
const Card = require('../../models/Card');

//VALIDATOR INPUT
// middleware.checkCardInput = [
//   check(['title']).isEmpty(),
//   (req, res, next) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     next();
//   },
// ];

//CHECK OWNER CARD
middleware.checkCardOwner = async (req, res, next) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card || card.user !== req.user.id) {
      return res.status(404).json({ msg: 'Card not found' });
    }
    next();
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
module.exports = middleware;
