const middleware = {};
const { check, validationResult } = require('express-validator');

//VALIDATOR INPUT
middleware.checkCardInput = [
  check(['title']).isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = middleware;
